package socketio.model.Connection;

public class ConnectionCreate {

    private String clientCode;
    private String clientName;

    public ConnectionCreate(String clientCode, String clientName) {
        this.clientCode = clientCode;
        this.clientName = clientName;
    }

    public String getClientCode() {

        return clientCode;
    }

    public void setClientCode(String clientCode) {
        this.clientCode = clientCode;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public ConnectionCreate() {
    }
}
