import "../css/App.css";
import { useState, useEffect} from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from"../utils/ContactsAPI"

const App = () => {

  const removeContact = (contactToBeRemoved) => {
    // removes contact from API
    ContactsAPI.remove(contactToBeRemoved)

    // removes contact from UI
    setContacts(contacts.filter((contact) => contact.id !== contactToBeRemoved.id))
  }

  // props should be avoided in useState 
  const [contacts, setContacts] = useState([])


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
    <div>
      <ListContacts contactsList={contacts} onDeleteContact={removeContact}/>
    </div>
  );

};

export default App;
