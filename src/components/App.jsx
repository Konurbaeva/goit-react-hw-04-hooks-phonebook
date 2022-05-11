import {Component} from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export class App extends Component {
  state = {
   contacts: [],
   name: '',
   number: '',
   filter: ''
  }

  addContact = (e) => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

/*     filter = query => {
      console.log('query: ' + JSON.stringify(query));
      this.setState({ filter: query });
  };
 */
  handleSearch = e => {

   let lowerCase = e.target.value.toLowerCase();
   this.setState({filter: lowerCase});
   console.log('QUERY: ' + JSON.stringify(lowerCase));
  }




  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.currentTarget.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
   

    form.reset();
  };

  

render(){
  const { contacts, name, number, filter } = this.state;
  const borderStyle = {
    padding: '10px',
    border: '1px solid black',
    borderRadius:'5px',
    width:'320px'
};

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
     <ContactForm handleSubmit={this.handleSubmit} name={name} handleChange={this.handleChange}
     number={number} addContact={this.addContact}/>
      </div>

      <input
      value={filter}
      onChange={this.handleSearch}
      placeholder="Search ..."
      type="text"
      name="search"
/>
{this.state.filter}

      <div className="Contacts">Contacts</div>
   <ContactList contacts={contacts} deleteContact={this.deleteContact}/>
    </div> 
  );
 }
};