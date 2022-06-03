import { useState } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

import useLocalStorage from "./hooks/useLocalStorage";

export function App(){
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    ],
   name: '',
   number: '',
   filter: ''
  }

  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  const [filter, setFilter] = useLocalStorage('filter', '');
  const [contacts, setContacts] = useLocalStorage('contacts', '');

  const addContact = (e) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number
    };

    if (contacts.find(contact => contact.name === name))
    return alert(`${name} is already in contacts`);
  
    // this.setState(({ contacts }) => ({
    //   contacts: [contact, ...contacts],
    // }));
    setContacts(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  const handleSearch = e => {
   let lowerCase = e.target.value.toLowerCase();
   //this.setState({filter: lowerCase});
   setFilter(lowerCase);
  }

  const handleChange = e => {
    // this.setState({ 
    //   [e.target.name]: e.currentTarget.value
    // });

    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;


      case 'filter':
        setFilter(value);
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

  // componentDidMount(){
  //   const contacts = localStorage.getItem('contacts')
  //   const parsedContacts = JSON.parse(contacts)
  //   if(parsedContacts){
  //     this.setState({contacts: parsedContacts});
  //   }
  // }

  // componentDidUpdate(prevState) {

  //   if(this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  
  
  const borderStyle = {
    padding: '10px',
    border: '1px solid black',
    borderRadius:'5px',
    width:'320px'
};

const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

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




// export class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     ],
//    name: '',
//    number: '',
//    filter: ''
//   }

//   addContact = (e) => {
//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number
//     };

//     if (this.state.contacts.find(contact => contact.name === this.state.name))
//     return alert(`${this.state.name} is already in contacts`);
  
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   }

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   handleSearch = e => {
//    let lowerCase = e.target.value.toLowerCase();
//    this.setState({filter: lowerCase});
//   }

//   handleChange = e => {
//     this.setState({ 
//       [e.target.name]: e.currentTarget.value
//     });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
   

//     form.reset();
//   };

//   componentDidMount(){
//     const contacts = localStorage.getItem('contacts')
//     const parsedContacts = JSON.parse(contacts)
//     if(parsedContacts){
//       this.setState({contacts: parsedContacts});
//     }
//   }

//   componentDidUpdate(prevState) {

//     if(this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
  

// render(){
//   const { contacts, name, number, filter } = this.state;
//   const borderStyle = {
//     padding: '10px',
//     border: '1px solid black',
//     borderRadius:'5px',
//     width:'320px'
// };

// const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

//   return (
//     <div
//       style={{
//         height: '30vh',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 30,
//         color: '#010101'
//       }}
//     >
// <div style={borderStyle}>
//      <ContactForm handleSubmit={this.handleSubmit} name={name} handleChange={this.handleChange}
//      number={number} addContact={this.addContact}/>
//       </div>
//       <div className="Contacts">Contacts</div>
//       <Filter filter={filter} handleSearch={this.handleSearch}/>
//     <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
//     </div> 
//   );
//  }
// };