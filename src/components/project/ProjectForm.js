import { useEffect, useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategries] = useState([]);
    const [project, setProject] = useState(projectData || {});

    // renderiza uma vez apenas o retorno de fetch, ele sempre trabalha sobre algum elemento, como não há nenhum elemento com que ele trabalhará foi passado um array vazio, porém, se executado corretamente as categories são preenchidas com as categorias dos projetos armazenadas no JSON
    useEffect( () => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategries(data)
            })
            .catch((err) => console.log(err))
    }, [] )

    // a função submit quando chamada chama o método passado em handleSubmit com o argumento sendo o projeto criado
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    // substitui o valor de um atributo específico de project com o valor do input
    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        // Ao ser submetido, chama o método submit, que por sua vez chama o método passado em handleSubmit
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                name="name"
                text="Nome do projeto"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
                isRequired={true}
            />
            <Input
                type="number"
                name="budget"
                text="Orçamento do projeto"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
                isRequired={true}
            />            
            <Select
                name="category_id"
                options={categories}
                text="Selecione a categoria"
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
                isRequired={true}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;