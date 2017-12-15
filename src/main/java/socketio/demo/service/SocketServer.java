package socketio.demo.service;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import socketio.demo.model.Connection;
import socketio.demo.model.Message;
import socketio.demo.model.Request;
import socketio.demo.model.Response;
import socketio.demo.util.ConnectionCache;

@Component
public class SocketServer  implements CommandLineRunner{

    private final  static Logger logger = LoggerFactory.getLogger(SocketServer.class);

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
        server.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient socketIOClient) {
                if(ConnectionCache.connectionMap.size()>0){
                server.getBroadcastOperations().sendEvent("sessionList", ConnectionCache.GetSessionList());
                }
            }
        });

        server.addDisconnectListener(new DisconnectListener() {
            @Override
            public void onDisconnect(SocketIOClient socketIOClient) {
                server.getBroadcastOperations().sendEvent("boardCast",new Message("server",ConnectionCache.RemoveFromConnections(socketIOClient.getSessionId().toString()).getMessage()));
                server.getBroadcastOperations().sendEvent("sessionList", ConnectionCache.GetSessionList());
            }
        });

        server.addEventListener("boardCast", Message.class, new DataListener<Message>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Message message, AckRequest ackRequest) throws Exception {
                server.getBroadcastOperations().sendEvent("boardCast",message);
            }
        });

        server.addEventListener("authentication", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String s, AckRequest ackRequest) throws Exception {
                Response res = ConnectionCache.AddToConnections(new Connection(socketIOClient.getSessionId().toString(),s,socketIOClient.getRemoteAddress().toString(),"null"));
                server.getClient(socketIOClient.getSessionId()).sendEvent("serverResponse",res);
                server.getBroadcastOperations().sendEvent("sessionList", ConnectionCache.GetSessionList());

            }
        });

        server.addEventListener("p2p", Request.class, new DataListener<Request>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Request request, AckRequest ackRequest) throws Exception {
                logger.info(request.getSender()+request.getReceiver()+request.getMessage());
                server.getBroadcastOperations().sendEvent(request.getReceiver(),request);
            }
        });

        server.start();
    }


}
