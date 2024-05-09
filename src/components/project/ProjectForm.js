import { useEffect, useState } from 'react'

import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './ProjectForm.module.css'

function ProjectForm ({btnText}){

    const [categories, setCategories] = useState ([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])

    return(
        <form className={styles.form}>

            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento do projeto"/>
 
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm