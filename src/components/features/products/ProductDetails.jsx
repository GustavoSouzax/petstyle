import { useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router"
import { FaCartPlus } from "react-icons/fa"
import { useCart } from "../cart/cartUtils"
import { products } from "../../../data/products"
import { Button, Rating } from "../../ui"
import { ProductGallery, ProductPrice, ProductBenefits, Suggestions } from "."
import styles from "./ProductDetails.module.css"

function ProductDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find((p) => p.title.toLowerCase().replace(/ /g, "-") === slug)

  useEffect(() => {
    if (!product) {
      navigate("/")
    }
  }, [product, navigate])

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

  return (
    <main className={styles.container}>
      <article className={styles.productDetails}>
        <ProductGallery images={productImages} title={product.title} />

        <section className={styles.productInfo}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link> / Produtos / {product.title}
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
  )
}

export default ProductDetails