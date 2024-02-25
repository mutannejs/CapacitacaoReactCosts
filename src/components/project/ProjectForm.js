import { useEffect, useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {

    const [categories, setCategries] = useState([]);

    // renderiza uma vez apenas o retorno de fetch, seu valor inicial é uma lista vazia (as options vazias)
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

    return (
        <form className={styles.form}>
            <Input
                type="text"
                name="name"
                text="Nome do projeto"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                name="budget"
                text="Orçamento do projeto"
                placeholder="Insira o orçamento total"
            />            
            <Select
                name="categoty_id"
                options={categories}
                text="Selecione a categoria"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;