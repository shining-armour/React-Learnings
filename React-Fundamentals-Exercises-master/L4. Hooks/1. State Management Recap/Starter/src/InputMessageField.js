import PropTypes from "prop-types"

const InputMessageField = ({updateMessage}) => {
    return <input type="text"className="form-control" placeholder="Enter your message..." onChange={updateMessage}/>
}

InputMessageField.propTypes = {
    updateMessage: PropTypes.func.isRequired
}

export default InputMessageField;