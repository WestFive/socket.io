package socketio.demo.model.Message;

public class Message {
    private String userName;

    public Message(String userName, String message) {
        this.userName = userName;
        this.message = message;
    }

    public Message() {
    }

    public String getUserName() {

        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    private String message;


}
