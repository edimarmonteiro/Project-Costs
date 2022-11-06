import styles from './Input.module.css'

/*type:
 text: Texto da Label
 name: Para o nome do input
 placeholder: Para o texto de ajuda do input
 handleOnChange: Para manosear os dados do input
 value: Para colocar um valor ficxo no input
 */
function Input({type, text, name, placeholder, handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
            /*Para eu pode colocar as mesma configuração do html
            mas porem trabalhando com props emvez de input, no outro componente */
            type={type} 
            name={name} 
            id={name}
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            />
        </div>

    )
}

export default Input