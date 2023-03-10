import { useDispatch } from 'react-redux';
import { setFilterContacts } from '../../redux/filtersSlice';

import styles from './Filter.module.scss';

export default function Filter() {
  const dispatch = useDispatch();

    const handlerFilter = e => {
      dispatch(setFilterContacts(e.target.value));
    };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={styles.input}
        onChange={handlerFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};