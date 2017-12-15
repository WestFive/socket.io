package socketio.demo.util;

import socketio.demo.model.Connection;
import socketio.demo.model.Response;

import java.util.*;

public class ConnectionCache {

    public static Map<String,Connection> connectionMap = new HashMap<String,Connection>();

    public static Response AddToConnections(Connection connection){
        try {
            if (connectionMap.containsKey(connection.getConnectionName()) == false) {
                connectionMap.put(connection.getConnectionName(), connection);
                return ResponseUtil.Sucess(connection.getConnectionName()+"登录成功", connection);
            } else {
                connectionMap.put(connection.getConnectionName(),connection);
                return  ResponseUtil.Sucess(connection.getConnectionName()+"登录成功,信息已更新", connection);
            }
        }catch (Exception e){
            return ResponseUtil.Error(connection.getConnectionName()+"登录服务器()"+"服务器错误",e);
        }
    }

    public static Response RemoveFromConnections(Connection connection){
        try {
            if (connectionMap.containsKey(connection.getConnectionName())) {
                connectionMap.remove(connection.getConnectionName());
                return ResponseUtil.Sucess(connection.getConnectionName()+"离开服务器", connection);
            } else {
                return ResponseUtil.Error(connection.getConnectionName()+"没有该客户端", 404);
            }
        }catch (Exception e){
            return ResponseUtil.Error(connection.getConnectionName()+"离开服务器()"+"服务器错误",e);
        }
    }
    public static Response RemoveFromConnections(String ConnectionId){
        List<Connection> list = GetSessionList();
        Optional<Connection> opt = list.stream().filter((x)->x.getConnectionId().equals(ConnectionId)).findFirst();
        if (opt.isPresent()) {
            Connection connection = opt.get();
            return RemoveFromConnections(connection);
        }else{
            return ResponseUtil.Sucess("Object Not Found");
        }

    }

    public static Connection GetConnctionByName(String ConnectionName){
        return connectionMap.get(ConnectionName);
    }

    //获取在线列表（包括SessionId)
    public static Map<String,Connection> GetSessionMap(){
        return  connectionMap;
    }

    ///获取在线列表
    public static List<Connection>GetSessionList(){
        List<Connection> connections = new ArrayList<Connection>();
        for (Connection conn:connectionMap.values()
             ) {
            connections.add(conn);
        }
        return connections;
    }
}
