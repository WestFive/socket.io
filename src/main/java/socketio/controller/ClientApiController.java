package socketio.controller;

import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import socketio.client.SocketClient;
import socketio.model.Message.MessageCreate;
import socketio.model.Message.MessageUpdate;
import socketio.model.Message.P2pMessage;
import socketio.model.Pool.Pool;
import socketio.model.Pool.PoolClone;
import socketio.model.Pool.PoolCreate;
import socketio.model.bean.*;
import socketio.model.Message.Message;
import socketio.service.MessageService;
import socketio.service.P2pService;
import socketio.util.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@Api(description = "消息服务客户端")
public class ClientApiController {

    @Autowired
    PoolsUtil poolsUtil;

    private Gson gson = new Gson();


    @Autowired
    private RedisUtil redisUtil;
    //QueueMethod
    @ApiOperation("增加作业")
    @PostMapping(value = "/addMessage")
    private Response addQueue(@RequestBody MessageCreate message){
        try {
            if (poolsUtil.PoolsMap.containsKey(message.getPoolName())) {
                Map<String, Message> map = PoolsUtil.PoolsMap.get(message.getPoolName()).getMessages();
                    Message _message = new Message(message.getMessage().getKey(),message.getMessage().getValue(), LocalDateTime.now().toString(), LocalDateTime.now().toString());
                    map.put(message.getMessage().getKey(), _message);

                    poolsUtil.update(message.getPoolName(),PoolsUtil.PoolsMap.get(message.getPoolName()));
            }else{
                return  ResponseUtil.Error("找不到该池",404);
            }
            poolsUtil.receivePoolInfo(message.getPoolName());
            return ResponseUtil.Sucess("createMessage", "增加Message成功", message.getPoolName()+ message.getMessage().getKey());
        }catch (Exception ex)
        {
            return  ResponseUtil.Error("str",ex);
        }
    }

    public ClientApiController() {
    }

    @ApiOperation("删除作业")
    @PostMapping(value = "/deleteMessage")
    private Response deleteQueue(@RequestBody MessageUpdate messageUpdate){
       if(poolsUtil.PoolsMap.containsKey(messageUpdate.getPoolName())){
           if(PoolsUtil.PoolsMap.get(messageUpdate.getPoolName()).getMessages().containsKey(messageUpdate.getMessageKey()))
           {
               PoolsUtil.PoolsMap.get(messageUpdate.getPoolName()).getMessages().remove(messageUpdate.getMessageKey());
               poolsUtil.update(messageUpdate.getPoolName(),PoolsUtil.PoolsMap.get(messageUpdate.getPoolName()));
               poolsUtil.receivePoolInfo(messageUpdate.getPoolName());
           }else {
               return ResponseUtil.Error("找不到该作业，删除失败",404);
           }

       }else
       {
           return ResponseUtil.Error("找不到该池，删除失败",404);
       }
        return ResponseUtil.Sucess("deleteQueue","删除Message成功",messageUpdate);
    }


    @Autowired
    MessagehubUtil messagehubUtil;

    @ApiOperation("p2p消息模拟")
    @PostMapping(value = "p2pMessage")
    private  Response p2pMessage(@RequestBody P2pMessage message){
        try {
            //redisUtil.Publish(message.getReciver(), message.getMsg());
            messagehubUtil.eventBoardCast(message.getReciver(),message.getMsg());
            redisUtil.Publish(message.getReciver(),message.getMsg());
            return ResponseUtil.Sucess("sendP2pMessage","发送p2p消息成功",message);
        }catch (Exception ex)
        {
            return ResponseUtil.Error("发送p2p消息出现错误",ex);
        }
    }


}
