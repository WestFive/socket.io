package socketio.util;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import socketio.model.Connection.Connection;
import socketio.model.bean.Response;
import socketio.model.Pool.Pool;

import java.util.*;

/*
* 这个类用于操作连接对象缓存
*
* */
@Component
public class ConnectionCache {

    public static Map<String,Connection> connectionMap = new HashMap<>();

    @Autowired
    RedisUtil redisUtil;
    @Autowired
    PoolsUtil poolsUtil;

    private Gson gson = new Gson();

    public  Response AddToConnections(Connection connection) {
        try {
                connectionMap.put(connection.getConnectionId(), connection);
                redisUtil.insert("connectionMap", gson.toJson(connectionMap));

            }catch(Exception e){
                return ResponseUtil.Error(connection.getClientName() + "登录服务器()" + "服务器错误", e);
            }
            return ResponseUtil.Sucess(connection.getClientName() + "登录成功", connection);
        }


//    public  Response RemoveFromConnections(Connection connection){
//        try {
//            if (connectionMap.containsKey(connection.getConnectionId())) {
//                connectionMap.remove(connection.getConnectionId());
//                redisUtil.insert("connectionMap",gson.toJson(connectionMap));
//                return ResponseUtil.Sucess(connection.getConnectionId()+"离开服务器", connection);
//            } else {
//                return ResponseUtil.Error(connection.getConnectionId()+"没有该客户端", 404);
//            }
//        }catch (Exception e){
//            return ResponseUtil.Error(connection.getConnectionId()+"离开服务器()"+"服务器错误",e);
//        }
//    }


    public Response RemoveFromConnections(String connectionId)
    {
        try {
            if (connectionMap.containsKey(connectionId)) {
                connectionMap.remove(connectionId);
                redisUtil.insert("connectionMap",gson.toJson(connectionMap));
                return ResponseUtil.Sucess(connectionId+"离开服务器", connectionId);
            } else {
                return ResponseUtil.Error(connectionId+"没有该客户端", 404);
            }
        }catch (Exception e){
            return ResponseUtil.Error(connectionId+"离开服务器()"+"服务器错误",e);
        }
    }
//    public  Response RemoveFromConnections(String ConnectionId){
//        Collection<Connection> list = getConnections();
//        Optional<Connection> opt = list.stream().filter((x)->x.getConnectionId().equals(ConnectionId)).findFirst();
//        if (opt.isPresent()) {
//            Connection connection = opt.get();
//            return RemoveFromConnections(connection);
//        }else{
//            return ResponseUtil.Sucess("Object Not Found");
//        }
//    }
//
//    public  Connection GetConnctionByName(String ConnectionName){
//        return connectionMap.get(ConnectionName);
//    }
//
//    public  Connection GetConnctionById(UUID id){
//        Collection<Connection> list = getConnections();
//        Optional<Connection> opt = list.stream().filter((x)->x.getConnectionId().equals(id.toString())).findFirst();
//        if (opt.isPresent()) {
//            Connection connection = opt.get();
//            return connection;
//        }else{
//            return null;
//        }
//    }

    public Connection GetConnectionById(String id){
        return connectionMap.get(id);
    }


    //获取在线列表（包括SessionId)
    public  Map<String,Connection> getConnectionMap(){
        return  connectionMap;
    }

    ///获取在线列表
    public  Collection<Connection>getConnections(){
        try {
            for (Connection connection : connectionMap.values()
                    ) {
                connection.getPrivatePools().clear();
                for (Pool pool : PoolsUtil.PoolsMap.values()
                        ) {
                    if (pool.getCreator().equals(connection.getClientName()) && pool.getPoolMode().equals("private")) {
                        Collection<String> privatePools = connection.getPrivatePools();
                        privatePools.add(pool.getPoolName());
                        connection.setPrivatePools(privatePools);
                        connectionMap.put(connection.getConnectionId(), connection);
                    }
                }
            }
        }catch (Exception ex){
            redisUtil.insert("LastError","getSessionList"+ex);
        }
        return connectionMap.values();
    }


}
