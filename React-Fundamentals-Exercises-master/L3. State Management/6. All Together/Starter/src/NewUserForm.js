import AddUserButton from "./AddUserButton";
import InputField from "./InputField";
import { useState } from "react";
import PropTypes from "prop-types"

const NewUserForm = ({onAddNewUser}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")

    const updateFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const updateLastName = (event) => {
        setLastName(event.target.value)
    }

    const updateUserName = (event) => {
        setUserName(event.target.value)
    }

    const onFormSubmission = (event) => {
        event.preventDefault(); 
        const newUserMap = new Map([["firstName",firstName],["lastName",lastName],["userName",userName],["score",0]]);
        onAddNewUser(newUserMap);
    }

    const areInputFieldsEmpty = () => firstName === "" || lastName === "" || userName === "";

    return <form onSubmit={onFormSubmission}>
        <InputField inputName={"first-name"} inputValue={firstName} placeholderValue={"First Name"} onInputChangeFunc={updateFirstName}/>
        <InputField inputName={"last-name"} inputValue={lastName} placeholderValue={"Last Name"} onInputChangeFunc={updateLastName}/>
        <InputField inputName={"user-name"} inputValue={userName} placeholderValue={"User Name"} onInputChangeFunc={updateUserName}/>
        <AddUserButton areInputFieldsEmpty={areInputFieldsEmpty}/>
    </form>
}

NewUserForm.propTypes = {
    onAddNewUser: PropTypes.func.isRequired
}



export default NewUserForm;