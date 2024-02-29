import { useLocation } from 'react-router-dom';

import styles from './Home.module.css';
import savings from '../../img/savings.svg';

import LinkButton from '../layout/LinkButton';
import Message from '../layout/Message';

function Home({ logado }) {

    let message = '';
    let type = '';

    const location = useLocation();
    if (location.state) {
        console.log(location);
        message = location.state.msg;
        type = location.state.type;
    }

    return (
        <section className={styles.home_container}>
            { message && logado && <Message msg={message} type={type} />}
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;