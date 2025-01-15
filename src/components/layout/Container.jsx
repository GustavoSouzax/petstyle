import PropTypes from 'prop-types'
import styles from './Container.module.css'

function Container (props) {
    return (
        <main className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </main>
    )
}

Container.propTypes = {
    customClass: PropTypes.string,
    children: PropTypes.node
}

export default Container