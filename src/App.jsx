import { useState } from "react";
import "./App.css";
import contact from "./Contact/Contact";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(contact);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
