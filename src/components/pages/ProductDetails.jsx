import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { FaStar, FaRegStar, FaCartPlus } from 'react-icons/fa'
import { useCart } from '../features/cart/cartUtils'
import Button from '../ui/Button'
import { products } from '../../data/products'
import styles from './ProductDetails.module.css'

function ProductDetails() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const product = products.find(p => p.title.toLowerCase().replace(/ /g, '-') === slug)

    useEffect(() => {
        if (!product) {
            navigate('/')
        }
    }, [product, navigate])

    if (!product) {
        return null
    }

    const stars = Array(5).fill(0).map((_, index) =>
        index < product.rating ? <FaStar key={index} /> : <FaRegStar key={index} />
    )

    const handleAddToCart = () => {
        addToCart(product)
    }

    return (
        <div className={styles.productDetails}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.productInfo}>
                <h1>{product.title}</h1>
                <p className={styles.productRating}>{stars}</p>
                <p className={styles.productPrice}>
                    <span className={styles.currencySymbol}>R$</span>{product.price.toFixed(2)}
                </p>
                <p className={styles.shipping}>{product.shipping}</p>
                <Button onClick={handleAddToCart} variant="addToCartButton">
                    <FaCartPlus /> Adicionar ao Carrinho
                </Button>
                <div className={styles.productDescription}>
                    <h2>Descrição do Produto</h2>
                    <p>{product.description || 'Descrição não disponível.'}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails