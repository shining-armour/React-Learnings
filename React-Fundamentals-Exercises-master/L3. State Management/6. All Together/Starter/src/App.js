import logo from "./logo.svg";
import "./App.css";
import NewUserForm from "./NewUserForm";
import GamesPlayedList from "./GamesPlayedList";
import { useState } from "react";

const App = () => {

  const [userList, setUserList] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  const addNewUserDetails = (userMap) => {
    checkIfUserNameAlreadyExist(userMap.get("userName")) ? updateErrorMsg("UserName already exist. Maybe try with one?") : userAddition(userMap);
  }

  const checkIfUserNameAlreadyExist = (newUserName) => userList.filter((user) => user.get("userName") === newUserName).length > 0;

  const updateErrorMsg = (errorString) => setErrorMsg(errorString)

  const userAddition = (userMap) => {
    setUserList([...userList,userMap]);
    updateErrorMsg(""); // clear error msg when user is added sucessfully
  }

  console.log(userList)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Add User</h2>
      <NewUserForm onAddNewUser={addNewUserDetails}/>
      <p style={{color: "red"}}>{errorMsg}</p>
      <h2>Games Played</h2>
      <GamesPlayedList userList={userList}/>
    </div>
  );
};

export default App;
