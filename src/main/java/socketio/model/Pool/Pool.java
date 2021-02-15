package socketio.model.Pool;

import socketio.model.Message.Message;

import java.util.*;

public class Pool {
    private String poolName;
    private String poolMode;
    private String description;
    private Map<String,Message> messages = new HashMap<String,Message>();
    private String messageSortColumn;
    private String creator;
    private String createTime;
    private String updateTime;
    private Set<UUID> clients = new HashSet<UUID>() {
    };

    public Pool(String poolName, String poolMode, String description, Map<String, Message> messages, String messageSortColumn, String creator, String createTime, String updateTime, Set<UUID> clients) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.description = description;
        this.messages = messages;
        this.messageSortColumn = messageSortColumn;
        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.clients = clients;
    }

    public String getUpdateTime() {

        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }



    public Pool(String poolName, String poolMode, String description,String messageSortColumn) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.description = description==null?"null":description;
        this.messageSortColumn = messageSortColumn==null?"null":messageSortColumn;
        this.clients = new HashSet<UUID>();
        this.messages = new HashMap<String,Message>();
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

    public Map<String, Message> getMessages() {
        return messages;
    }

    public void setMessages(Map<String, Message> messages) {
        this.messages = messages;
    }

    public String getMessageSortColumn() {
        return messageSortColumn;
    }

    public void setMessageSortColumn(String messageSortColumn) {
        this.messageSortColumn = messageSortColumn;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    public Set<UUID> getClients() {
        return clients;
    }

    public void setClients(Set<UUID> clients) {
        this.clients = clients;
    }


}
