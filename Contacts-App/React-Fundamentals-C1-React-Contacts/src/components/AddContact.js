import {Link} from "react-router-dom" 
import ImageInput from "./ImageInput"
import serializeForm from "form-serialize"
import PropTypes from "prop-types"

const AddContact = ({onAddContact}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const values = serializeForm(e.target, {hash:true})

        onAddContact(values)
    }
    return (<div>
        <Link to={"/"} className="close-create-contact">Close</Link>
        <form className="create-contact-form" onSubmit={handleSubmit}>
            <ImageInput className="create-contact-avatar-input" maxHeight={64} name="avatarURL" />
            <div className="create-contact-details">
                <input name="name" placeholder="Name" type="text"/>
                <input name="handle" placeholder="Handle" type="text"/>
                <button>Add Contact</button>
            </div>
        </form>
        </div>);
}

AddContact.propTypes = {
    onAddContact: PropTypes.func.isRequired
}

export default AddContact;