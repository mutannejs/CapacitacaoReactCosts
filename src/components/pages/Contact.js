import { useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import TextArea from '../form/TextArea';
import SubmitButton from '../form/SubmitButton';

import Message from '../layout/Message';

import styles from './Contact.module.css';

function Contact() {

    const [message, setMessage] = useState();
    const [type, setType] = useState();
    const types = [
        {id: 'Opinião', name:'Opinião'},
        {id: 'Reclamação', name: 'Reclamação'}
    ];
    const [contact, setContact] = useState({name: '', type: types[0].id, msg: ''});

    function changeText(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    function changeType(e) {
        setContact({ ...contact, type: e.target.value});
    }

    function submit(e) {
        e.preventDefault();
        setMessage('');
        fetch("http://localhost:5000/contacts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then((resp) => resp.json())
            .then(() => {
                setContact({name: '', type: types[0].id, msg: ''});
                setMessage('Mensagem enviada!');
                setType('success');
            })
            .catch((err) => {
                console.log(err);
                setMessage('Mensagem não enviada!');
                setType('error');
            });
    }

    return (
        <div className={styles.contact_container}>
            <Message msg={message} type={type} />
            <h1>Contato</h1>
            <p>Envie uma mensagem para opinar, reclamar ou elogiar a aplicação. Sinta-se a vontade para sugerir novas funcionalidades.</p>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type='text'
                    name='name'
                    text='Informe seu nome'
                    id='name'
                    placeholder='Digite seu nome completo'
                    handleOnChange={changeText}
                    value={contact.name ? contact.name : ''}
                    isRequired={true}
                />
                <Select
                    text='Qual o tema da mensagem'
                    name='types'
                    options={types}
                    handleOnChange={changeType}
                    isRequired={true}
                    value={contact.type}
                />
                <TextArea
                    name='msg'
                    text='Mensagem'
                    placeholder='Escreva sua mensagem aqui'
                    handleOnChange={changeText}
                    value={contact.msg ? contact.msg : ''}
                    maxLenght='1000'
                    rows='5'
                />
                <SubmitButton onClick={submit} text='Enviar' />
            </form>
        </div>
    )
}

export default Contact;