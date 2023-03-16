import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/selectors';

import styles from './ContactForm.module.scss';

export default function ContactForm() {
    const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
    function handlerSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const phone = form.number.value;

      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return toast.warn(`${name} is alredy in contacts.`);
      }

      dispatch(addContact({ name, phone }));

   toast.success(`${name} is added to the contact list!`);

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
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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