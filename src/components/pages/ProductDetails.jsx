import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { FaStar, FaRegStar, FaCartPlus, FaTruck, FaShieldAlt, FaUndo, FaCreditCard } from 'react-icons/fa'
import { useCart } from '../features/cart/cartUtils'
import Button from '../ui/Button'
import { products } from '../../data/products'
import Suggestions from '../features/products/Sugestions'
import styles from './ProductDetails.module.css'

function ProductDetails() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const [selectedImage, setSelectedImage] = useState(0)
    const product = products.find(p => p.title.toLowerCase().replace(/ /g, '-') === slug)

    useEffect(() => {
        if (!product) {
            navigate('/')
        }
        // Scroll to top when component mounts
        window.scrollTo(0, 0)
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

    const handleBuyNow = () => {
        addToCart(product)
        navigate('/cart')
    }

    // Simulando múltiplas imagens do produto
    const productImages = [
        product.image,
        product.image, // Idealmente seriam diferentes imagens do mesmo produto
        product.image
    ]

    const benefits = [
        {
            icon: <FaTruck />,
            title: 'Entrega Rápida',
            description: 'Envio para todo o Brasil'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Compra Segura',
            description: 'Seus dados protegidos'
        },
        {
            icon: <FaUndo />,
            title: 'Devolução Grátis',
            description: '7 dias para trocar'
        },
        {
            icon: <FaCreditCard />,
            title: 'Parcelamento',
            description: 'Em até 12x sem juros'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.productDetails}>
                <div className={styles.productGallery}>
                    <div className={styles.mainImage}>
                        <img src={productImages[selectedImage]} alt={product.title} />
                    </div>
                    <div className={styles.thumbnails}>
                        {productImages.map((img, index) => (
                            <div
                                key={index}
                                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={img} alt={`${product.title} - imagem ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.breadcrumb}>
                        Home / Produtos / {product.title}
                    </div>
                    <h1>{product.title}</h1>
                    <div className={styles.productMeta}>
                        <p className={styles.productRating}>
                            {stars}
                            <span className={styles.ratingCount}>(127 avaliações)</span>
                        </p>
                        <p className={styles.sku}>SKU: {product.id}</p>
                    </div>

                    <div className={styles.priceContainer}>
                        <p className={styles.productPrice}>
                            <span className={styles.currencySymbol}>R$</span>
                            {product.price.toFixed(2)}
                        </p>
                        <p className={styles.installments}>
                            ou 12x de R$ {(product.price * Math.pow(1 + 0.0074, 12) / 12).toFixed(2)}
                        </p>
                    </div>

                    <p className={styles.shipping}>{product.shipping}</p>

                    <div className={styles.actions}>
                        <Button onClick={handleAddToCart} variant="addToCartButton">
                            <FaCartPlus /> Adicionar ao Carrinho
                        </Button>
                        <Button onClick={handleBuyNow} variant="addToCartButton">
                            Comprar Agora
                        </Button>
                    </div>

                    <div className={styles.benefits}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>{benefit.icon}</span>
                                <div className={styles.benefitText}>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.productDescription}>
                        <h2>Descrição do Produto</h2>
                        <p>{product.description || 'Descrição não disponível.'}</p>
                    </div>
                </div>
            </div>

            <div className={styles.suggestions}>
                <Suggestions title="Produtos Relacionados" />
            </div>
        </div>
    )
}

export default ProductDetails