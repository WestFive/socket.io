package socketio.model.Connection;

import java.util.Collection;
import java.util.List;

public class Connection  {
    private String connectionId;
    private String clientName;
    private String clientCode;
    private String connectionIpAddress;
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



    public String getConnectionIpAdress() {
        return connectionIpAddress;
    }


    public Connection(String connectionId, String clientName, String clientCode, String connectionIpAddress, Collection<String> privatePools) {
        this.connectionId = connectionId;
        this.clientName = clientName;
        this.clientCode = clientCode;
        this.connectionIpAddress = connectionIpAddress;
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

    public String getConnectionIpAddress() {
        return connectionIpAddress;
    }

    public void setConnectionIpAddress(String connectionIpAddress) {
        this.connectionIpAddress = connectionIpAddress;
    }

    public void setConnectionIpAdress(String connectionIpAdress) {

        this.connectionIpAddress = connectionIpAdress;
    }


}
