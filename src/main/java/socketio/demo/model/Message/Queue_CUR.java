package socketio.demo.model.Message;

public class Queue_CUR {
    private String poolName;
    private String queueKey;

    public Queue_CUR() {
    }

    public String getPoolName() {
        return poolName;
    }

    public void setPoolName(String poolName) {
        this.poolName = poolName;
    }

    public String getQueueKey() {
        return queueKey;
    }

    public void setQueueKey(String queueKey) {
        this.queueKey = queueKey;
    }
}
