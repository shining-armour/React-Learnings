import "../css/App.css";
import { useState, useEffect} from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from"../utils/ContactsAPI"
import AddContact from "./AddContact";

const App = () => {

  const removeContact = (contactToBeRemoved) => {
    // removes contact from API
    ContactsAPI.remove(contactToBeRemoved)

    // removes contact from UI
    setContacts(contacts.filter((contact) => contact.id !== contactToBeRemoved.id))
  }

  // props should be avoided in useState 
  const [contacts, setContacts] = useState([])
  const [screen, setScreen] = useState("list")



  useEffect(() => {
    let mounted=true
    const getContacts = async() => {
      const result = await ContactsAPI.getAll()
      setContacts(result)
    }
    if(mounted) getContacts()

    return () => {
      mounted=false;
    }
  }, [])

  return (
    // short circuit evaluation
    <div>
      {screen==="list" && <ListContacts contactsList={contacts} onDeleteContact={removeContact} onAddContact={() => setScreen("add")}/>}
      {screen==="add" && <AddContact/>}
    </div>
  );

};

export default App;
