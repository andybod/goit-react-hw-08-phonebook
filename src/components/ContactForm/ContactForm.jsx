import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const names = contacts.map(contact => contact.name);
    if (names.includes(form.elements.name.value)) {
      alert(`${form.elements.name.value} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Box className={css.form} component="form" onSubmit={handleSubmit}>
        <TextField
          className={css.label}
          label="Name"
          id="inputName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          className={css.label}
          label="Number"
          id="inputNumber"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Box>
    </>
  );
};
<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <div>
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Hello World"
    />
    <TextField
      disabled
      id="outlined-disabled"
      label="Disabled"
      defaultValue="Hello World"
    />
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    />
    <TextField
      id="outlined-read-only-input"
      label="Read Only"
      defaultValue="Hello World"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
    <TextField id="outlined-search" label="Search field" type="search" />
    <TextField
      id="outlined-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
    />
  </div>
</Box>;
