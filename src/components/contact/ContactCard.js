import { BsFillTrashFill } from "react-icons/bs";

import styles from './ContactCard.module.css'

function ContactCard({ contact, handleRemove }) {

    function removeContact() {
        handleRemove(contact.id);
    }

    return (
        <div className={`${styles.contact_card} ${styles[contact.type]}`}>
            <p>
                <span>Nome do usuário: </span>{contact.name}
            </p>
            <p>
                <span>Texto da mensagem: </span>{contact.msg}
            </p>
            <div className={styles.card_actions}>
                <button onClick={removeContact}>
                    <BsFillTrashFill />
                    Remover
                </button>
            </div>
        </div>
    )
}

export default ContactCard;