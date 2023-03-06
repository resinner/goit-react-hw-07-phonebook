import React from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import styles from './App.module.scss';

document.title = 'Phonebook_Redux';


export default function App() {

  return (
    <Container>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm/>
      <h2 className={styles.title}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Container>
  );
}