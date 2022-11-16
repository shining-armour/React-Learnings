import MessageItem from "./MessageItem";
import PropTypes from "prop-types"

const MessageList = ({messagesList, currentUser}) => {

    const allMessageList = messagesList.map((message, index) => (
        <MessageItem key={index} message={message} currentUser={currentUser}/>
    ))
    return <ul className="message-list">{allMessageList}</ul>
}

MessageList.propTypes = {
    messagesList: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired
}



export default MessageList;