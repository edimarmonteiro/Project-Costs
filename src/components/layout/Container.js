import styles from './Container.module.css'

function Container(props){
    return(
    /*.container== Informando que todo o conteudo ira receber esse style */
    //.customClass== Apenas os definidoa com essa Class irão receber esse style
<div className={`${styles.container} ${styles[props.customClass]}`}> {props.children}</div>
    )
}

export default Container