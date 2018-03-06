package socketio.service;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.listener.DataListener;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import socketio.model.Pool.PoolCreate;
import socketio.util.*;

@Service
public class PoolModuleService {

    @Autowired
    PoolsUtil poolsUtil;

    @Autowired
    MessagehubUtil messagehubUtil;

    @Autowired
    ConnectionCache connectionCache;

    @Autowired
    MessageUtil messageUtil;

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    MessageHubService messageHubService;

    private Gson gson = new Gson();

    private final  static Logger logger = LoggerFactory.getLogger(PoolModuleService.class);

    void  start(){



        MessageHubService.Server.addEventListener("listenPool", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String poolName, AckRequest ackRequest) throws Exception {
             poolsUtil.listenPool(poolName,socketIOClient,ackRequest);
            }
        });
        MessageHubService.Server.addEventListener("unlistenPool", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                poolsUtil.unlistenPool(s,socketIOClient,ackRequest);
            }
        });
//


        //PoolMethod
        MessageHubService.Server.addEventListener("createPool", Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object value, AckRequest ackRequest) throws Exception {
                //logger.info(connectionCache.getConnectionMap().toString());
               // logger.warn("createPool|handler|"+connectionCache.getConnectionMap().get(socketIOClient.getSessionId().toString())+"|"+value.toString());
                PoolCreate pool_create;
                if(value.getClass()==String.class){
                    pool_create = gson.fromJson(value.toString(),PoolCreate.class);
                }else {
                    pool_create = gson.fromJson(gson.toJson(value), PoolCreate.class);
                }

                logger.info(pool_create.toString());
                if(!poolsUtil.isConnected(socketIOClient.getSessionId(),ackRequest)){return;}
                poolsUtil.createPool(pool_create.getPoolName(),pool_create.getPoolMode(),pool_create.getMessagesSortColumn(),pool_create.isForceOverWrite(),pool_create.getDescription(),connectionCache.getConnectionMap().get(socketIOClient.getSessionId().toString()).getClientName(),socketIOClient.getSessionId(),ackRequest);

                poolsUtil.listenPoolList();
                //poolsUtil.registerPrivatePool(pool_create.getPoolName(),socketIOClient.getSessionId());
                messagehubUtil.eventBoardCast("getConnections",connectionCache.getConnections());
            }
        });


        MessageHubService.Server.addEventListener("flushPool", Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object s, AckRequest ackRequest) throws Exception {
                logger.warn("flushPool|handler|"+connectionCache.getConnectionMap().get(socketIOClient.getSessionId().toString()).getClientName()+"|"+s);
                poolsUtil.flushPool(s.toString(),socketIOClient.getSessionId(),ackRequest);
                poolsUtil.listenPoolList();
                poolsUtil.receivePoolInfo(s.toString());
            }
        });
        MessageHubService.Server.addEventListener("destroyPool", Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object s, AckRequest ackRequest) throws Exception {
                logger.warn("destroyPool|handler|"+connectionCache.getConnectionMap()+"|"+socketIOClient.getSessionId().toString()+"|"+s);
                poolsUtil.destroyPool(s.toString(),socketIOClient.getSessionId(),ackRequest);
                messagehubUtil.eventBoardCast("getConnections",connectionCache.getConnections());
                poolsUtil.listenPoolList();
                poolsUtil.receivePoolInfo(s.toString());
            }
        });
        MessageHubService.Server.addEventListener("clearPools", Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object s, AckRequest ackRequest) throws Exception {
                logger.warn("clearPools|handler|"+connectionCache.getConnectionMap().get(socketIOClient.getSessionId().toString()).getClientName()+"|"+s);
                poolsUtil.PoolsMap.clear();
                poolsUtil.listenPoolList();
                poolsUtil.receivePoolInfo(s.toString());
            }
        });





















        //        MessageHubService.Server.addEventListener("pullPool", Object.class, new DataListener<Object>() {
//            @Override
//            public void onData(SocketIOClient socketIOClient, Object s, AckRequest ackRequest) throws Exception {
//                logger.warn("pullPool|handler|"+connectionCache.GetConnctionById(socketIOClient.getSessionId()).getConnectionName()+"|"+s);
//                poolsUtil.pullPool(s.toString(),socketIOClient.getSessionId());
//                poolsUtil.listenPools();
//            }
//        });
//        MessageHubService.Server.addEventListener("pushPool", Object.class, new DataListener<Object>() {
//            @Override
//            public void onData(SocketIOClient socketIOClient, Object poolvalue, AckRequest ackRequest) throws Exception {
//                logger.warn("pushPool|handler|"+connectionCache.GetConnctionById(socketIOClient.getSessionId()).getConnectionName(),poolvalue);
//                Pool pool= gson.fromJson(gson.toJson(poolvalue),Pool.class);
//                poolsUtil.pushPool(pool,socketIOClient.getSessionId());
//                poolsUtil.listenPools();
//                poolsUtil.listenPool(socketIOClient);
//
//            }
////        });
//        MessageHubService.Server.addEventListener("clonePool", Object.class, new DataListener<Object>() {
//            @Override
//            public void onData(SocketIOClient socketIOClient, Object pool_clonevalue, AckRequest ackRequest) throws Exception {
//                logger.warn("clonePool|handler|"+connectionCache.GetConnctionById(socketIOClient.getSessionId()).getConnectionName()+"|"+pool_clonevalue);
//                PoolClone pool_clone = gson.fromJson(gson.toJson(pool_clonevalue),PoolClone.class);
//                poolsUtil.clonePool(pool_clone.getSourcePoolName(),pool_clone.getDestPoolName(),pool_clone.getCreator(),socketIOClient.getSessionId());
//                poolsUtil.listenPools();
//                poolsUtil.listenPool(socketIOClient);
//            }
//        });
    }
}
