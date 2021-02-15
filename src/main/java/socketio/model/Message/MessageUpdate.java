package socketio.model.Message;

public class MessageUpdate {
    private String poolName;
    private String messageKey;

    public MessageUpdate() {
    }

    public String getPoolName() {
        return poolName;
    }

    public void setPoolName(String poolName) {
        this.poolName = poolName;
    }

    public MessageUpdate(String poolName, String messageKey) {
        this.poolName = poolName;
        this.messageKey = messageKey;
    }

    public String getMessageKey() {

        return messageKey;
    }

    public void setMessageKey(String messageKey) {
        this.messageKey = messageKey;
    }
}
