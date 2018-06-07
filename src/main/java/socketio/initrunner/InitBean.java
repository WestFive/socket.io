package socketio.initrunner;

import java.util.List;

public class InitBean {


    public List<PoolInit> init_pools;
    class PoolInit {
        private  String pool_name;
        private  String pool_mode;
        private  String queue_sort_column;
        private List<QueueInit> queues;

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

        public String getQueue_sort_column() {
            return queue_sort_column;
        }

        public void setQueue_sort_column(String queue_sort_column) {
            this.queue_sort_column = queue_sort_column;
        }

        public List<QueueInit> getQueues() {
            return queues;
        }

        public void setQueues(List<QueueInit> queues) {
            this.queues = queues;
        }
    }
    class QueueInit{
        public String getKey() {
            return key;
        }

        public void setKey(String key) {
            this.key = key;
        }

        public Object getValue() {
            return value;
        }

        public void setValue(Object value) {
            this.value = value;
        }

        private  String key;
        private  Object value;
    }
}


