import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const deleteBtn = e => dispatch(deleteContact(e.target.id));
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ListItemText primary={contact.name} secondary={contact.number} />
            <Button id={contact.id} onClick={deleteBtn}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
