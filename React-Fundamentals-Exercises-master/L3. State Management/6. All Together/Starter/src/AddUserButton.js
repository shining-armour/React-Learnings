import PropTypes from "prop-types"

const AddUserButton = ({areInputFieldsEmpty}) => {
    return <button disabled={areInputFieldsEmpty()}>Add New User</button>
}

AddUserButton.propTypes = {
    areInputFieldsEmpty: PropTypes.func.isRequired
}

export default AddUserButton;