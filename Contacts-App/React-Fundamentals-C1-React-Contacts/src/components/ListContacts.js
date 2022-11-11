const ListContacts = ({ contactsList, onDeleteContact }) => {
    
    console.log(contactsList);

    return <ol className="contact-list">
            {
                contactsList.map((contact) => 
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
};

export default ListContacts;