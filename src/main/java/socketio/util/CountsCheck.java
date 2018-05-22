package socketio.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.pool2.PoolUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.convert.KeyspaceConfiguration;
import org.springframework.stereotype.Component;
import socketio.model.Message.Message;
import socketio.model.Pool.Pool;
import socketio.properties.PoolProperties;

import java.util.*;

@Component
public class CountsCheck {


    @Autowired
    PoolProperties poolProperties;


    @Autowired
    PoolsUtil poolsUtil;

    private Logger logger = LoggerFactory.getLogger(getClass());


    public Pool trySplit(String poolName){
        if(poolsUtil.PoolsMap.containsKey(poolName)) {
            Pool pool = PoolsUtil.PoolsMap.get(poolName);
            Map<String, Message> newMap = new HashMap<>();

            if (poolProperties.getMaxqueuecount() < pool.getMessages().size()) {
                Set<String> keys = pool.getMessages().keySet();


                Object[] arr = keys.toArray();
                Collections.reverse(Arrays.asList(arr));
                for (int i = poolProperties.getMaxqueuecount(); i < arr.length; i++) {
                    pool.getMessages().remove(arr[i]);
                }

            }
            return pool;
        }
        logger.info("筛选返回空");
       return  null;

    }
}
