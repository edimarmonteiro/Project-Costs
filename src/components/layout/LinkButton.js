import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

/*Colocar duas propriedade
to == Para dizer para onde vai o link que o usuario clicar
text == Para mudar o texto basiado onde o usuário estar*/
function LinkButton({to, text}){
    /*to e text == São dinamicos */
    return(
        <Link className={styles.btn}  to={to}>
            {text}
        </Link>
    )
}

export default LinkButton