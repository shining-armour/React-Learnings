import PropTypes from "prop-types"

const SendButton = ({isDisabled}) => {
    return <div className="input-group-append">
           <button className="btn submit-button" disabled={isDisabled()}>SEND</button>
           </div>
}

SendButton.propTypes = {
    isDisabled:PropTypes.func.isRequired
}

export default SendButton;