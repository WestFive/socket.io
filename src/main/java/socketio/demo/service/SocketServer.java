package socketio.demo.service;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import socketio.demo.model.Connection.Connection;
import socketio.demo.model.Message.*;
import socketio.demo.model.Pool.Pool;
import socketio.demo.util.ConnectionCache;
import socketio.demo.util.MessagehubUtil;
import socketio.demo.util.PoolsUtil;

@Component
public class SocketServer  implements CommandLineRunner{

    private final  static Logger logger = LoggerFactory.getLogger(SocketServer.class);

    public SocketIOServer Server ;

    @Autowired
    PoolsUtil poolsUtil;
    @Autowired
    MessagehubUtil messagehubUtil;


    @Override
    public void run(String... strings) throws Exception {

        startServer();
    }

    public  void startServer(){
        Configuration config = new Configuration();
        config.setHostname("10.1.1.117");
        config.setPort(5000);
        config.setTransports(Transport.WEBSOCKET);
        final SocketIOServer server = new SocketIOServer(config);
        Server =server;
        server.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient socketIOClient) {
                if(ConnectionCache.connectionMap.size()>0){
                    messagehubUtil.eventBoardCast("sessionList",ConnectionCache.GetSessionList());
                }
                poolsUtil.listenPools();
            }
        });

        server.addDisconnectListener(new DisconnectListener() {
            @Override
            public void onDisconnect(SocketIOClient socketIOClient) {
                messagehubUtil.boardCast(new Message("server",ConnectionCache.RemoveFromConnections(socketIOClient.getSessionId().toString()).getMessage()));
                messagehubUtil.eventBoardCast("sessionList",ConnectionCache.GetSessionList());
            }
        });

        server.addEventListener("boardCast", Message.class, new DataListener<Message>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Message message, AckRequest ackRequest) throws Exception {
               messagehubUtil.boardCast(message);
            }
        });

        server.addEventListener("authentication", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                Response res = ConnectionCache.AddToConnections(new Connection(socketIOClient.getSessionId().toString(),s,socketIOClient.getRemoteAddress().toString(),"null"));
                messagehubUtil.eventP2pReturn("serverResponse",socketIOClient.getSessionId(),res);
                messagehubUtil.eventBoardCast("sessionList",ConnectionCache.GetSessionList());

            }
        });

        server.addEventListener("p2p", Request.class, new DataListener<Request>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Request request, AckRequest ackRequest) throws Exception {
                messagehubUtil.p2p(request.getReceiver(),request.getMessage());
            }
        });


        //PoolMethod
        server.addEventListener("createPool", Pool_Create.class, new DataListener<Pool_Create>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Pool_Create pool_create, AckRequest ackRequest) throws Exception {
                poolsUtil.createPool(pool_create.getPoolName(),pool_create.getPoolMode(),pool_create.getQueueSortColumn(),pool_create.isForceOverWrite(),ConnectionCache.GetConnctionById(socketIOClient.getSessionId()).getConnectionName());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("pullPool", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                poolsUtil.pullPool(s,socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("pushPool", Pool.class, new DataListener<Pool>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Pool pool, AckRequest ackRequest) throws Exception {
                poolsUtil.pushPool(pool,socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("clonePool", Pool_Clone.class, new DataListener<Pool_Clone>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Pool_Clone pool_clone, AckRequest ackRequest) throws Exception {
                poolsUtil.clonePool(pool_clone.getSourcePoolName(),pool_clone.getDestPoolName(),pool_clone.getCreator(),socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("flushPool", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                poolsUtil.flushPool(s,socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("destoryPool", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                poolsUtil.destoryPool(s,socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });



        server.start();
    }


}
