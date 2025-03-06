import PropTypes from 'prop-types'
import { Button } from '../../../ui'
import PaymentMethods from './PaymentMethods'
import styles from './CartSummary.module.css'

function CartSummary({ total, shipping, discount, selectedItems }) {
    const totalWithShipping = total + (selectedItems.length > 0 ? shipping : 0)

    return (
        <div className={styles.cartSummary}>
            <h3>Resumo</h3>
            <div className={styles.summaryItem}>
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Frete</span>
                <span>R$ {selectedItems.length > 0 ? shipping.toFixed(2) : '0.00'}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Desconto</span>
                <span>R${selectedItems.length > 0 ? discount.toFixed(2) : '0.00'}</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.total}`}>
                <span>Total</span>
                <span>R$ {totalWithShipping.toFixed(2)}</span>
            </div>
            <Button
                customClass="primary"
                className={styles.checkoutButton}
                disabled={selectedItems.length === 0}
            >
                Continuar ({selectedItems.length})
            </Button>
            <PaymentMethods />
        </div>
    )
}

CartSummary.propTypes = {
    total: PropTypes.number.isRequired,
    shipping: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    selectedItems: PropTypes.array.isRequired
}

export default CartSummary