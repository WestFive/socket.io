package socketio.model.Message;

public class Message {
    public Message() {

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

    public Message(String key, String value, String createTime, String updateTime) {

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
        if (!(o instanceof Message)) return false;

        Message message = (Message) o;

        if (key != null ? !key.equals(message.key) : message.key != null) return false;
        if (value != null ? !value.equals(message.value) : message.value != null) return false;
        if (createTime != null ? !createTime.equals(message.createTime) : message.createTime != null) return false;
        return updateTime != null ? updateTime.equals(message.updateTime) : message.updateTime == null;
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
