import styles from './ContactForm.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
    const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  
    function handlerSubmit(evt) {
      evt.preventDefault();
      const form = evt.target;
      const name = form.name.value;
      const contact = form.number.value;

      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return alert(`${name} is alredy in contacts.`);
      }

      dispatch(addContact(name, contact));

     alert(`${name} is added to the contact list!`);

      form.reset();
    }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          className={styles.input}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <div className={styles.button__wrapper}>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </div>
    </form>
  );
}