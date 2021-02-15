package socketio.model.Pool;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

public class PoolStatus {
    private String poolName;
    private String poolMode;
    private Integer messageAmount;
    private String messageSortColumn;
    private String description;
    private String creator;
    private String createTime;
    private String updateTime;
    private Set<UUID> clients = new HashSet<>();


    public PoolStatus(String poolName, String poolMode, Integer messageAmount, String messageSortColumn, String description, String creator, String createTime, String updateTime) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.messageAmount = messageAmount;
        this.messageSortColumn = messageSortColumn;
        this.description = description;
        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public PoolStatus(String poolName, String poolMode, Integer messageAmount, String messageSortColumn, String description, String creator, String createTime, String updateTime, Set<UUID> clients) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.messageAmount = messageAmount;
        this.messageSortColumn = messageSortColumn;
        this.description = description;
        this.creator = creator;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.clients = clients;
    }

    public Set<UUID> getClients() {

        return clients;
    }

    public void setClients(Set<UUID> clients) {
        this.clients = clients;
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

    public Integer getMessageAmount() {
        return messageAmount;
    }

    public void setMessageAmount(Integer messageAmount) {
        this.messageAmount = messageAmount;
    }

    public String getMessageSortColumn() {
        return messageSortColumn;
    }

    public void setMessageSortColumn(String messageSortColumn) {
        this.messageSortColumn = messageSortColumn;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
}
