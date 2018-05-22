package socketio.service;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.listener.DataListener;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import socketio.model.Message.MessageCreate;
import socketio.model.Message.P2pMessage;
import socketio.util.MessageUtil;
import socketio.util.MessagehubUtil;
import socketio.util.RedisUtil;

@Service
public class P2pService {


    private Logger logger = LoggerFactory.getLogger(getClass());


    @Autowired
    MessageHubService messageHubService;

    @Autowired
    MessagehubUtil messagehubUtil;

    @Autowired
    RedisUtil redisUtil;
    private Gson gson = new Gson();
    void start(){

        messageHubService.Server.addEventListener("p2p", Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object s, AckRequest ackRequest) throws Exception {
                P2pMessage p2pMessage;
                if(s.getClass()==String.class)
                {
                    p2pMessage = gson.fromJson(s.toString(), P2pMessage.class);
                }else {
                p2pMessage = gson.fromJson(gson.toJson(s), P2pMessage.class);
                 }

                 logger.info(gson.toJson(s));
                 logger.info(p2pMessage.getReciver());
                 messagehubUtil.eventBoardCast(p2pMessage.getReciver(),p2pMessage.getMsg());
                 redisUtil.Publish(p2pMessage.getReciver(),p2pMessage.getMsg());

            }
        });
    }
}
