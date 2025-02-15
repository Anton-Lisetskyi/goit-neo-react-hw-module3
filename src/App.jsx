import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const LOCAL_STORAGE_KEY = "contacts";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!savedContacts) {
      return initialContacts;
    }

    try {
      const parsedContacts = JSON.parse(savedContacts);
      if (!Array.isArray(parsedContacts) || parsedContacts.length === 0) {
        return initialContacts;
      }

      return parsedContacts;
    } catch (error) {
      console.error("Error parsing contacts from localStorage:", error);
      return initialContacts;
    }
  });

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      return updatedContacts;
    });
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== id
      );
      return updatedContacts;
    });

    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
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
