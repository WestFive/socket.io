package socketio.util;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.model.Connection.ConnectionCreate;
import socketio.model.Pool.Pool;
import socketio.model.Pool.PoolStatus;
import socketio.model.Message.Message;
import socketio.model.Pool.FrontPool;

import java.time.LocalDateTime;
import java.util.*;

/*
*
* 用于操作池的工具类
* */
@Component
public class PoolsUtil {
    public static Map<String,Pool> PoolsMap = new HashMap<String,Pool>();


    public static Map<String,PoolStatus> PoolsStatusMap = new HashMap<String,PoolStatus>();
;
    private final Logger logger = LoggerFactory.getLogger(PoolsUtil.class);
    //public static List<PoolStatus> PoolsStatus = new ArrayList<PoolStatus>();
    @Autowired
    private MessagehubUtil messagehubUtil;

    private RedisUtil redisUtil;

    @Autowired
    private ConnectionCache connectionCache;

    public PoolsUtil(RedisUtil redisUtil){
        this.redisUtil = redisUtil;
        if(PoolsMap.size()==0) {
            try {
                String str = redisUtil.select("poolsMap");
                Collection<Pool> list = new ArrayList<>();
                list = gson.fromJson(str, new TypeToken<List<Pool>>() {
                }.getType());
                for (Pool pool : list
                        ) {
                    pool.setClients(new HashSet<UUID>());
                    PoolsMap.put(pool.getPoolName(), pool);
                }
            } catch (Exception ex) {
                logger.error("初始化从Redis中读取Pools数据出错");
            }
        }
    }

    private final Gson gson = new Gson();
    //监听池集合

    @Autowired
    CountsCheck countsCheck;

    public void update(String poolName,Pool pool){
        Pool newpool = countsCheck.trySplit(poolName);
        if(newpool!=null)
        {
            pool = newpool;
        }
        PoolsMap.put(poolName,pool);
        redisUtil.insert("poolsMap",gson.toJson(PoolsMap.values()));


    }

    private void remove(String poolName){
        if(PoolsMap.containsKey(poolName)){
            PoolsMap.remove(poolName);
            redisUtil.insert("poolsMap",gson.toJson(PoolsMap.values()));
        }
    }

    public void listenPoolList()
    {

        PoolsStatusMap.clear();
            for (Pool pool:PoolsMap.values()
                    ) {
                try {
                    if(pool.getMessages()==null){
                        pool.setMessages(new HashMap<String,Message>());
                    }
                    PoolsStatusMap.put(pool.getPoolName(), new PoolStatus(pool.getPoolName(), pool.getPoolMode(), pool.getMessages().size(), pool.getMessageSortColumn(), pool.getDescription(), pool.getCreator(), pool.getCreateTime(), pool.getUpdateTime(), pool.getClients()));
                }catch (NullPointerException ex){
                   // logger.info(gson.toJson(pool),ex);
                    logger.info("errorCode"+"|NullPointException"+"|"+pool.getPoolMode()+"|"+pool.getMessages());
                }
            }
        messagehubUtil.eventBoardCast("listenPoolList", PoolsStatusMap.values());


    }

    public void receivePoolInfo(){//推送所有
        for (Pool pool:PoolsMap.values()
             ) {
            for (UUID uuid:pool.getClients()
                 ) {
                    if(ConnectionCache.connectionMap.containsKey(uuid.toString())&&pool.getClients().contains(uuid)) {
                        messagehubUtil.eventP2pReturn("receivePoolInfo", uuid, poolToFrontPool(pool));
                    }

            }

        }
    }

    public void receivePoolInfo(String poolName){//只推送当前池
        if(PoolsMap.containsKey(poolName)){
            Pool pool = PoolsMap.get(poolName);
            for (UUID uuid:pool.getClients()
                    ) {
                if(ConnectionCache.connectionMap.containsKey(uuid.toString())&&pool.getClients().contains(uuid)) {
                    messagehubUtil.eventP2pReturn("receivePoolInfo", uuid, poolToFrontPool(pool));
                }

            }
        }

    }

    public void listenPool(String poolName,SocketIOClient socketIOClient,AckRequest ackRequest) {
        try {
            poolName = poolName.replace("\"", "");
            if (PoolsMap.get(poolName) != null) {
                Set<UUID> clients =PoolsMap.get(poolName).getClients();
                 PoolsMap.get(poolName).getClients().add(socketIOClient.getSessionId());
                if (PoolsMap.get(poolName).getClients().size() > 0) {
                    PoolsMap.get(poolName).setClients(clients);
                    ackRequest.sendAckData(ResponseUtil.Sucess("listenPool", "监听成功", null));
                    messagehubUtil.eventP2pReturn("receivePoolInfo",socketIOClient.getSessionId(),poolToFrontPool(PoolsMap.get(poolName)));
                    listenPoolList();
                }
            } else {
                ackRequest.sendAckData(ResponseUtil.Error("listenPool", "监听失败，找不到该池", 104, null));
            }
        }catch (Exception ex){
            ackRequest.sendAckData(ResponseUtil.Error("listenPool",ex));
        }
    }

    public void unlistenPool(String poolName,SocketIOClient socketIOClient,AckRequest ackRequest){
        poolName = poolName.replace("\"", "");
        try{
        if(PoolsMap.get(poolName).getClients().contains(socketIOClient.getSessionId())) {
            PoolsMap.get(poolName).getClients().remove(socketIOClient.getSessionId());
            ackRequest.sendAckData(ResponseUtil.Sucess("unlistenPool","取消监听成功",null));
            listenPoolList();
        }else{
            ackRequest.sendAckData(ResponseUtil.Error("unlistenPool","取消监听失败，找不到该池",104,null));
        }}catch (Exception ex){}
    }
    //when client disconnect run this method
    public void unlistenPool(UUID socketIOClientID){
        try {
            for (Pool pool : PoolsMap.values()
                    ) {
                Set<UUID> list = pool.getClients();
                for (UUID id : list
                        ) {
                    if (id == socketIOClientID) {
                        pool.getClients().remove(id);
                    }
                }

            }
        }catch (Exception ex){}
    }

    //创建池
    public void createPool(String poolName,String poolMode,String messageSortColumn,boolean forceOverwrite,String description,String creator,UUID socketioid,AckRequest ackRequest)
    {
        Pool pool = new Pool(poolName,poolMode,description,messageSortColumn);
        pool.setCreateTime(LocalDateTime.now().toString());
        pool.setUpdateTime(LocalDateTime.now().toString());
        pool.setCreator(creator);
        pool.setMessages(new HashMap<String,Message>() {
        });
        pool.setClients(new HashSet<UUID>());
        if(PoolsMap.containsKey(poolName)){
            if(forceOverwrite==true){
                update(poolName,pool);
                ackRequest.sendAckData(ResponseUtil.Sucess("createPool","创建并覆盖池成功",pool));
            }else{//已包含 并且overWrite ==false
                ackRequest.sendAckData(ResponseUtil.Error("createPool","创建池失败,不允许重写的池",103,null));

            }
        }else{
            update(poolName,pool);
            ackRequest.sendAckData(ResponseUtil.Sucess("createPool","创建池成功",pool));
        }

    }
//    //拉取池
//    public void pullPool(String poolName,UUID uuid){
//        if(PoolsMap.containsKey(poolName)){
//            messagehubUtil.eventP2pReturn("serverResponse",uuid, ResponseUtil.Sucess("pullPool","成功",PoolsMap.get(poolName).getMessages().values()));
//        }else{
//            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("pullPool","失败，找不到池",404,poolName));
//        }
//    }
//    //推送池
//    public void pushPool(Pool pool,UUID uuid){
//        if(PoolsMap.containsKey(pool.getPoolName())){
//            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("pushPool","失败：已包含该池无法创建",400,pool));
//        }else{
//            pool.setUpdateTime(LocalDateTime.now().toString());
//            PoolsMap.put(pool.getPoolName(),pool);
//            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("pushPool","成功",pool));
//        }
//    }
//    //克隆池
//    public void clonePool(String SourcePoolName,String DestPoolName,String Creator,UUID uuid){
//        if(PoolsMap.containsKey(SourcePoolName)) {
//            if(!PoolsMap.containsKey(DestPoolName)){
//                Pool poolSource = PoolsMap.get(SourcePoolName);
//                poolSource.setUpdateTime(LocalDateTime.now().toString());
//                Pool poolDest = new Pool();
//                poolDest.setPoolName(DestPoolName);
//                poolDest.setMessages(poolSource.getMessages());
//                poolDest.setCreateTime(poolSource.getCreateTime());
//                poolDest.setUpdateTime(poolSource.getUpdateTime());
//                poolDest.setCreator(poolSource.getCreator());
//                poolDest.setPoolMode(poolSource.getPoolMode());
//                poolDest.setQueuesSortColumn(poolSource.getQueuesSortColumn());
//                PoolsMap.put(DestPoolName,poolDest);
//                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("clonePool","成功",poolDest));
//            }else{
//                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("clonePool","失败，目标池已包含",400,DestPoolName));
//            }
//        }else {
//            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("clonePool","失败,找不到源池",404,SourcePoolName));
//        }
//    }
    //清空池
    public void flushPool(String PoolName,UUID uuid,AckRequest ackRequest)
    {
        if(!isReadOnly(PoolName,uuid,ackRequest)){return;}
        if(PoolsMap.containsKey(PoolName)){
            PoolsMap.get(PoolName).setMessages(new HashMap<String,Message>());
            PoolsMap.get(PoolName).setUpdateTime(LocalDateTime.now().toString());
           ackRequest.sendAckData(ResponseUtil.Sucess("flushPool","清空池成功",PoolsMap.get(PoolName)));
        }else {
        messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("flushPool","清空池失败,找不到池",104,PoolName));
        }
        redisUtil.insert("keypoolsMap",gson.toJson(PoolsMap.values()));
    }
    //销毁池
    public void destroyPool(String PoolName, UUID uuid, AckRequest ackRequest){
        PoolName = PoolName.replace("\"", "");
        if(!isReadOnly(PoolName,uuid,ackRequest)){return;}
        if(PoolsMap.containsKey(PoolName)){
            remove(PoolName);
            ackRequest.sendAckData(ResponseUtil.Sucess("destroyPool","销毁成功",PoolName));
        }else {
        ackRequest.sendAckData(ResponseUtil.Error("destroyPool","销毁池失败,找不到池",104,PoolName));
    }
        redisUtil.insert("keypoolsMap",gson.toJson(PoolsMap.values()));
    }


//    public void registerPrivatePool(String poolName,UUID uuid){
//        if(PoolsMap.containsKey(poolName)) {
//            if (PoolsMap.get(poolName).getPoolMode().equals("private")) {
//                Connection connection = connectionCache.GetConnctionById(uuid);
//                Collection<String> privatePools = connection.getPrivatePools();
//                privatePools.add(poolName);
//                connection.setPrivatePools(privatePools);
//                connectionCache.connectionMap.put(connection.getConnectionName(),connection);
//            }
//        }
//    }
//
//    public void abolishPrivatePool(String poolName,UUID uuid){
//        if(PoolsMap.containsKey(poolName)){
//           if(PoolsMap.get(poolName).getPoolMode().equals("private")){
//               Collection<String> privatePools = connectionCache.GetConnctionById(uuid).getPrivatePools();
//               privatePools.remove(poolName);
//               connectionCache.GetConnctionById(uuid).setPrivatePools(privatePools);
//           }
//        }
//    }


    ///池权限
    public boolean isReadOnly(String poolName,UUID uuid,AckRequest ackRequest) {

        try {
            if(!isConnected(uuid,ackRequest)){return false;}

            if (PoolsUtil.PoolsMap.get(poolName).getPoolMode().equals("privateMode")) {
                if (PoolsUtil.PoolsMap.get(poolName).getCreator().equals(ConnectionCache.connectionMap.get(uuid.toString()).getClientName()) == false) {
                    ackRequest.sendAckData(ResponseUtil.Error("isReadOnly", "无权限写入的私有池", 500, poolName));
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } catch (Exception ex) {
            ackRequest.sendAckData(ResponseUtil.Error("服务器出错",ex));
            return false;
        }
    }

    public boolean isConnected(UUID uuid,AckRequest ackRequest){
        try {
            if(ConnectionCache.connectionMap.containsKey(uuid.toString())==false) {
                ackRequest.sendAckData(ResponseUtil.Error("登陆验证","未经过授权的操作",110,"没登录，滚"));
                return false;
            }else {
                return true;
            }

        }catch(Exception ex){
            ackRequest.sendAckData(ResponseUtil.Error("登陆验证","未经过授权的操作",110,"没登录，滚"));
            return false;
        }


    }




    public FrontPool poolToFrontPool(Pool pool){

        Map<String,Message> messages = sortMapByValue(pool.getMessages());
        Map<String,Message> messages2 = pool.getMessages();
        return new FrontPool(pool.getPoolName(),pool.getPoolMode(),pool.getDescription(),messages.values(),pool.getMessageSortColumn(),pool.getCreator(),pool.getCreateTime(),pool.getUpdateTime(),(HashSet<UUID>)pool.getClients());
    }



    //排序
    public static Map<String, Message> sortMapByValue(Map<String,Message> oriMap) {
        if (oriMap == null || oriMap.isEmpty()) {
            return null;
        }
        Map<String, Message> sortedMap = new LinkedHashMap<String, Message>();
        List<Map.Entry<String, Message>> entryList = new ArrayList<Map.Entry<String, Message>>(
                oriMap.entrySet());
        Collections.sort(entryList, new MapValueComparator());

        Iterator<Map.Entry<String,Message>> iter = entryList.iterator();
        Map.Entry<String, Message> tmpEntry = null;
        while (iter.hasNext()) {
            tmpEntry = iter.next();
            sortedMap.put(tmpEntry.getKey(), tmpEntry.getValue());
        }
        return sortedMap;
    }

}




