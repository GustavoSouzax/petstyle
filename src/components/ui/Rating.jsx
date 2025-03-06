import propTypes from 'prop-types'
import { FaStar, FaRegStar } from 'react-icons/fa'
import styles from './Rating.module.css'

/**
 * @param {Object} props
 * @param {number} props.rating
 * @param {boolean} props.isReadOnly
 * @param {number} props.count
 * @returns {JSX.Element}
 * */

function Rating({ rating, showCount = false, count = 0 }) {
    const stars = Array(5)
        .fill(0)
        .map((_, index) => (index < rating ? <FaStar key={index} className={styles.star} /> : <FaRegStar key={index} className={styles.star} />)
        )

    return (
        <div className={styles.ratingContainer}>
            <div className={styles.stars}>{stars}</div>
            {showCount && <span className={styles.ratingCount}>({count} avaliações)</span>}
        </div>
    )
}

Rating.propTypes = {
    rating: propTypes.number.isRequired,
    showCount: propTypes.bool,
    count: propTypes.number,
}

export default Rating