import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './ProjectForm.module.css'

function ProjectForm ({btnText}){
    return(
        <form className={styles.form}>

            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento do projeto"/>
 
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm