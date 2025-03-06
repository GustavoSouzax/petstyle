import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button  ({ children, onClick, customClass = 'primary', type = 'button', disabled = false }) {
    return (
        <button
            className={`${styles.button} ${styles[customClass]}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    customClass: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
}

export default Button