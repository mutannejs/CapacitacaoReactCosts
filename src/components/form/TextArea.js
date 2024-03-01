import styles from './TextArea.module.css';

function TextArea({ name, text, placeholder, handleOnChange, maxLenght, rows, cols, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <textarea
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                maxLength={maxLenght}
                rows={rows}
                cols={cols}
                value={value}
                required
            />
        </div>
    )
}

export default TextArea;