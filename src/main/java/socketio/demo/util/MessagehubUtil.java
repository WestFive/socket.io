package socketio.demo.util;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.demo.service.SocketServer;

import java.util.UUID;

@Component
public class MessagehubUtil {

    @Autowired
    SocketServer socketServer;


    //广播
    public void boardCast(Object message){
        socketServer.Server.getBroadcastOperations().sendEvent("boardCast",message);
    }
    //点对点
    public void p2p(String reciver,Object message){
        socketServer.Server.getClient(UUID.fromString(ConnectionCache.GetConnctionByName(reciver).getConnectionId())).sendEvent("p2p",message);
    }
    //广播事件
    public void eventBoardCast(String eventName,Object message){
        socketServer.Server.getBroadcastOperations().sendEvent(eventName,message);

    }
    public void eventBoardCast(String eventName,String message){
        socketServer.Server.getBroadcastOperations().sendEvent(eventName,message);
    }
    //点对点事件
    public void eventP2p(String eventName,String reciver,Object message) {
        socketServer.Server.getClient(UUID.fromString(ConnectionCache.GetConnctionByName(reciver).getConnectionId())).sendEvent(eventName,message);
    }
    //点对点反馈
    public void eventP2pReturn(String eventName,UUID reciverId,Object message){
        socketServer.Server.getClient(reciverId).sendEvent(eventName,message);
    }


}
