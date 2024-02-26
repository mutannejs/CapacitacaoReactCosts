import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        // initialize cost and services
        project.cost = 0; // custo
        project.services = []; // servicos

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project) // o corpo da requisição é o projeto convertido em string
        })
        .then((resp) => {resp.json()})
        .then((data) => {
            const state = {message: "Projeto criado com sucesso!"};
            navigate('/projects', {state})
        })
        .catch((err) => console.log(err));

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject;