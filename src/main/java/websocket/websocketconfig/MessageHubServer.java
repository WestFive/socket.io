package websocket.websocketconfig;

import org.springframework.web.socket.*;
import socketio.util.ConnectionCache;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class MessageHubServer implements WebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession webSocketSession) throws Exception {

        System.out.println("connect to the websocket success......");
        webSocketSession.sendMessage(new TextMessage("登陆成功"));
    }

    @Override
    public void handleMessage(WebSocketSession webSocketSession, WebSocketMessage<?> webSocketMessage) throws Exception {

    }

    @Override
    public void handleTransportError(WebSocketSession webSocketSession, Throwable throwable) throws Exception {

    }

    @Override
    public void afterConnectionClosed(WebSocketSession webSocketSession, CloseStatus closeStatus) throws Exception {

    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }



}
