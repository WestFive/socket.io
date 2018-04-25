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
import socketio.model.Pool.Pool;
import socketio.model.Pool.PoolClone;
import socketio.model.Pool.PoolCreate;
import socketio.model.bean.*;
import socketio.model.Message.Message;
import socketio.util.PoolsUtil;
import socketio.util.RedisUtil;
import socketio.util.ResponseUtil;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@Api(description = "消息服务客户端")
public class ClientApiController {

    @Autowired
    PoolsUtil poolsUtil;

    private Gson gson = new Gson();

//    ///PoolMehod
//    @ApiOperation("增加池")
//    @PostMapping(value = "/createPool")
//    private Response createPool(@RequestParam("poolName")String poolName,
//                                @RequestParam("poolMode")String poolMode,
//                                @RequestParam("queueSortColumn")String queueSortColumn,
//                                @RequestParam("forceOverWrite")boolean forceOverWrite,
//                                @RequestParam("description")String description) {
//        PoolCreate pool_create = new PoolCreate(poolName,poolMode,queueSortColumn,forceOverWrite,description);
//        socketClient.socket.emit("createPool",gson.toJson(pool_create));
//        return ResponseUtil.Sucess("createPool","创建池成功",pool_create);
//    }
//
//    @ApiOperation("克隆池")
//    @PostMapping(value = "/clonePool")
//    private Response clonePool(@RequestParam("sourcePoolName")String sourcePoolName,
//                               @RequestParam("destPoolName")String destPoolName,
//                               @RequestParam("creator")String creator){
//        PoolClone pool_clone = new PoolClone(sourcePoolName,destPoolName,creator);
//        socketClient.socket.emit("clonePool",gson.toJson((pool_clone)));
//        return ResponseUtil.Sucess("clonePool","克隆成功",pool_clone);
//    }
//
//    @ApiOperation("清空池")
//    @PostMapping(value = "/flushPool")
//    private Response flushPool(@RequestParam("poolName")String poolName){
//        socketClient.socket.emit("flushPool",poolName);
//        return ResponseUtil.Sucess("flushPool","删除成功",poolName);
//    }
//
//    @ApiOperation("销毁池")
//    @PostMapping(value = "/destroyPool")
//    private Response destoryPool(@RequestParam("poolName")String poolName){
//        socketClient.socket.emit("destroyPool",poolName);
//        return ResponseUtil.Sucess("destroyPool","销毁成功",poolName);
//    }
//
//    @ApiOperation("清除所有池")
//    @PostMapping(value = "/clearPool")
//    private Response clearPool(){
//        socketClient.socket.emit("clear","All");
//        return ResponseUtil.Sucess("clearPool","清空成功","All deleted");
//    }

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
            return ResponseUtil.Sucess("createMessage", "增加queue成功", message.getPoolName()+ message.getMessage().getKey());
        }catch (Exception ex)
        {
            return  ResponseUtil.Error("str",ex);
        }
    }
//    @ApiOperation("删除作业")
//    @PostMapping(value = "/deleteQueue")
//    private Response deleteQueue(@RequestParam("PoolName")String poolName,
//                                 @RequestParam("QueueKey")String queueKey){
//        socketClient.socket.emit("deleteQueue",gson.toJson(new MessageUpdate(poolName,queueKey)));
//        return ResponseUtil.Sucess("deleteQueue","删除queue成功",poolName+queueKey);
//    }
//    @ApiOperation("更新作业")
//    @PostMapping(value = "/updateQueue")
//    private Response updateQueue(@RequestParam("PoolName")String poolName,
//                                 @RequestParam("QueueKey")String queueKey,
//                                 @RequestParam("QueueValue")String queueValue){
//        socketClient.socket.emit("updateQueue",gson.toJson(new MessageCreate(poolName,new Message(queueKey,queueValue,LocalDateTime.now().toString(),LocalDateTime.now().toString()))));
//        return ResponseUtil.Sucess("updateQueue","更新queue成功",poolName+queueKey);
//    }

    /*耦合太重不符合客户端定义
    * */
//    @ApiOperation("获取作业")
//    @PostMapping(value = "/getMessage")
//    private Response getMessage(@RequestParam("PoolName")String poolName,
//                              @RequestParam("QueueKey")String queueKey){
//        Message queue =
//    }

}
