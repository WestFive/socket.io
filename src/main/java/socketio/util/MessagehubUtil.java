package socketio.util;

import com.corundumstudio.socketio.AckCallback;
import com.google.gson.Gson;
import io.socket.client.Ack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.service.MessageHubService;

import java.util.UUID;

@Component
public class MessagehubUtil {

    @Autowired
    MessageHubService messageHubService;
    @Autowired
    ConnectionCache connectionCache;

    private Gson gson = new Gson();

    //广播事件
    public void eventBoardCast(String eventName,Object message){
        messageHubService.Server.getBroadcastOperations().sendEvent(eventName,gson.toJson(message));

    }

    //点对点反馈
    public void eventP2pReturn(String eventName,UUID receiverId,Object message){
        //System.out.println(eventName+"|"+receiverId+"|"+message);
        messageHubService.Server.getClient(receiverId).sendEvent(eventName,gson.toJson(message));
    }



}
