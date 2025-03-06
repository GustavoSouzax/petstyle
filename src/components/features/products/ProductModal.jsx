import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router"
import { FaCartPlus, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../cart/cartUtils"
import { products } from "../../../data/products"
import { Button, Rating } from "../../ui"
import { ProductGallery, ProductPrice, ProductBenefits, Suggestions } from "."
import styles from "./ProductModal.module.css"

function ProductModal({ slug, onClose }) {
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const [mounted, setMounted] = useState(false)

    const product = products.find((p) => p.title.toLowerCase().replace(/ /g, "-") === slug)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        setMounted(true)

        const handlePopState = () => {
            onClose()
        }
        window.addEventListener("popstate", handlePopState)

        return () => {
            document.body.style.overflow = "auto"
            window.removeEventListener("popstate", handlePopState)
        }
    }, [onClose])

    if (!product) {
        return null
    }

    const handleAddToCart = () => {
        addToCart(product)
    }

    const handleBuyNow = () => {
        addToCart(product)
        navigate("/cart")
    }

    const productImages = [product.image, product.image, product.image]

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            <motion.div
                className={styles.modalOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modalContent}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeButton} onClick={onClose}>
                        <FaTimes />
                    </button>

                    <main className={styles.container}>
                        <article className={styles.productDetails}>
                            <ProductGallery images={productImages} title={product.title} />

                            <section className={styles.productInfo}>
                                <nav className={styles.breadcrumb}>
                                    <span>Home</span> / Produtos / {product.title}
                                </nav>
                                <h1>{product.title}</h1>
                                <div className={styles.productMeta}>
                                    <Rating rating={product.rating} showCount={true} count={127} />
                                    <p className={styles.sku}>SKU: {product.id}</p>
                                </div>

                                <ProductPrice price={product.price} />

                                <p className={styles.shipping}>{product.shipping}</p>

                                <div className={styles.actions}>
                                    <Button onClick={handleAddToCart} customClass="addToCartButton">
                                        <FaCartPlus /> Adicionar ao Carrinho
                                    </Button>
                                    <Button onClick={handleBuyNow} customClass="addToCartButton">
                                        Comprar Agora
                                    </Button>
                                </div>

                                <ProductBenefits />

                                <div className={styles.productDescription}>
                                    <h2>Descrição do Produto</h2>
                                    <p>{product.description || "Descrição não disponível."}</p>
                                </div>
                            </section>
                        </article>

                        <section className={styles.suggestions}>
                            <Suggestions title="Produtos Relacionados" />
                        </section>
                    </main>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body,
    )
}

ProductModal.propTypes = {
    slug: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ProductModal