package socketio.util;

import socketio.model.Message.Message;

import java.util.Comparator;
import java.util.Map;

public class MapValueComparator implements Comparator<Map.Entry<String, Message>> {

    @Override
    public int compare(Map.Entry<String, Message> me1, Map.Entry<String, Message> me2) {
        return   me2.getValue().getCreateTime().compareTo(me1.getValue().getCreateTime());
    }
}
