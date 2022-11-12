import PropTypes from "prop-types";
import ListItem from "./ListItem";

const ShoppingList = ({shoppingList}) => {
    const listItems = shoppingList.map((item, index) =>  <ListItem key={index} value={item}/>)
    return <div>
      <p className="items">Items</p>
      <ol className="item-list">{listItems}</ol>
    </div>
}

ShoppingList.propTypes = {
    shoppingList: PropTypes.array.isRequired
}

export default ShoppingList;