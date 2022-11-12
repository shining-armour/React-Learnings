import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import DeleteButton from "./DeleteButton";
import AddForm from "./AddForm";

const App = () => {

  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddForm onAddItem={handleAddItem}/>
      <DeleteButton onDeleteItem={handleDeleteLastItem} noItemsFoundFunc={noItemsFound} />
      <ShoppingList shoppingList={items}/>
    </div>
  );
};

export default App;
