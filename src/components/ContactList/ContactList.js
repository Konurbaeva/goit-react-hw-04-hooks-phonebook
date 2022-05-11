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

export default ContactList;