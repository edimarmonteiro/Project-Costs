import styles from './Home.module.css'
import homeimg from '../../img/homeimg.jpg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        /*LinkButton to="/newproject"== Quando o usuário 
        clicar no link sera levado para a pasta newproject */
        //Trabalha em sessoes
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Project-Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={homeimg} alt='Project-costs'/>
         
        </section>
    )
}

export default Home