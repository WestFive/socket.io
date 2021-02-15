package socketio.service;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.listener.DataListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import socketio.util.*;

@Service
public class ConnectionModuleService {
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

    private Logger logger = LoggerFactory.getLogger(ConnectionModuleService.class);


    void start(){
        MessageHubService.Server.addEventListener("getConnections", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                logger.warn("getConnections|handler|"+connectionCache.GetConnectionById(socketIOClient.getSessionId().toString()).getClientName()+"|"+s);
                messagehubUtil.eventP2pReturn("getConnections",socketIOClient.getSessionId(),connectionCache.getConnections());
            }
        });
    }

}
