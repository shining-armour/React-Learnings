import "../css/App.css";
import { useState, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import ListContacts from "./ListContacts";
import * as ContactsAPI from"../utils/ContactsAPI"
import AddContact from "./AddContact";

const App = () => {

  let navigate = useNavigate();

  const removeContact = (contactToBeRemoved) => {
    // removes contact from API
    ContactsAPI.remove(contactToBeRemoved)

    // removes contact from UI
    setContacts(contacts.filter((contact) => contact.id !== contactToBeRemoved.id))
  }

  // props should be avoided in useState 
  const [contacts, setContacts] = useState([])

  const addContact = (contactToBeAdded) => {

    const add = async() => {
      const result = await ContactsAPI.create(contactToBeAdded) // object with id is returned as result.
      console.log("Result :: " + JSON.stringify(result))  
      setContacts([...contacts, result]) // OR setContacts(contacts.concat(result))
      console.log(contacts)
    }
    add()
    // navigate back to ListContacts after adding contact
    navigate("/")
    // Don't do this - object with id is needed for list item.
    // ContactsAPI.create(contactToBeAdded)
    // setContacts([...contacts, contactToBeAdded])
  }



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
    <Routes>
      <Route exact path="/" element={<ListContacts contactsList={contacts} onDeleteContact={removeContact} />}/>
      <Route path="/add" element={<AddContact onAddContact={addContact}/>}/>
    </Routes>
  );

};

export default App;
