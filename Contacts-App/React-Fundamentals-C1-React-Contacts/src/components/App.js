import "../css/App.css";
import { useState } from "react";
import ListContacts from "./ListContacts";

const App = () => {

  const removeContact = (contactToBeRemoved) => {
    setContacts(contacts.filter((contact) => contact.id !== contactToBeRemoved.id))
  }

  // props should be avoided in useState 
  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ])

  return (
    <div>
      <ListContacts contactsList={contacts} onDeleteContact={removeContact}/>
    </div>
  );

};

export default App;
