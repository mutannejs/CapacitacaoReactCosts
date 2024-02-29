import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from './Login.module.css';
import Message from '../layout/Message';
import { useNavigate } from 'react-router-dom';

function Login({ setLogado }) {

    const usernameAdm = 'admin';
    const passAdm = 'costs';

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const [message, setMessage] = useState();
    const [type, setType] = useState();

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        if (username === usernameAdm && pass === passAdm) {
            setLogado(true);
            const state = {msg: `Login efetuado com o usuário ${username}`, type: 'success'};
            navigate('/', {state});
        } else {
            setMessage(`Não foi possível se logar com o usuário e senha informado!`);
            setType('error');
            setTimeout( () => {setMessage('')}, 3000);
        }
    }

    return (
        <div className={styles.login_container}>
            { message && <Message type={type} msg={message} /> }
            <h1>Login</h1>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type='text'
                    text='Usuário'
                    placeholder='Informe seu username'
                    id='username'
                    name='username'
                    handleOnChange={ (e) => setUsername(e.target.value) }
                />
                <Input
                    type='password'
                    text='Senha'
                    placeholder='Informe sua senha'
                    id='pass'
                    name='pass'
                    handleOnChange={ (e) => setPass(e.target.value) }
                />
                <SubmitButton text='Logar' />
            </form>
        </div>
    )
}

export default Login;