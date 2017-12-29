package socketio.demo.model.Pool;

import socketio.demo.model.Queue.Queue;

import java.util.List;
import java.util.Map;

public class Pool {
    private String poolName;
    private String poolMode;
    private Map<String,Queue> queues;
    private String queuesSortColumn;
    private String creator;

    @Override
    public String toString() {
        return "Pool{" +
                "poolName='" + poolName + '\'' +
                ", poolMode='" + poolMode + '\'' +
                ", queues=" + queues.values() +
                ", queuesSortColumn='" + queuesSortColumn + '\'' +
                ", creator='" + creator + '\'' +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }

    public Pool(String poolName, String poolMode, String queuesSortColumn, String creator) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queuesSortColumn = queuesSortColumn;
        this.creator = creator;
    }

    public Pool(String poolName, String poolMode, String queuesSortColumn, String creator, String createTime, String updateTime) {

        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queuesSortColumn = queuesSortColumn;
        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Pool(String poolName, String poolMode, Map<String, Queue> queues, String queuesSortColumn, String creator, String createTime, String updateTime) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queues = queues;
        this.queuesSortColumn = queuesSortColumn;

        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    private String createTime;
    private String updateTime;

    public String getPoolName() {
        return poolName;
    }

    public void setPoolName(String poolName) {
        this.poolName = poolName;
    }

    public String getPoolMode() {
        return poolMode;
    }

    public void setPoolMode(String poolMode) {
        this.poolMode = poolMode;
    }

    public Map<String, Queue> getQueues() {
        return queues;
    }

    public void setQueues(Map<String, Queue> queues) {
        this.queues = queues;
    }

    public String getQueuesSortColumn() {
        return queuesSortColumn;
    }

    public void setQueuesSortColumn(String queuesSortColumn) {
        this.queuesSortColumn = queuesSortColumn;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public Pool() {

    }
}
