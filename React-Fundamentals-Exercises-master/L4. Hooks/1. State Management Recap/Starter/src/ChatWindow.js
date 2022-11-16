import PropTypes from "prop-types"
import SendMessageForm from "./SendMessageForm";
import MessageList from "./MessageList";
import ChatWindowHeader from "./ChatWindowHeader";

const ChatWindow = ({currentUser, messagesList, onMessageSend}) => {
    return (<div className="chat-window">
    <ChatWindowHeader currentUser={currentUser} />
    <MessageList messagesList={messagesList} currentUser={currentUser} />
    <SendMessageForm username={currentUser.username} onMessageSend={onMessageSend} />
  </div>)
}

ChatWindow.propTypes = {
    currentUser: PropTypes.object.isRequired,
    messagesList: PropTypes.array.isRequired,
    onMessageSend: PropTypes.func.isRequired
}

export default ChatWindow;