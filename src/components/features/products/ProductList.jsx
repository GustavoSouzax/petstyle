import { useState, useEffect } from "react"
import { products } from "../../../data/products"
import Product from "./Product"
import { Button } from "../../ui"
import styles from "./ProductList.module.css"

function ProductList() {
  const [visibleProducts, setVisibleProducts] = useState(() => {
    const saved = sessionStorage.getItem("visibleProducts")
    return saved ? Math.min(Number.parseInt(saved, 10), products.length) : 12
  })

  useEffect(() => {
    sessionStorage.setItem("visibleProducts", visibleProducts.toString())
  }, [visibleProducts])

  const showMoreProducts = () => {
    const newValue = visibleProducts + 12
    setVisibleProducts(newValue)
    sessionStorage.setItem("visibleProducts", newValue.toString())
  }

  return (
    <>
      <section className={styles.productList}>
        {products.slice(0, visibleProducts).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            shipping={product.shipping}
            image={product.image}
          />
        ))}
      </section>

      {visibleProducts < products.length && (
        <div className={styles.showMoreContainer}>
          <Button customClass="showMoreButton" className={styles.showMoreButton} onClick={showMoreProducts}>
            Mostrar Mais Produtos
          </Button>
        </div>
      )}
    </>
  )
}

export default ProductList