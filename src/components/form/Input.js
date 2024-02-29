import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnChange, value, isRequired }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                {text}:
            </label>
            { isRequired ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    onChange={handleOnChange}
                    value={value}
                    required
                />) : (
                    <input
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    onChange={handleOnChange}
                    value={value}
                />
            )}
        </div>
    )
}

export default Input;