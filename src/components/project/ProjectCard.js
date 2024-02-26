import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ project }) {
    return (
        <div className={styles.project_card}>
            <h4>{project.name}</h4>
            <p>
                <span>Orçamento:</span> R${project.budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[project.category.name.toLowerCase()]}`}></span> {project.category.name}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar                    
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;