package socketio.service;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import socketio.model.Connection.Connection;
import socketio.model.Connection.ConnectionCreate;
import socketio.model.bean.Response;
import socketio.util.*;
import java.util.ArrayList;


@Service
public class ConnectModuleService {

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

    private Logger logger = LoggerFactory.getLogger(ConnectModuleService.class);

    private Gson gson = new Gson();


    void start(){
        MessageHubService.Server.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient socketIOClient) {
                logger.warn("Connect|handler|" + socketIOClient.getSessionId());
                if (ConnectionCache.connectionMap.size() > 0) {
                    messagehubUtil.eventBoardCast("getConnections", connectionCache.getConnections());

                }
                poolsUtil.listenPoolList();
            }
        });


        MessageHubService.Server.addDisconnectListener(new DisconnectListener() {
            @Override
            public void onDisconnect(SocketIOClient socketIOClient) {
                     try {
                         connectionCache.getConnectionMap().remove(socketIOClient.getSessionId());
                         logger.warn("disConnect|handler|" + socketIOClient.getSessionId());
                         poolsUtil.unlistenPool(socketIOClient.getSessionId());
                         connectionCache.RemoveFromConnections(socketIOClient.getSessionId().toString());
                         logger.warn("disPoollisten|handel|" + socketIOClient.getSessionId());
                         messagehubUtil.eventBoardCast("getConnections", connectionCache.getConnections());
                     }catch(Exception ex){}
            }
        });

        MessageHubService.Server.addEventListener("authentication",Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object value, AckRequest ackRequest) throws Exception {
                ConnectionCreate  connectionCreate;
                if(value.getClass()==String.class) {
                 connectionCreate = gson.fromJson((String)value, ConnectionCreate.class);
                }else {
                    connectionCreate = gson.fromJson(gson.toJson(value), ConnectionCreate.class);
                }
                Response res = connectionCache.AddToConnections(new Connection(socketIOClient.getSessionId().toString(), connectionCreate.getClientName().toString(),connectionCreate.getClientCode(), socketIOClient.getRemoteAddress().toString(), new ArrayList<String>()));
                Connection connection = connectionCache.getConnectionMap().get(socketIOClient.getSessionId());
                if(connection!=null) {
                    logger.warn("authentication|handler|" + connection.getClientCode()+"|"+ connection.getClientName());
                }
                ackRequest.sendAckData(res);
                messagehubUtil.eventBoardCast("getConnections", connectionCache.getConnections());


            }
        });



    }

}
