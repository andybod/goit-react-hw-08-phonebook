import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
