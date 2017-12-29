package socketio.demo.util;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;


@Component
public class RedisUtil {

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    private Gson gson = new Gson();

    public void insert(String key,String value){
        stringRedisTemplate.opsForValue().set(key,value);
    }

    public String select(String key){
        return stringRedisTemplate.opsForValue().get(key);
    }

    public  <T>T ConvertToObject(String value,Class<T> T){
        return gson.fromJson(value,T);
    }

    public String ConverToJson(Object o){
        return gson.toJson(o);
    }

    public boolean hasKey(String key){
        return stringRedisTemplate.hasKey(key);
    }
    public void insertKeyAndTime(String key,String value,long s){
        stringRedisTemplate.opsForValue().set(key,value,s, TimeUnit.SECONDS);
    }
    public boolean delete(String key){
        if(hasKey(key)){
            stringRedisTemplate.delete(key);
            return true;
        }else {
            return  false;
        }
    }

}
