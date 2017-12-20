package socketio.demo.model.Pool;

public class PoolStatus {
    private String pool_name;
    private String pool_mode;
    private Integer queues_amount;
    private String queues_sort_column;
    private String create_time;
    private String update_time;

    public PoolStatus() {
    }

    public PoolStatus(String pool_name, String pool_mode, Integer queues_amount, String queues_sort_column, String create_time, String update_time) {
        this.pool_name = pool_name;
        this.pool_mode = pool_mode;
        this.queues_amount = queues_amount;
        this.queues_sort_column = queues_sort_column;
        this.create_time = create_time;
        this.update_time = update_time;
    }

    public String getPool_name() {

        return pool_name;
    }

    public void setPool_name(String pool_name) {
        this.pool_name = pool_name;
    }

    public String getPool_mode() {
        return pool_mode;
    }

    public void setPool_mode(String pool_mode) {
        this.pool_mode = pool_mode;
    }

    public Integer getQueues_amount() {
        return queues_amount;
    }

    public void setQueues_amount(Integer queues_amount) {
        this.queues_amount = queues_amount;
    }

    public String getQueues_sort_column() {
        return queues_sort_column;
    }

    public void setQueues_sort_column(String queues_sort_column) {
        this.queues_sort_column = queues_sort_column;
    }

    public String getCreate_time() {
        return create_time;
    }

    public void setCreate_time(String create_time) {
        this.create_time = create_time;
    }

    public String getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(String update_time) {
        this.update_time = update_time;
    }
}
