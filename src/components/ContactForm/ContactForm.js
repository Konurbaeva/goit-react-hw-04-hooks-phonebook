import PropTypes from 'prop-types';

function ContactForm({ handleSubmit, name, handleChange, number, addContact }) {
    return (
        <form onSubmit={handleSubmit}>
            Name
            <input
                value={name}
                onChange={handleChange}
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
                onChange={handleChange}
                type="tel"
                name="number"
                placeholder="Enter phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button type="button" onClick={addContact}
                style={
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
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    number: PropTypes.string.isRequired,
    addContact: PropTypes.func.isRequired
};

export default ContactForm;