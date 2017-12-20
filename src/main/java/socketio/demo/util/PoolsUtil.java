package socketio.demo.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.demo.model.Message.Response;
import socketio.demo.model.Pool.Pool;
import socketio.demo.model.Pool.PoolStatus;
import socketio.demo.model.Queue.Queue;

import java.security.Policy;
import java.time.LocalDateTime;
import java.util.*;

@Component
public class PoolsUtil {
    private  Map<String,Pool> PoolsMap = new HashMap<String,Pool>();

    private List<PoolStatus> PoolsStatus = new ArrayList<PoolStatus>();
    @Autowired
    private MessagehubUtil messagehubUtil;

    //监听池集合

    public void listenPools()
    {
        PoolsStatus.clear();
        for (Pool pool:PoolsMap.values()
             ) {
            PoolsStatus.add(new PoolStatus(pool.getPoolName(),pool.getPoolMode(),pool.getQueues().size(),pool.getQueuesSortColumn(),pool.getCreateTime(),pool.getupDateTime()));
        }
        messagehubUtil.eventBoardCast("listenPools",PoolsStatus);
    }
    //创建池
    public void createPool(String poolName,String poolMode,String queuesSortColumn,boolean forceOverwrite,String creator)
    {
        Pool pool = new Pool(poolName,poolMode,queuesSortColumn,creator);
        pool.setCreateTime(LocalDateTime.now().toString());
        pool.setupDateTime(LocalDateTime.now().toString());
        pool.setQueues(new ArrayList<Queue>());
        if(PoolsMap.containsKey(poolName)){
            if(forceOverwrite==true){
                PoolsMap.put(poolName,pool);
                messagehubUtil.eventP2p("serverResponse",creator,ResponseUtil.Sucess("createPool","重写成功",pool));
            }else{//已包含 并且overWrite ==false
                messagehubUtil.eventP2p("serverResponse",creator,ResponseUtil.Error("createPool","失败,已包含该池且不允许重写",500,pool));
            }
        }else{
            PoolsMap.put(poolName,pool);
            messagehubUtil.eventP2p("serverResponse",creator,ResponseUtil.Sucess("createPool","成功",pool));
        }
    }
    //拉取池
    public void pullPool(String poolName,UUID uuid){
        if(PoolsMap.containsKey(poolName)){
            messagehubUtil.eventP2pReturn("serverResponse",uuid, ResponseUtil.Sucess("pullPool","成功",PoolsMap.get(poolName)));
        }else{
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("pullPool","失败，找不到池",404,poolName));
        }
    }
    //推送池
    public void pushPool(Pool pool,UUID uuid){
        if(PoolsMap.containsKey(pool.getPoolName())){
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("pushPool","失败：已包含该池无法创建",400,pool));
        }else{
            PoolsMap.put(pool.getPoolName(),pool);
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("pushPool","成功",pool));
        }
    }
    //克隆池
    public void clonePool(String SourcePoolName,String DestPoolName,String Creator,UUID uuid){
        if(PoolsMap.containsKey(SourcePoolName)) {
            if(!PoolsMap.containsKey(DestPoolName)){
                Pool poolSource = PoolsMap.get(SourcePoolName);
                Pool poolDest = new Pool();
                poolDest.setPoolName(DestPoolName);
                poolDest.setQueues(poolSource.getQueues());
                poolDest.setCreateTime(poolSource.getCreateTime());
                poolDest.setupDateTime(poolSource.getupDateTime());
                poolDest.setCreator(poolSource.getCreator());
                poolDest.setPoolMode(poolSource.getPoolMode());
                poolDest.setQueuesSortColumn(poolSource.getQueuesSortColumn());
                PoolsMap.put(DestPoolName,poolDest);
                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("clonePool","成功",poolDest));
            }else{
                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("clonePool","失败，目标池已包含",400,DestPoolName));
            }
        }else {
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("clonePool","失败,找不到源池",404,SourcePoolName));
        }
    }
    //清空池
    public void flushPool(String PoolName,UUID uuid)
    {
        if(PoolsMap.containsKey(PoolName)){
             PoolsMap.get(PoolName).setQueues(new ArrayList<Queue>());
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("flushPool","成功",PoolsMap.get(PoolName)));
        }else {
        messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("flushPool","失败,找不到池",404,PoolName));
        }
    }
    //销毁池
    public void destoryPool(String PoolName,UUID uuid){
        if(PoolsMap.containsKey(PoolName)){
            PoolsMap.remove(PoolName);
            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("destoryPool","成功",null));
        }else {
        messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("destoryPool","失败,找不到池",404,PoolName));
    }

    }



}
