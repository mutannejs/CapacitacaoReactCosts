import  { Link } from 'react-router-dom';
import { useContext } from 'react';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

import { LoginContext } from '../context/LoginContext';

function Navbar() {

    const { username, setUsername } = useContext(LoginContext);

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        { username ? (
                                <button className={styles.sair} onClick={() => setUsername('')} >Sair</button>
                            ) : (
                                <span className={styles.login}>
                                    <Link to="/login">Login</Link>
                                </span>
                            )
                        }
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;