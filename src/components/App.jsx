import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

export function App(){
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  ])

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addContact = (e) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number
    };

    if (contacts.find(contact => contact.name === name))
    return alert(`${name} is already in contacts`);
  

    setContacts(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  }

  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  const handleSearch = e => {
    let lowerCase = e.target.value.toLowerCase();
    setFilter(lowerCase);
   }

  // Check
  const handleChange = e => {
    setContacts({ 
      [e.target.name]: e.currentTarget.value
    });

    setName({ 
      [e.target.name]: e.currentTarget.value
    })

    setNumber({ 
      [e.target.name]: e.currentTarget.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
   
    form.reset();
  };

  useEffect((prevState) => {
    // const contacts = localStorage.getItem('contacts')
    // const parsedContacts = JSON.parse(contacts)

    // if(parsedContacts){
    //   setContacts(parsedContacts);
    // }
    // if(contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
// useEffect((prevState) => {
//   if(contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }
// }, [contacts])

  const borderStyle = {
    padding: '10px',
    border: '1px solid black',
    borderRadius:'5px',
    width:'320px'
};

// const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

const filteredContacts  = setName(name => name.toLowerCase().includes(filter.toLowerCase()))


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
    <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
    </div> 
  );
};