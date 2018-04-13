package socketio.client;

import com.google.gson.Gson;
import io.socket.client.Ack;
import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import socketio.model.Connection.ConnectionCreate;
import socketio.model.Message.Message;
import socketio.model.Message.MessageCreate;
import socketio.model.Message.MessageUpdate;
import socketio.model.Pool.PoolCreate;

import java.net.URI;
import java.time.LocalDateTime;

//@Component
public class SocketClient {


    private Logger logger = LoggerFactory.getLogger(SocketClient.class);
    private Gson gson = new Gson();
    public SocketClient(){

        socket.on("receivePoolInfo", new Emitter.Listener() {
            @Override
            public void call(Object... objects) {
                logger.info("收到"+objects[0]);
            }
        });

        socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {

            @Override
            public void call(Object... objects) {

                socket.emit("authentication",gson.toJson(new ConnectionCreate("InnerApiClient","ApiClient")), new Ack() {
                    @Override
                    public void call(Object... objects) {
                        logger.info(objects[0].toString());
                        socket.emit("createPool", gson.toJson(new PoolCreate("publicdefault1", "publicMode", "updatetime", true, "default")), new Ack() {
                            @Override
                            public void call(Object... objects) {
                                System.out.println(objects[0]);
                            }
                        });
//                        socket.emit("destroyPool", "publicdefault1", new Ack() {
//                            @Override
//                            public void call(Object... objects) {
//
//
//                            }
//                        });
                        socket.emit("listenPool", "publicdefault1", new Ack() {
                            @Override
                            public void call(Object... objects) {
                                logger.info(objects[0].toString());
                            }
                        });


                        socket.emit("createMessage", gson.toJson(new MessageCreate("publicdefault1", new Message("1345", "2486", LocalDateTime.now().toString(), LocalDateTime.now().toString()))), new Ack() {
                            @Override
                            public void call(Object... objects) {
                                logger.info(objects[0].toString());
                            }
                        });
                        socket.emit("deleteMessage", gson.toJson(new MessageUpdate("publicdefault1", "1345")), new Ack() {
                            @Override
                            public void call(Object... objects) {
                                logger.info(objects[0].toString());
                            }
                        });


                    }
                });
            }


        });

        socket.connect();



        //socket.emit("r")
    }

    public  URI uri = URI.create("http://localhost:5003");
    public  Socket socket = IO.socket(uri);
}
