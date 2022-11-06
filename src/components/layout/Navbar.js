import {Link} from 'react-router-dom'
/*Expostar o Conteiner.js */
import Container from './Container'
//Expecificando qual CSS irei ussar nesse componente
import styles from './Navbar.module.css'
/*Para utilizar a Logo do nosso projeto */
import logo from '../../img/strwyfhur.jpg'
function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container> 
                <Link to='/'>
                    <img className={styles.img_log} src={logo} alt='Strwyfhur' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Novo Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Empresa</Link>
                    </li>                
                </ul>

            </Container>
        </nav>
    )
}
export default Navbar

                /*<Link to='/newproject'>Novo Projeto</Link>*/
