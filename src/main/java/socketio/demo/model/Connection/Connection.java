package socketio.demo.model.Connection;

import java.util.Collection;
import java.util.List;

public class Connection  {
    private String connectionId;
    private String connectionName;
    private String connectionIpAdress;
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

    public String getConnectionName() {
        return connectionName;
    }

    public void setConnectionName(String connectionName) {
        this.connectionName = connectionName;
    }

    public String getConnectionIpAdress() {
        return connectionIpAdress;
    }

    public Connection(String connectionId, String connectionName, String connectionIpAdress) {
        this.connectionId = connectionId;
        this.connectionName = connectionName;
        this.connectionIpAdress = connectionIpAdress;
    }

    public Connection(String connectionId, String connectionName, String connectionIpAdress, Collection<String>privatePools) {

        this.connectionId = connectionId;
        this.connectionName = connectionName;
        this.connectionIpAdress = connectionIpAdress;
        this.privatePools = privatePools;
    }

    public void setConnectionIpAdress(String connectionIpAdress) {

        this.connectionIpAdress = connectionIpAdress;
    }


}
