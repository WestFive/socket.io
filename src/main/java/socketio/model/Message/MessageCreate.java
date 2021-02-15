package socketio.model.Message;

import socketio.model.Message.Message;

public class MessageCreate {
    private String poolName;
    private Message message;

    public MessageCreate() {
    }

    public MessageCreate(String poolName, Message message) {
        this.poolName = poolName;
        this.message = message;
    }

    public String getPoolName() {
        return poolName;

    }

    public void setPoolName(String poolName) {
        this.poolName = poolName;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }
}
