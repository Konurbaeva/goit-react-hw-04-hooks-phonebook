import {Component} from 'react';
import ContactForm from './ContactForm';

class Phonebook extends Component {
      render() {
    
          return (<>
          <label> Phonebook
          <ContactForm/>
          </label>
          </>)
      }
}

export default Phonebook;