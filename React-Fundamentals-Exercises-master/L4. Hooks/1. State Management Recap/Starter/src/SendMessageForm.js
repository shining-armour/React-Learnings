import InputMessageField from "./InputMessageField";
import SendButton from "./SendButton";
import { useState } from "react";
import PropTypes from "prop-types"

const SendMessageForm = ({username, onMessageSend}) => {

    const [message, setMessage] = useState("")

    const updateMessage = (event) => {
        setMessage(event.target.value)
    }

    // If the user did not type anything, he/she should not be allowed to submit.
    const isMessageEmpty = () => message === "";

    const onFormSubmit= (event) => {
        event.preventDefault();
        onMessageSend(username,message)
    }

    return <form className="input-group" onSubmit={onFormSubmit}>
            <InputMessageField updateMessage={updateMessage} />
            <SendButton isDisabled={isMessageEmpty}/>
        </form>
        
}

SendMessageForm.propTypes = {
    username: PropTypes.string.isRequired,
    onMessageSend: PropTypes.func.isRequired
}

export default SendMessageForm;