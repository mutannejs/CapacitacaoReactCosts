import styles from './Select.module.css';

function Select({ text, name, options, handleOnChange, value, isRequired }) {
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
                    <option selected disabled value=''>Selecione uma opção</option>
                    { options.map( (option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option> ) ) }
                </select>) : (
                 <select
                    name={name}
                    id={name}
                    onChange={handleOnChange}
                    value={value || ''}
                >
                    <option selected disabled value=''>Selecione uma opção</option>
                    { options.map( (option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option> ) ) }
                </select>
            )}
        </div>
    )
}

export default Select;