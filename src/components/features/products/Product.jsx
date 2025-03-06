import { useCallback, useMemo, memo } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router"
import { FaCartPlus } from "react-icons/fa"
import { useCart } from "../cart/cartUtils"
import { useTruncateText } from "../../../hooks"
import { Button, Rating } from "../../ui"
import styles from "./Product.module.css"

const Product = memo(function Product({ id, title, price, rating, shipping, image }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const truncateText = useTruncateText()

  const truncatedTitle = useMemo(() => truncateText(title), [truncateText, title])

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      addToCart({ id, title, price, image })
    },
    [id, title, price, image, addToCart],
  )

  const productSlug = useMemo(() => title.toLowerCase().replace(/ /g, "-"), [title])

  const handleProductClick = useCallback(
    (e) => {
      e.preventDefault()
      navigate(`/product/${productSlug}`)
    },
    [productSlug, navigate],
  )

  return (
    <article className={styles.productCard} onClick={handleProductClick}>
      <picture className={styles.productImage}>
        <img src={image || "/placeholder.svg"} alt={title} title={title} />
      </picture>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
        <div className={styles.productRatingContainer}>
          <Rating rating={rating} />
        </div>
        <p className={styles.productPrice}>
          <span className={styles.currencySymbol}>R$</span>
          {price.toFixed(2)}
        </p>
        <p className={styles.shipping}>{shipping}</p>
        <Button onClick={handleAddToCart} customClass="addToCartButton">
          <FaCartPlus /> Comprar
        </Button>
      </div>
    </article>
  )
})

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  shipping: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Product