import { useCallback, useMemo, memo } from 'react'
import { Link } from 'react-router'
import { FaStar, FaRegStar, FaCartPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'
import styles from './Product.module.css'
import { useCart } from '../cart/cartUtils'
import Button from '../../ui/Button'
import { useWindowSize } from '../../hooks/useWindowSize'

const SCREEN_BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 900,
    DESKTOP: 1024
}

const TITLE_LENGTHS = {
    MOBILE: 20,
    TABLET: 25,
    DESKTOP: 30,
}

const Product = memo(function Product({ id, title, price, rating, shipping, image }) {
    const { addToCart } = useCart();
    const { width } = useWindowSize();

    // Memoização das estrelas
    const stars = useMemo(() => {
        return Array(5).fill(0).map((_, index) =>
            index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
        )
    }, [rating])

    // Memoização da função de truncamento
    const truncateTitle = useCallback((text) => {
        if (width < SCREEN_BREAKPOINTS.MOBILE) {
            return text.length > TITLE_LENGTHS.MOBILE
                ? `${text.substring(0, TITLE_LENGTHS.MOBILE)}...`
                : text
        }
        if (width < SCREEN_BREAKPOINTS.TABLET) {
            return text.length > TITLE_LENGTHS.TABLET
                ? `${text.substring(0, TITLE_LENGTHS.TABLET)}...`
                : text
        }
        if (width >= SCREEN_BREAKPOINTS.DESKTOP) {
            return text.length > TITLE_LENGTHS.DESKTOP
                ? `${text.substring(0, TITLE_LENGTHS.DESKTOP)}...`
                : text
        }
        return text
    }, [width])

    // Memoização do título truncado
    const truncatedTitle = useMemo(() => truncateTitle(title), [truncateTitle, title])

    const handleAddToCart = useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart({ id, title, price, image })
    }, [id, title, price, image, addToCart])

    // Memoização do URL do produto
    const productUrl = useMemo(() => 
        `/product/${title.toLowerCase().replace(/ /g, '-')}`,
        [title]
    )

    return (
        <Link to={productUrl} className={styles.productLink}>
            <div className={styles.productCard}>
                <div className={styles.productImage}>
                    <img src={image} alt={title} title={title} />
                </div>
                <div className={styles.productInfo}>
                    <h3 className={styles.productTitle}>{truncatedTitle}</h3>
                    <p className={styles.productRating}>{stars}</p>
                    <p className={styles.productPrice}>
                        <span className={styles.currencySymbol}>R$</span>
                        {price.toFixed(2)}
                    </p>
                    <p className={styles.shipping}>{shipping}</p>
                    <Button onClick={handleAddToCart} variant="addToCartButton">
                        <FaCartPlus /> Comprar
                    </Button>
                </div>
            </div>
        </Link>
    )
})

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    shipping: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Product