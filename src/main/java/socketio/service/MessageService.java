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
import socketio.model.Message.MessageUpdate;
import socketio.util.*;

@Service
public class MessageService {

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

    private Logger logger = LoggerFactory.getLogger(MessageHubService.class);

    private Gson gson = new Gson();

    void start(){

        //queueMethod
        MessageHubService.Server.addEventListener("createMessage",Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object queue_add_json, AckRequest ackRequest) throws Exception {
               // logger.warn("addQueue|handler|"+connectionCache.GetConnectionById(socketIOClient.getSessionId().toString()).getClientName()+"|"+queue_add_json);
                MessageCreate messageCreate;
                if(queue_add_json.getClass()==String.class) {
                    messageCreate = gson.fromJson(queue_add_json.toString(), MessageCreate.class);
                }else {
                    messageCreate = gson.fromJson(gson.toJson(queue_add_json), MessageCreate.class);
                }

                messageUtil.addQueue(messageCreate.getPoolName(), messageCreate.getMessage(),socketIOClient.getSessionId(),ackRequest);
                poolsUtil.listenPoolList();
                poolsUtil.receivePoolInfo(messageCreate.getPoolName());
            }
        });
        MessageHubService.Server.addEventListener("deleteMessage",Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object queue_cur_json, AckRequest ackRequest) throws Exception {
                //logger.warn("deleteQueue|handler|"+connectionCache.GetConnectionById(socketIOClient.getSessionId().toString()).getClientName()+"|"+queue_cur_json);
                MessageUpdate messageUpdate;
                if(queue_cur_json.getClass()==String.class){
                    messageUpdate = gson.fromJson(queue_cur_json.toString(),MessageUpdate.class);
                }else {
                    messageUpdate = gson.fromJson(gson.toJson(queue_cur_json),MessageUpdate.class);
                }
                messageUtil.removeQueue(messageUpdate.getPoolName(), messageUpdate.getMessageKey(),socketIOClient.getSessionId(),ackRequest);
                poolsUtil.listenPoolList();
                poolsUtil.receivePoolInfo(messageUpdate.getPoolName());

            }
        });
        MessageHubService.Server.addEventListener("updateMessage", Object.class, new DataListener<Object>() {
            @Override
            public void onData(SocketIOClient socketIOClient, Object queue_add_json, AckRequest ackRequest) throws Exception {
               // logger.warn("updateQueue|handler|"+connectionCache.GetConnectionById(socketIOClient.getSessionId().toString()).getClientName()+"|"+queue_add_json);
                MessageCreate messageCreate;
                if(queue_add_json.getClass()==String.class) {
                    messageCreate = gson.fromJson(queue_add_json.toString(), MessageCreate.class);
                }else {
                    messageCreate = gson.fromJson(gson.toJson(queue_add_json), MessageCreate.class);
                }
                messageUtil.updateQueue(messageCreate.getPoolName(), messageCreate.getMessage(),socketIOClient.getSessionId(),ackRequest);
                poolsUtil.listenPoolList();
                poolsUtil.receivePoolInfo(messageCreate.getPoolName());
            }
        });
    }
}
