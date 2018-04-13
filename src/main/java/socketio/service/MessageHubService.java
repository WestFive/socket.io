package socketio.service;

import com.corundumstudio.socketio.*;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import socketio.util.*;

import java.time.LocalDateTime;

@Service
public class MessageHubService implements CommandLineRunner{

    private final  static Logger logger = LoggerFactory.getLogger(MessageHubService.class);

    public static SocketIOServer Server ;

    private Gson gson = new Gson();

    @Autowired
    PoolsUtil poolsUtil;

    @Autowired
    MessagehubUtil messagehubUtil;

    @Autowired
    ConnectionCache connectionCache;

    @Autowired
    MessageUtil messageUtil;

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    ConnectModuleService connectModuleService;

    @Autowired
    PoolModuleService poolModuleService;

    @Autowired
    ConnectionModuleService connectionModuleService;

    @Autowired
    MessageService messageService;


    @Value("${messagehub.port}")
    private String port;

    @Value("${messagehub.address}")
    private String address;

    @Override
    public void run(String... strings) throws Exception {
        startServer();
        try{
            redisUtil.insert("serverStatus", LocalDateTime.now().toString());
        }catch (Exception ex){

        }
    }


    public AckRequest ackR;


    public  void startServer(){
        Configuration config = new Configuration();
        config.setHostname(address);
        config.setPort(Integer.parseInt(port));
        //config.setTransports(Transport.WEBSOCKET);
        final SocketIOServer server;
        if(Server!=null){
             server=Server;
        }else {
             server =new SocketIOServer(config);
             Server = server;
        }
        if(server!=null){logger.warn("消息服务开启成功");}

        connectModuleService.start();
        connectionModuleService.start();
        poolModuleService.start();
        messageService.start();




        server.start();
    }


}
