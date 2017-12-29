package socketio.demo.util;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.demo.model.Pool.Pool;
import socketio.demo.model.Queue.Queue;

import java.util.*;


/*
*
* 用于操作队列的工具类
* */
@Component
public class QueueUtil {

    private RedisUtil redisUtil;

    @Autowired
    private MessagehubUtil messagehubUtil;

    @Autowired
    private PoolsUtil poolsUtil;

    @Autowired
    private ConnectionCache connectionCache;

    private List<String>  queueKeyList = new ArrayList<>();
    private Gson gson = new Gson();


    public QueueUtil(RedisUtil redisUtil){
        this.redisUtil = redisUtil;
        if(redisUtil.hasKey("queueKeyList")){
            queueKeyList = gson.fromJson(redisUtil.select("queueKeyList"),queueKeyList.getClass());
        }
    }


    public void listenQueues(String poolName,UUID uuid){
        if(poolsUtil.PoolsMap.containsKey(poolName)){

            messagehubUtil.eventP2pReturn("listenQueues",uuid,poolsUtil.PoolsMap.get(poolName));
        }else{
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("listenQueues","找不到池",404,poolName));
        }
    }

    public void addQueue(String poolName, socketio.demo.model.Queue.Queue queue, UUID uuid){
        if(!isReadOnly(poolName,uuid)){return;}
        if(PoolsUtil.PoolsMap.containsKey(poolName)) {
            queueKeyList.add(poolName + "|" + queue.getKey());
            redisUtil.insert(poolName + "|" + queue.getKey(), gson.toJson(queue));
            if(PoolsUtil.PoolsMap.get(poolName).getQueues()==null){
                PoolsUtil.PoolsMap.get(poolName).setQueues(new HashMap<String,Queue>());
            }
            Pool pool = PoolsUtil.PoolsMap.get(poolName);
            pool.getQueues().put(queue.getKey(),queue);
            PoolsUtil.PoolsMap.put(poolName,pool);
            poolsUtil.update();
            messagehubUtil.eventP2pReturn("serverResponse", uuid, ResponseUtil.Sucess("addQueueToPool", "成功", queue));
        }else{
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("addQueueToPool","失败,找不到池",404,poolName));
        }
    }

    public void removeQueue(String poolName, String queuekey,UUID uuid){
        if(!isReadOnly(poolName,uuid)){return;}
        if(PoolsUtil.PoolsMap.containsKey(poolName)){
            Pool pool=  PoolsUtil.PoolsMap.get(poolName);
            Map<String,Queue> list = pool.getQueues();
            if(list.containsKey(queuekey)){
                list.remove(queuekey);
                pool.setQueues(list);
                PoolsUtil.PoolsMap.put(poolName,pool);
                redisUtil.delete(poolName+"|"+queuekey);
                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("removeQueue","成功",poolName+queuekey));
            }else {
                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("removeQueue","失败，找不到Queue",404,queuekey));
            }
        }else{
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("removeQueue","失败，找不到池",404,poolName));
        }
    }

    public void updateQueue(String poolName,Queue queue,UUID uuid){
        if(!isReadOnly(poolName,uuid)){return;}
        if(PoolsUtil.PoolsMap.containsKey(poolName)){
            Map<String,Queue> queues = PoolsUtil.PoolsMap.get(poolName).getQueues();
            if(queues.containsKey(queue.getKey())){
                queues.put(queue.getKey(),queue);
                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("updateQueue","成功",queue));
            }else{
                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("updateQueue","失败,找不到Queue",404,queue));
            }
        }else{
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("updateQueue","失败,找不到池",404,queue));
        }
    }


    ///池权限
    private boolean isReadOnly(String poolName,UUID uuid) {
        try {
            if (PoolsUtil.PoolsMap.get(poolName).getPoolMode().equals("private")) {
                if (PoolsUtil.PoolsMap.get(poolName).getCreator().equals(connectionCache.GetConnctionById(uuid).getConnectionName()) == false) {
                    messagehubUtil.eventP2pReturn("serverResponse", uuid, ResponseUtil.Error("isReadOnly", "无权限写入的私有池", 500, poolName));
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } catch (Exception ex) {
            return false;
        }
    }


}
