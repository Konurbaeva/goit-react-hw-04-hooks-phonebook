import PropTypes from 'prop-types';

function ContactList({ contacts, deleteContact }) {
    return (
        contacts.map(({ name, number, id }) => {
            return <ul key={id}>
                <li>{name} {number}</li>
                <button type="button" onClick={() => deleteContact(id)}>Delete</button>
            </ul>
        })
    );
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    deleteContact: PropTypes.func.isRequired,
};


export default ContactList;