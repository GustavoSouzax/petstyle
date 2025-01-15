import PropTypes from 'prop-types'
import styles from './Input.module.css'

function Input ({ type, name, value, handleInputChange, customClass }) {
    return (
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleInputChange}
            className={`${styles.input} ${styles[customClass]}`}
        />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    customClass: PropTypes.string,
}

export default Input