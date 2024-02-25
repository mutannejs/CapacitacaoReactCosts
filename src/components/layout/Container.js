import styles from './Container.module.css';

function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {/* Indica que existe elementos filhos encapsulados nesse componente, caso não seja usado, os componentes filhos não serão executados */}
            {props.children}
        </div>
    )
}

export default Container;