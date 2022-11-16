import PropTypes from "prop-types"

const MessageItem = ({message, currentUser}) => {
    return <li className={message.username === currentUser.username ? "message sender" : "message receiver"}>
    <p>{`${message.username}: ${message.text}`}</p>
  </li>
}

MessageItem.propTypes = {
    msg: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
}

export default MessageItem;