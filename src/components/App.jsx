import {Component} from "react";
import { nanoid } from 'nanoid'

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
      <input
      value={filter}
      onChange={this.handleSearch}
      placeholder="Search ..."
      type="text"
      name="search"
/>

<div style={borderStyle}>
      <form onSubmit={this.handleSubmit}>
        Name
      <input
      value={name}
      onChange={this.handleChange}
      placeholder="Enter name"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
Number
<input
  value={number}
  onChange={this.handleChange}
  type="tel"
  name="number"
  placeholder="Enter phone number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

 <button type="button" onClick={this.addContact}
 style = { 
{
  border: 'none',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inlineBlock',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer'
}
}
 
 >Add contact</button>
      </form>
      </div>

      <div className="Contacts">Contacts</div>
     {contacts.map(({name, number, id}) =>{
       return <ul key={id}>
         <li>{name} {number}</li>
         <button type="button" onClick={() => this.deleteContact(id)}>Delete</button>      
         </ul>
     })}
    </div>
  );
}
};