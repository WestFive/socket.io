package socketio.model.Pool;

public class PoolCreate {
    private String poolName;
    private String poolMode;
    private String messagesSortColumn;
    private boolean forceOverWrite;
    private String description;
    private String creator;

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

    public PoolCreate(String poolName, String poolMode, String messagesSortColumn, boolean forceOverWrite,String description) {
        this.poolName = poolName;
        this.poolMode = poolMode;
        this.messagesSortColumn = messagesSortColumn==null?"null":messagesSortColumn;
        this.forceOverWrite = forceOverWrite;
        this.description = description ==null?"null":description;
    }

    public PoolCreate() {
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

    public String getMessagesSortColumn() {
        return messagesSortColumn;
    }

    public void setMessagesSortColumn(String queueSortColumn) {
        this.messagesSortColumn = queueSortColumn;
    }

    public boolean isForceOverWrite() {
        return forceOverWrite;
    }

    public void setForceOverWrite(boolean forceOverWrite) {
        this.forceOverWrite = forceOverWrite;
    }

}
