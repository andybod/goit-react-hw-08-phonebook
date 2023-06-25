import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(setFilter(e.target.value));
  return (
    <>
      <TextField
        label="Find contacts by name"
        id="findName"
        type="text"
        name="filter"
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
