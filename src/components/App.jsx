
import {Component} from "react";
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
   contacts: [
   
  ],
   name: ''
  }

  addContact = (e) => {
    const contact = {
      id: nanoid(),
      name: this.state.name
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
   

    form.reset();
  };

render(){
  const { contacts } = this.state;

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
      <form onSubmit={this.handleSubmit}>
        Name
      <input
      value={this.state.name}
      onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

 <button type="button" onClick={this.addContact}>Add contact</button>
      </form>
      <div className="Contacts">Contacts</div>
     {contacts.map(({name, id}) =>{
       return <ul key={id}>
         <li>{name}  {id}</li>
         </ul>
     })}
    </div>
  );
}
};