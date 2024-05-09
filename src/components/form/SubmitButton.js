import styles from './SubmitButton.module.css'

function SubmitButton({ type, text, name, placeholder, handleOnChange, value }) {
    return (
      <div>
        <button className={styles.btn}>{text}</button>
      </div>
    )
}

export default SubmitButton
