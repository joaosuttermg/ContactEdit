import React, { useState, useEffect } from "react";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";


const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = contacts.map((contact, i) =>
      i === index ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <i class="ph ph-address-book"></i>
      <h1>Gerenciador de Contatos</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
