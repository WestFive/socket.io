package socketio.initrunner;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import socketio.model.Message.Message;
import socketio.model.Pool.Pool;
import socketio.util.PoolsUtil;
import socketio.util.RedisUtil;
import java.io.File;
import java.time.LocalDateTime;
import java.util.*;

@Component
public class InitRunner  implements CommandLineRunner{


    @Autowired
    RedisUtil redisUtil;

    @Autowired
    PoolsUtil poolsUtil;

    private Gson gson = new Gson();

    private Logger logger = LoggerFactory.getLogger(getClass());
    @Override
    public void run(String... strings) throws Exception {

        System.out.println("commandRunner~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        //Pool pool = new Pool("123","PublicMode","noop" , new HashMap<String, Message>(),"updateTime","system",LocalDateTime.now().toString(), LocalDateTime.now().toString(),new HashSet<>());
        //poolsUtil.PoolsMap.put(pool.getPoolName(),pool);

        try
        {





           InitBean bean =  gson.fromJson(getInits(),InitBean.class);
           System.out.println(bean.init_pools.get(0).toString());
           Init(bean);
        }catch (Exception ex)
        {
            logger.info("初始化装载池数据出现错误"+ex.getMessage());
        }

    }

    private void Init(InitBean bean) {

        for (InitBean.PoolInit pool:bean.init_pools
             ) {
            Pool poolobj = new Pool(pool.getPool_name(),pool.getPool_mode(),"initPool",new HashMap<String,Message>(),"updateTime","system",LocalDateTime.now().toString(),LocalDateTime.now().toString(),new HashSet<UUID>());

            List<InitBean.QueueInit> list = pool.getQueues();
            if(list.size()>0)
            {
                for (InitBean.QueueInit queueinit:list
                     ) {
                    poolobj.getMessages().put(queueinit.getKey(),new Message(queueinit.getKey(), gson.toJson(queueinit.getValue()),LocalDateTime.now().toString(),LocalDateTime.now().toString()));
                }
            }

                if(poolsUtil.PoolsMap.containsKey(poolobj.getPoolName()))
                {
                    logger.info("已存在池"+poolobj.getPoolName()+",不装载");
                }else

                {
                    poolsUtil.PoolsMap.put(poolobj.getPoolName(), poolobj);
                    poolsUtil.update(poolobj.getPoolName(), poolobj);
                    logger.info("装载池数据"+poolobj.getPoolName());
                }


        }
    }


    public String getInits() {
        String path = getClass().getClassLoader().getResource("init.json").toString();
        path = path.replace("\\","/");
        if(path.contains(":"))
        {
            path = path.replace("file:/","");
        }
        try {
            String input = org.apache.commons.io.FileUtils.readFileToString(new File(path), "UTF-8");

            return  input;
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }
}
