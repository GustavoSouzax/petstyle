import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button  ({ children, onClick, variant = 'primary', type = 'button', disabled = false }) {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
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
    variant: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
}

export default Button