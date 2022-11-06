import {useEffect, useState} from 'react'


import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){

    /*As informações que vir da minha API 
    ficarar dentro do Arays do useState([]) */
    const [categories, setCategories] = useState([])
    
    //useEffect == Para ser wxecutado apenas uma vez
    useEffect(() => {
        //Pegando as categoria do banco de dados
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        }
        })//Trabalhando com promises(Promessas)
        //Quando a promessa der certo
            //A resp(resposta) do usuário ira se transformar em Json
        .then((resp) => resp.json())
        //setCategoria é igual a dados, ele está recebendo os dados do usuárioa
        .then((data) => {
            setCategories(data)
        })
        //Quamdo a promessa der errada
        .catch((err) => console.log(err))

    }, [])

    return(
        <form className={styles.form}>
            
            <Input 
            type="text" 
            texto="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"/>

            <Input 
            type="nimber" 
            texto="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o orçamento total"/>
                
            
            
            <Select 
            name="category_id" 
            text="Selecione a categoria"
            /*As categorias para o usuário escolher serão mostradas aqui 
            atravez da categories que está recebendo essa informação do usuario. 
            E permitindo o usuário trocar as informações atravez dp setCategpries*/
            option={categories}
            />
            
            
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default ProjectForm