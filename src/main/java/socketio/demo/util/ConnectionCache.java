package socketio.demo.util;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;
import socketio.demo.model.Connection.Connection;
import socketio.demo.model.Message.Response;

import java.util.*;

@Component
public class ConnectionCache {

    public static Map<String,Connection> connectionMap = new HashMap<>();

    @Autowired
    RedisUtil redisUtil;

    private Gson gson = new Gson();

    public  Response AddToConnections(Connection connection){
        try {
            if (connectionMap.containsKey(connection.getConnectionName()) == false) {
                connectionMap.put(connection.getConnectionName(), connection);
                 redisUtil.insertKeyAndTime("connectionMap",gson.toJson(connectionMap),10);

                return ResponseUtil.Sucess(connection.getConnectionName()+"登录成功", connection);
            } else {
                connectionMap.put(connection.getConnectionName(),connection);
                redisUtil.insertKeyAndTime("connectionMap",gson.toJson(connectionMap),10);
                return  ResponseUtil.Sucess(connection.getConnectionName()+"登录成功,信息已更新", connection);
            }
        }catch (Exception e){
            return ResponseUtil.Error(connection.getConnectionName()+"登录服务器()"+"服务器错误",e);
        }
    }

    public  Response RemoveFromConnections(Connection connection){
        try {
            if (connectionMap.containsKey(connection.getConnectionName())) {
                connectionMap.remove(connection.getConnectionName());
                redisUtil.insertKeyAndTime("connectionMap",gson.toJson(connectionMap),10);
                return ResponseUtil.Sucess(connection.getConnectionName()+"离开服务器", connection);
            } else {
                return ResponseUtil.Error(connection.getConnectionName()+"没有该客户端", 404);
            }
        }catch (Exception e){
            return ResponseUtil.Error(connection.getConnectionName()+"离开服务器()"+"服务器错误",e);
        }
    }
    public  Response RemoveFromConnections(String ConnectionId){
        Collection<Connection> list = GetSessionList();
        Optional<Connection> opt = list.stream().filter((x)->x.getConnectionId().equals(ConnectionId)).findFirst();
        if (opt.isPresent()) {
            Connection connection = opt.get();
            return RemoveFromConnections(connection);
        }else{
            return ResponseUtil.Sucess("Object Not Found");
        }
    }

    public  Connection GetConnctionByName(String ConnectionName){
        return connectionMap.get(ConnectionName);
    }

    public  Connection GetConnctionById(UUID id){
        Collection<Connection> list = GetSessionList();
        Optional<Connection> opt = list.stream().filter((x)->x.getConnectionId().equals(id.toString())).findFirst();
        if (opt.isPresent()) {
            Connection connection = opt.get();
            return connection;
        }else{
            return null;
        }
    }


    //获取在线列表（包括SessionId)
    public  Map<String,Connection> GetSessionMap(){
        return  connectionMap;
    }

    ///获取在线列表
    public  Collection<Connection>GetSessionList(){
        return connectionMap.values();
    }


}
