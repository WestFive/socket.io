package socketio.demo.model.Queue;

import java.util.Date;

public class Queue {
    public Queue() {

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

    public Queue(String key, String value, String createTime, String updateTime) {

        this.key = key;
        this.value = value;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public String getKey() {

        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }



    private String key;
    private String value;
    private String createTime;
    private String updateTime;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Queue)) return false;

        Queue queue = (Queue) o;

        if (key != null ? !key.equals(queue.key) : queue.key != null) return false;
        if (value != null ? !value.equals(queue.value) : queue.value != null) return false;
        if (createTime != null ? !createTime.equals(queue.createTime) : queue.createTime != null) return false;
        return updateTime != null ? updateTime.equals(queue.updateTime) : queue.updateTime == null;
    }

    @Override
    public int hashCode() {
        int result = key != null ? key.hashCode() : 0;
        result = 31 * result + (value != null ? value.hashCode() : 0);
        result = 31 * result + (createTime != null ? createTime.hashCode() : 0);
        result = 31 * result + (updateTime != null ? updateTime.hashCode() : 0);
        return result;
    }
}
