import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

// import useLocalStorage from "../hooks/useLocalStorage";

export function App(){

  // const [name, setName] = useLocalStorage('name', '');
  // const [number, setNumber] = useLocalStorage('number', '');

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] =useState('');
  // const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [contacts, setContacts] = useState(  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  ]);

  const addContact = (e) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };

    if (contacts.find(contact => contact.name === name))
    return alert(`${name} is already in contacts`);
  
    setContacts([...contacts, newContact]);
  }

  const deleteContact = contactId => {
    // setContacts(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}));

    setContacts(contacts.filter(contact => contact.id !== contactId));
  };


  const handleSearch = e => {
   let lowerCase = e.target.value.toLowerCase();
   setFilter(lowerCase);
  }

  const handleChange = e => {

   const {name, value} =  e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if(parsedContacts){
      setContacts(parsedContacts);
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(name))
  }, [name])

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(number))
  }, [number])
  
  const borderStyle = {
    padding: '10px',
    border: '1px solid black',
    borderRadius:'5px',
    width:'320px'
};

// const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

// const filteredContacts = contacts.filter((name) => name.includes(filter))

console.log(JSON.stringify(contacts))
console.log(JSON.stringify(contacts.name))


  return (
    <div
      style={{
        height: '30vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
<div style={borderStyle}>
     <ContactForm handleSubmit={handleSubmit} name={name} handleChange={handleChange}
     number={number} addContact={addContact}/>
      </div>
      <div className="Contacts">Contacts</div>
      <Filter filter={filter} handleSearch={handleSearch}/>
    <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div> 
  );
};