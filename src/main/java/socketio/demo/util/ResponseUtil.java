package socketio.demo.util;

import socketio.demo.model.Response;

public class ResponseUtil {
    public static Response Sucess(String str){
        Response res = new Response();
        res.setCode(200);
        res.setData(null);
        res.setMessage(str);
        return res;
    }
    public static Response<Object> Sucess(String str,Object obj){
        Response res = new Response();
        res.setMessage(str);
        res.setCode(200);
        res.setData(obj);
        return res;
    }
    public static Response Error(String err,Integer code){
        Response res = new Response();
        res.setData(null);
        res.setCode(code);
        res.setMessage(err);
        return res;
    }
    public static Response<Object> Error(String err,Integer code,Object obj){
        Response res = new Response();
        res.setMessage(err);
        res.setCode(code);
        res.setData(obj);
        return res;
    }
    public static Response<Exception> Error(String err,Exception e){
        Response res = new Response();
        res.setData(e);
        res.setMessage("服务器错误");
        res.setCode(500);
        return  res;
    }
}
