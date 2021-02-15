package socketio.util;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.model.Pool.Pool;
import socketio.model.Message.Message;

import java.time.LocalDateTime;
import java.util.*;


/*
*
* 用于操作队列的工具类
* */
@Component
public class MessageUtil {



    @Autowired
    private MessagehubUtil messagehubUtil;

    @Autowired
    private PoolsUtil poolsUtil;

    @Autowired
    private ConnectionCache connectionCache;

    private List<String>  queueKeyList = new ArrayList<>();
    private Gson gson = new Gson();

//    public void listenQueues(String poolName,UUID uuid){
//        if(poolsUtil.PoolsMap.containsKey(poolName)){
//
//            messagehubUtil.eventP2pReturn("listenQueues",uuid,poolsUtil.PoolsMap.get(poolName));
//        }else{
//            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("listenQueues","找不到池",404,poolName));
//        }
//    }

    public void addQueue(String poolName, Message message, UUID uuid, AckRequest ackRequest){
        try {
            if (!poolsUtil.isReadOnly(poolName, uuid, ackRequest)) {
                return;
            }
            if (PoolsUtil.PoolsMap.containsKey(poolName)) {
                queueKeyList.add(poolName + "|" + message.getKey());
                if (PoolsUtil.PoolsMap.get(poolName).getMessages() == null) {
                    PoolsUtil.PoolsMap.get(poolName).setMessages(new HashMap<String, Message>());
                }
                Pool pool = PoolsUtil.PoolsMap.get(poolName);
                if (pool.getMessages().containsKey(message.getKey())) {//
                    message.setCreateTime(pool.getMessages().get(message.getKey()).getCreateTime());
                    message.setUpdateTime(LocalDateTime.now().toString());
                } else {//add
                    message.setUpdateTime(LocalDateTime.now().toString());
                    message.setCreateTime(LocalDateTime.now().toString());
                }
                pool.getMessages().put(message.getKey(), message);
                //PoolsUtil.PoolsMap.put(poolName,pool);
                poolsUtil.update(poolName, pool);
                ackRequest.sendAckData(ResponseUtil.Sucess("createMessage", "增加消息成功", message));
            } else {
                ackRequest.sendAckData(ResponseUtil.Error("createMessage", "增加消息失败,找不到池", 104, poolName));
            }
        }
        catch (Exception ex)
        {
            ackRequest.sendAckData(ResponseUtil.Error("createMessage", "增加消息失败,未指定的错误，请尝试重试", 105, poolName));
        }
    }

    public void removeQueue(String poolName, String queuekey,UUID uuid,AckRequest ackRequest){
        if(!poolsUtil.isReadOnly(poolName,uuid,ackRequest)){return;}
        if(PoolsUtil.PoolsMap.containsKey(poolName)){
            Pool pool=  PoolsUtil.PoolsMap.get(poolName);
            Map<String,Message> list = pool.getMessages();
            if(list.containsKey(queuekey)){
                list.remove(queuekey);
                pool.setMessages(list);
                poolsUtil.update(poolName,pool);
                ackRequest.sendAckData(ResponseUtil.Sucess("deleteMessage","删除消息成功",poolName+queuekey));
            }else {
                ackRequest.sendAckData(ResponseUtil.Error("deleteMessage","删除消息失败，找不到该条消息",104,queuekey));
            }
        }else{
             ackRequest.sendAckData(ResponseUtil.Error("deleteMessage","删除消息失败，找不到池",105,poolName));
        }
    }

    public void updateQueue(String poolName, Message message, UUID uuid,AckRequest ackRequest){
//        if(!isReadOnly(poolName,uuid)){return;}
//        if(PoolsUtil.PoolsMap.containsKey(poolName)){
//            Map<String,Message> queues = PoolsUtil.PoolsMap.get(poolName).getMessages();
//            if(queues.containsKey(message.getKey())){
//                queues.put(message.getKey(),message);
//                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Sucess("updateQueue","成功",message));
//            }else{
//                messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("updateQueue","失败,找不到Queue",404,message));
//            }
//        }else{
//            messagehubUtil.eventP2pReturn("serverResponse",uuid,ResponseUtil.Error("updateQueue","失败,找不到池",404,message));
//        }
        addQueue(poolName, message,uuid,ackRequest);
    }


    ///池权限
    private boolean isReadOnly(String poolName,UUID uuid) {
        try {
            if (PoolsUtil.PoolsMap.get(poolName).getPoolMode().equals("private")) {
                if (PoolsUtil.PoolsMap.get(poolName).getCreator().equals(connectionCache.getConnectionMap().get(uuid).getClientName()) == false) {
                    messagehubUtil.eventP2pReturn("serverResponse", uuid, ResponseUtil.Error("isReadOnly", "无权限写入的私有池", 500, poolName));
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } catch (Exception ex) {
            return false;
        }
    }





}
