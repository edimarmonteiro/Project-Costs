import styles from './Select.module.css'

function Select({text, name, option, handleOnChange, value}){
    /*{option.map((option)==[Para o js mapea(procura) a "option"] => (
        <option value={option.id}== [O ID(Será o valor fixo)] 
        key={option.id}== [Que cada ID deve ser unico]>
            {option.name}== [Para mostrar o nome da option do usuário]
        </option>
    ))}*/
    
    return (
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <select
            /*Para eu pode colocar as mesma configuração do html
            mas porem trabalhando com props emvez de input, no outro componente */
            name={name} id={name}
            >
                <option>Selecione uma opção</option>
                {option.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select