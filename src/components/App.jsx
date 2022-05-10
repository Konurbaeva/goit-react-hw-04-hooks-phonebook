
import {Component} from "react";
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    name: 'Madina'
  }

  addContact = () => {
    const contact = {
      id: nanoid(),
      name: 'Madina'
    };

    console.log('contact: ' + JSON.stringify(contact))

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
   

    form.reset();
  };

render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <form onSubmit={this.handleSubmit}>
        Name
      <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

 <button type="button" onClick={this.addContact}>Add contact</button>
      </form>
    </div>
  );
}
};