import { useState } from 'react';
import { BsCaretRightFill } from "react-icons/bs";

import styles from './Contacts.module.css';
import ContactCard from '../contact/ContactCard';

function Contacts({ contacts, setContacts, setMessage, setType }) {

    const [styleIcon, setStyleIcon] = useState(`${styles.icon}`);
    const [showContacts, setShowContacts] = useState(false);

    function toogleShowContacts() {
        if (showContacts)
            setStyleIcon(`${styles.icon} ${styles.rotateRight}`);
        else
            setStyleIcon(`${styles.icon} ${styles.rotateDown}`);
        setShowContacts(!showContacts);
    }

    function removeContact(id) {
        setMessage('');
        fetch(`http://localhost:5000/contacts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMessage('Contato excluído!');
                setType('success');
                setContacts(contacts.filter((contact) => contact.id !== data.id));
            })
            .catch((err) => {
                setMessage('Não foi possível excluir o contato!');
                setType('error');
                console.log(err)
            });
    }

    return (
        <>
            <div className={styles.show_contacts} onClick={toogleShowContacts}>
                <div>
                    <span>{!showContacts ? 'Exibir' : 'Esconder'} </span>
                    suas mensagens
                </div>
                <span className={styleIcon}>
                    <BsCaretRightFill />
                </span>
            </div>
            <div>
                { showContacts &&
                    contacts.map( (contact) => (
                        <ContactCard key={contact.id} contact={contact} handleRemove={removeContact} />
                    ))
                }
            </div>
        </>
    )
}

export default Contacts;