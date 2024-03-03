import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import Message from '../layout/Message';
import { LoginContext } from './../context/LoginContext';

import styles from './Login.module.css';

function Login() {

    const { setUsername } = useContext(LoginContext);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState();
    const [type, setType] = useState();

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        if (user === password) {
            setUsername(user);
            const state = {msg: `Login efetuado com o usuário ${user}`, type: 'success'};
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
                    handleOnChange={ (e) => setUser(e.target.value) }
                    isRequired={true}
                />
                <Input
                    type='password'
                    text='Senha'
                    placeholder='Informe sua senha'
                    id='pass'
                    name='pass'
                    handleOnChange={ (e) => setPassword(e.target.value) }
                />
                <SubmitButton text='Logar' />
            </form>
        </div>
    )
}

export default Login;