package socketio.demo.util;

import socketio.demo.model.Message.FrontPoolsMap;
import socketio.demo.model.Pool.Pool;
import socketio.demo.model.Queue.Queue;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class ListPoolUtil {

    public static List<FrontPoolsMap> MapListToList(Map<String,Pool> Pools){
        List<FrontPoolsMap> frontPoolsMaps = new ArrayList<>();
        for (Pool pool: Pools.values()
             ) {
            FrontPoolsMap temp = new FrontPoolsMap(pool.getPoolName(),pool.getPoolMode(),pool.getQueues().values(),pool.getQueuesSortColumn(),pool.getCreator(),pool.getCreateTime(),pool.getUpdateTime());
            frontPoolsMaps.add(temp);
        }
        return  frontPoolsMaps;
    }
}
