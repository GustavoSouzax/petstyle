import PropTypes from "prop-types"
import styles from "./ProductPrice.module.css"

/**
 * Componente para exibir o preço do produto
 * @param {Object} props
 * @param {number} props.price
 * @param {boolean} props.showInstallments
 * @returns {JSX.Element}
 */

function ProductPrice({ price, showInstallments = true }) {
  const installmentValue = ((price * Math.pow(1 + 0.0074, 12)) / 12).toFixed(2)

  return (
    <div className={styles.priceContainer}>
      <p className={styles.productPrice}>
        <span className={styles.currencySymbol}>R$</span>
        {price.toFixed(2)}
      </p>
      {showInstallments && <p className={styles.installments}>ou 12x de R$ {installmentValue}</p>}
    </div>
  )
}

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  showInstallments: PropTypes.bool,
}

export default ProductPrice

