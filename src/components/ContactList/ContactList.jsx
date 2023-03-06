import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import styles from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filters.filter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.target.id));
    // toast.info(`This contact is delited from your phonebook!`);
    alert(`This contact is delited from your phonebook!`);
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <ul className={styles.list}>
      {visibilityContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <span className={styles.name}>{contact.name}: </span>
          <a href={`tel:${contact.number}`} className={styles.number}>
            {contact.number}
          </a>
          <button
            className={styles.button}
            type="button"
            id={contact.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}