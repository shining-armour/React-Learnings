import { useState } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ListContacts = ({ contactsList, onDeleteContact }) => {
    
    console.log(contactsList);

    const updateSearchQuery = (newQuery) => {
        setSearchQuery(newQuery.trim())
    }

    // react re-renders ListContacts components (input field here using Reconcialiation process) every time query is updated using onChange
    const [searchQuery, setSearchQuery] = useState("")  

    const contactListBasedOnQuery = searchQuery==="" ? contactsList : contactsList.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

    console.log("query:" + searchQuery);

    const resetSearchQuery = () => {
        setSearchQuery("")
    }

    return <div className='list-contacts'>
        <div className="showing-contacts">
        <span>{`showing ${contactListBasedOnQuery.length} of ${contactsList.length}`}</span>
        <button onClick={resetSearchQuery}>show All</button>
        </div>

        <form className='list-contacts-top'>
        <input className='search-contacts' type='text' placeholder='Search Contacts' value={searchQuery} onChange={(event) => updateSearchQuery(event.target.value)}/>
        {/* <a href='#create' onClick={onAddContact} className="add-contact">Add Contact</a> */}
        <Link to={"/add"} className="add-contact">Add Contact</Link>
        </form> 

        <ol className="contact-list">
            {
                contactListBasedOnQuery.map((contact) => 
                <li key={contact.id} className="contact-list-item">
                    <div className="contact-avatar" style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button className="contact-remove" onClick={()=>onDeleteContact(contact)}></button>
                </li>)
            }
        </ol>
    </div>
};

ListContacts.propTypes = {
    contactsList: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ListContacts;

