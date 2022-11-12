import PropTypes from "prop-types"
import AddButton from "./AddButton";
import AddInput from "./AddInput";
import { useState } from "react";

const AddForm = ({onAddItem}) => {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const isInputEmpty = () => value === "";

    //on item addition - change list value and set input value to ""
    const addItem = (event) => {
        event.preventDefault();  // prevents default action of form submit - i.e refreshing page
        onAddItem(value)
        setValue("");
    };

    return <form onSubmit={addItem}>
        <AddInput inputValue={value} handleInputChange={handleChange}/>
        <AddButton isInputEmpty={isInputEmpty}/>
    </form>
}

AddForm.propTypes = {
    onAddItem : PropTypes.func.isRequired
}

export default AddForm;