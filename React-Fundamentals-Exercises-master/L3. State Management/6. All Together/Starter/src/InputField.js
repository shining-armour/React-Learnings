import PropTypes from "prop-types"

const InputField = ({inputName, inputValue, placeholderValue, onInputChangeFunc}) => {
    return <input name={inputName} value={inputValue} placeholder={placeholderValue} onChange={onInputChangeFunc}/>
}

InputField.propTypes = {
    inputName: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    placeholderValue: PropTypes.string.isRequired,
    onInputChangeFunc: PropTypes.func.isRequired
}
export default InputField;