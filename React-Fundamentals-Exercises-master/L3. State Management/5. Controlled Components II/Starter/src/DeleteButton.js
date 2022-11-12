import PropTypes from "prop-types";

const DeleteButton = ({onDeleteItem, noItemsFoundFunc}) => {

    return <button onClick={() => onDeleteItem()} disabled={noItemsFoundFunc()}>
    Delete Last Item
    </button>
}

DeleteButton.propTypes = {
    onDeleteItem: PropTypes.func.isRequired,
    noItemsFoundFunc: PropTypes.func.isRequired
}

export default DeleteButton;