import React, { useState } from "react";
import "./contactList.css"

const ContactList = ({ contacts, editContact, deleteContact }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (index) => {
    const name = prompt("Novo nome:", contacts[index].name);
    const phone = prompt("Novo telefone:", contacts[index].phone);
    const email = prompt("Novo email:", contacts[index].email);
    if (name && phone && email) {
      editContact(index, { name, phone, email });
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.phone.includes(searchTerm)
  );

  return (
    <div>
      <div className="searchTel">
        <input
          type="text"
          placeholder="Pesquisar por telefone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Editar Lista</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <div className="actions">
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => deleteContact(index)}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
