import PropTypes from "prop-types" 

const AddInput = ({inputValue, handleInputChange}) => {
    return <input
    type="text"
    placeholder="Enter New Item"
    value={inputValue}
    onChange={handleInputChange}
  />
}

AddInput.propTypes = {
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

export default AddInput;