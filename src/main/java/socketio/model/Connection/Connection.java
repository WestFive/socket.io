package socketio.model.Connection;

import java.util.Collection;
import java.util.List;

public class Connection  {
    private String connectionId;
    private String clientName;
    private String clientCode;
    private String clientIpAddress;
    private Collection<String> privatePools;

    public Collection<String> getPrivatePools() {
        return privatePools;
    }

    public void setPrivatePools(Collection<String> privatePools) {
        this.privatePools = privatePools;
    }

    public String getConnectionId() {
        return connectionId;
    }

    public void setConnectionId(String connectionId) {
        this.connectionId = connectionId;
    }

    public Connection(String connectionId, String clientName, String clientCode, String clientIpAddress, Collection<String> privatePools) {
        this.connectionId = connectionId;
        this.clientName = clientName;
        this.clientCode = clientCode;
        this.clientIpAddress = clientIpAddress;
        this.privatePools = privatePools;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientCode() {
        return clientCode;
    }

    public void setClientCode(String clientCode) {
        this.clientCode = clientCode;
    }


    public String getClientIpAddress() {
        return clientIpAddress;
    }

    public void setClientIpAddress(String clientIpAddress) {
        this.clientIpAddress = clientIpAddress;
    }
}
