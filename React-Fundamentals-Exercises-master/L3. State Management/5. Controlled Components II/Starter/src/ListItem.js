import PropTypes from "prop-types";

const ListItem = ({value}) => {
    return <li>{value}</li>
}

ListItem.propTypes = {
    value: PropTypes.string.isRequired
}

export default ListItem;