package socketio.demo.model.Message;

import socketio.demo.model.Queue.Queue;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class FrontPoolsMap {
    private String poolName;
    private String poolMode;
    private Collection<Queue> queues;
    private String queuesSortColumn;
    private String creator;
    private String createTime;

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

    private String updateTime;

    public FrontPoolsMap() {
    }

    public FrontPoolsMap(String poolName, String poolMode, Collection<Queue> queues, String queuesSortColumn, String creator, String createTime, String updateTime) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queues = queues;
        this.queuesSortColumn = queuesSortColumn;
        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public FrontPoolsMap(String poolName, String poolMode, Collection<Queue> queues, String queuesSortColumn, String creator) {

        this.poolName = poolName;
        this.poolMode = poolMode;
        this.queues = queues;
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

    public Collection<Queue> getQueues() {
        return queues;
    }

    public void setQueues(Collection<Queue> queues) {
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
}
