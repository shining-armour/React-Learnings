import PropTypes from "prop-types"

const ChatWindowHeader = ({currentUser}) => {
    return (<div>
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{currentUser.username}</div>
     </div>)
}

ChatWindowHeader.propTypes = {
    currentUser : PropTypes.object.isRequired
}

export default ChatWindowHeader;