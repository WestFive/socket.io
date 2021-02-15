package socketio.model.Pool;

public class PoolClone {
    private String sourcePoolName;
    private String destPoolName;
    private String creator;

    public PoolClone(String sourcePoolName, String destPoolName, String creator) {
        this.sourcePoolName = sourcePoolName;
        this.destPoolName = destPoolName;
        this.creator = creator;
    }

    public PoolClone() {

    }

    public String getSourcePoolName() {

        return sourcePoolName;
    }

    public void setSourcePoolName(String sourcePoolName) {
        this.sourcePoolName = sourcePoolName;
    }

    public String getDestPoolName() {
        return destPoolName;
    }

    public void setDestPoolName(String destPoolName) {
        this.destPoolName = destPoolName;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}
