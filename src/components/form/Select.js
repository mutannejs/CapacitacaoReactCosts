import styles from './Select.module.css';

function Select({ text, name, options, handleOnChange, value, isRequired }) {

    function content() {
         return (
            <>
                <option selected disabled value=''>Selecione uma opção</option>
                { options.map( (option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option> ) )
                }
            </>
        )
    }

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                {text}:
            </label>
            { isRequired ? (
                <select
                    name={name}
                    id={name}
                    onChange={handleOnChange}
                    value={value || ''}
                    required
                >
                    {content()}
                </select>) : (
                <select
                    name={name}
                    id={name}
                    onChange={handleOnChange}
                    value={value || ''}
                >
                    {content()}
                </select>
            )}
        </div>
    )
}

export default Select;