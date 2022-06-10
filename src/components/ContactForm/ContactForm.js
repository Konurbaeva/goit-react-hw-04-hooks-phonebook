import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from "react";


export default function ContactForm({ onFormSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = e => {
        e.preventDefault();

        onFormSubmit({ name, number });
        reset();
    };

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(name))
    }, [name])

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(number))
    }, [number])

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeNumber = e => {
        setNumber(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            Name
            <Input
                value={name}
                onChange={handleChangeName}
                placeholder="Enter name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            Number
            <Input
                value={number}
                onChange={handleChangeNumber}
                type="tel"
                name="number"
                placeholder="Enter phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <Button type="submit">Add contact</Button>
        </form>
    );
}

ContactForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: pink;
  border: none;
  border-radius: 3px;
`;


const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;