package socketio.demo.service;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import socketio.demo.model.Connection.Connection;
import socketio.demo.model.Message.*;
import socketio.demo.model.Pool.Pool;
import socketio.demo.model.Queue.Queue;
import socketio.demo.util.ConnectionCache;
import socketio.demo.util.MessagehubUtil;
import socketio.demo.util.PoolsUtil;
import socketio.demo.util.QueueUtil;

import javax.validation.constraints.Null;
import java.util.ArrayList;

@Component
public class SocketServer  implements CommandLineRunner{

    private final  static Logger logger = LoggerFactory.getLogger(SocketServer.class);

    public SocketIOServer Server ;

    private Gson gson = new Gson();

    @Autowired
    PoolsUtil poolsUtil;

    @Autowired
    MessagehubUtil messagehubUtil;

    @Autowired
    ConnectionCache connectionCache;

    @Autowired
    QueueUtil queueUtil;

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
                    messagehubUtil.eventBoardCast("sessionList",connectionCache.GetSessionList());
                }
                poolsUtil.listenPools();
            }
        });

        server.addDisconnectListener(new DisconnectListener() {
            @Override
            public void onDisconnect(SocketIOClient socketIOClient) {
                messagehubUtil.boardCast(new Message("server",connectionCache.RemoveFromConnections(socketIOClient.getSessionId().toString()).getMessage()));
                messagehubUtil.eventBoardCast("sessionList",connectionCache.GetSessionList());
            }
        });

        server.addEventListener("getSessionList", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                messagehubUtil.eventP2pReturn("sessionList",socketIOClient.getSessionId(),connectionCache.GetSessionList());
            }
        });

//        server.addEventListener("boardCast", Message.class, new DataListener<Message>() {
//            @Override
//            public void onData(SocketIOClient socketIOClient, Message message, AckRequest ackRequest) throws Exception {
//               messagehubUtil.boardCast(message);
//            }
//        });

        server.addEventListener("authentication", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                Response res = connectionCache.AddToConnections(new Connection(socketIOClient.getSessionId().toString(),s,socketIOClient.getRemoteAddress().toString(),new ArrayList<String>()));
                messagehubUtil.eventP2pReturn("serverResponse",socketIOClient.getSessionId(),res);
                messagehubUtil.eventBoardCast("sessionList",connectionCache.GetSessionList());
            }
        });

//        server.addEventListener("p2p", Request.class, new DataListener<Request>() {
//            @Override
//            public void onData(SocketIOClient socketIOClient, Request request, AckRequest ackRequest) throws Exception {
//                messagehubUtil.p2p(request.getReceiver(),request.getMessage());
//            }
//        });


        //PoolMethod
        server.addEventListener("createPool", Pool_Create.class, new DataListener<Pool_Create>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Pool_Create pool_create, AckRequest ackRequest) throws Exception {
                poolsUtil.createPool(pool_create.getPoolName(),pool_create.getPoolMode(),pool_create.getQueueSortColumn(),pool_create.isForceOverWrite(),connectionCache.GetConnctionById(socketIOClient.getSessionId()).getConnectionName());
                poolsUtil.listenPools();
                poolsUtil.registerPrivatePool(pool_create.getPoolName(),socketIOClient.getSessionId());
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
                poolsUtil.abolishPrivatePool(s,socketIOClient.getSessionId());
            }
        });
        server.addEventListener("clearPools", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                poolsUtil.PoolsMap.clear();
                poolsUtil.listenPools();
            }
        });
        //queueMethod
        server.addEventListener("addQueue", Queue_Add.class, new DataListener<Queue_Add>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Queue_Add queue_add, AckRequest ackRequest) throws Exception {
                queueUtil.addQueue(queue_add.getPoolName(),queue_add.getQueue(),socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("deleteQueue", Queue_CUR.class, new DataListener<Queue_CUR>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Queue_CUR queue_cur, AckRequest ackRequest) throws Exception {
                queueUtil.removeQueue(queue_cur.getPoolName(),queue_cur.getQueueKey(),socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });
        server.addEventListener("updateQueue", Queue_Add.class, new DataListener<Queue_Add>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Queue_Add queue_add, AckRequest ackRequest) throws Exception {
                queueUtil.updateQueue(queue_add.getPoolName(),queue_add.getQueue(),socketIOClient.getSessionId());
                poolsUtil.listenPools();
            }
        });


        server.start();
    }


}
