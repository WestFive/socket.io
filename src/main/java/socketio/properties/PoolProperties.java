package socketio.properties;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("messagehub.pool")
public class PoolProperties {

    private int maxqueuecount ;

    public int getMaxqueuecount() {
        return maxqueuecount;
    }

    public void setMaxqueuecount(int maxqueuecount) {
        this.maxqueuecount = maxqueuecount;
    }
}
