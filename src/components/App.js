import React, { useState, useEffect } from 'react';
import { uuid } from "uuidv4";
import './App.css';
import Header from './Header.js';
import AddContact from './AddContact.js';
import ContactList from './ContactList';

//useEffect renders the component when there is some change
function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "Sujata",
  //     "email": "sujata@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     "name": "abcd",
  //     "email": "abcd@gmail.com"
  //   }
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  //create state
  const [contacts, setContacts] = useState([]);//initialize empty array
  //addContactHandler is transfer data from child to parent function as prop, props is used to transfer data from parent to child
  const addContactHandler = (contact) => {
    //console.log(contact)
    setContacts(...contacts, { id: uuid(), ...contact });
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
