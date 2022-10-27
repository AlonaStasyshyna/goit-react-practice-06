import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContact } from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { filterContacts } from 'redux/filter/filter-slice';

export const App = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (findSameName(newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContact(newContact));
  };

  const findSameName = contactName =>
    contacts.find(contact => contact.name === contactName);

  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleChange={handleChange} />

      <h2>Contacts</h2>
      <Filter startFilter={filter} handleFilter={handleFilter} />
      <ContactList contacts={filterContactsList} handleDelete={handleDelete} />
    </div>
  );
};
