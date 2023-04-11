import React from "react";
import CardContact from "./ContactCard.js";
const ContactList = (props) => {
    // console.log(props);
    //rendering list
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (//this is repeating piece of code so move it to other component
            <CardContact contact={contact} clickHandler={deleteContactHandler} />//jsx
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;