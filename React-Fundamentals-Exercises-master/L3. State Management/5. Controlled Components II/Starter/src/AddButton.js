import PropTypes from "prop-types"

const AddButton = ({isInputEmpty}) => {
    return <button disabled={isInputEmpty()}>Add</button>
}

AddButton.propTypes = {
    isInputEmpty:PropTypes.func.isRequired
}

export default AddButton;