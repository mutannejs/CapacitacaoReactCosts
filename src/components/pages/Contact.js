import { useContext, useEffect, useState } from 'react';

import ContactForm from "../contact/ContactForm";
import Contacts from '../contact/Contacts';
import Message from "../layout/Message";

import { LoginContext } from './../context/LoginContext';

import styles from './Contact.module.css';

function Contact() {

    const { username } = useContext(LoginContext);

    const [message, setMessage] = useState();
    const [type, setType] = useState();

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/contacts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setContacts(data.filter((contact) => contact.name === username));
            })
            .catch((err) => console.log(err));
    }, [username]);

    return (
        <>
            <div className={styles.contact_container}>
                { message && <Message msg={message} type={type} /> }
                <h1>Contato</h1>
                <p>Envie uma mensagem para opinar, reclamar ou elogiar a aplicação. Sinta-se a vontade para sugerir novas funcionalidades.</p>
                <ContactForm setMessage={setMessage} setType={setType} />
            </div>
            { username && (
                    <div className={styles.contact_container}>
                        { message && <Message msg={message} type={type} /> }
                        <h1>Mensagens enviadas</h1>
                        <Contacts setContacts={setContacts} contacts={contacts} setMessage={setMessage} setType={setType} />
                    </div>
                ) 
            }
        </>
    )
}

export default Contact;