import { useState, useEffect } from 'react';
//Components
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
//pnotify
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);

  //-------------------запросы к удаленным ресурсам
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  //---------------------запись в localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //  ----------------------------повтор контакта
  const forSubmitHandlerRepeatContact = text => {
    const someContact = contacts.some(
      contact => contact.name.toLowerCase() === text.name.toLowerCase(),
    );
    if (someContact) {
      alert(`${text.name} is already in contacts`);
      return;
    }
  };

  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm submit={forSubmitHandlerRepeatContact} />

      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
