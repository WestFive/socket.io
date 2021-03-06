package socketio.model.Message;


public class P2pMessage {

    private String receiver;
    private String msg;


    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public P2pMessage(String receiver, String msg) {
        this.receiver = receiver;
        this.msg = msg;
    }

    public P2pMessage() {
    }
}
