package socketio.demo.model.Pool;

import socketio.demo.model.Queue.Queue;

import java.util.List;

public class Pool {
    private String poolName;
    private String poolMode;
    private List<Queue> queues;
    private String queuesSortColumn;
    private String creator;
    private String createTime;
    private String updateTime;

    public Pool(String poolName, String poolMode, List<Queue> queues, String queuesSortColumn, String creator, String createTime, String dateTime) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queues = queues;
        this.queuesSortColumn = queuesSortColumn;
        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = dateTime;
    }

    public Pool() {

    }

    public Pool(String poolName, String poolMode, String queuesSortColumn, String creator) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queuesSortColumn = queuesSortColumn;
        this.creator = creator;
    }

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

    public List<Queue> getQueues() {
        return queues;
    }

    public void setQueues(List<Queue> queues) {
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

    public String getupDateTime() {
        return updateTime;
    }

    public void setupDateTime(String dateTime) {
        this.updateTime = dateTime;
    }
}
