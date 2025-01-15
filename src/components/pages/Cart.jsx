import { useCart } from '../features/cart/cartUtils'
import styles from './Cart.module.css'
import Button from '../ui/Button'
import { Link } from 'react-router'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaPix } from 'react-icons/fa6'
import { FaBarcode } from "react-icons/fa";
import { SiPicpay } from 'react-icons/si'
import Sugestions from '../features/products/Sugestions'

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 20.0

  // Add shipping 

  return (
    <>
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        {cart.length === 0 ? (
          <div className={styles.emptyCart}>
            <h1>O seu carrinho está vazio</h1>
            <p>Confira nossos produtos</p>
            <Link to="/">
              <Button variant="primary">Ver produtos</Button>
            </Link>
          </div>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
              <h2>Carrinho ({cart.length})</h2>
              <div className={styles.selectAll}>
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll">Selecionar todos os itens</label>
              </div>
            </div>

            <ul className={styles.cartList}>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <div className={styles.itemCheckbox}>
                    <input type="checkbox" />
                  </div>
                  <Link to={`/product/${item.title.toLowerCase().replace(/ /g, '-')}`}>
                    <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                  </Link>
                  <div className={styles.cartItemDetails}>
                    <Link to={`/product/${item.title.toLowerCase().replace(/ /g, '-')}`} className={styles.cartItemTitle}>
                      <h3>{item.title}</h3>
                    </Link>
                    <div className={styles.itemActions}>
                      <div className={styles.priceQuantity}>
                        <span className={styles.price}>R$ {item.price.toFixed(2)}</span>
                        <div className={styles.quantityControl}>
                          <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} variant="removeButton">-</Button>
                          <span>{item.quantity}</span>
                          <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} variant="addButton">+</Button>
                        </div>
                      </div>
                      <Button onClick={() => removeFromCart(item.id)} variant="secondary">Remover</Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className={styles.cartSummary}>
          <h3>Resumo</h3>
          <div className={styles.summaryItem}>
            <span>Subtotal</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Frete</span>
            <span>R$ {shipping.toFixed(2)}</span>
          </div>
          <div className={`${styles.summaryItem} ${styles.total}`}>
            <span>Total</span>
            <span>R$ {(total + shipping).toFixed(2)}</span>
          </div>
          <Button variant="primary" className={styles.checkoutButton}>
            Continuar ({cart.length})
          </Button>
          <div className={styles.securePayment}>
            <h4>Métodos de pagamento</h4>
            <p>Pagamentos 100% seguros</p>
            <div className={styles.paymentMethods}>
              <FaBarcode size={24} className={styles.paymentIcon} />
              <FaPix size={24} className={styles.paymentIcon} />
              <FaCcVisa size={24} className={styles.paymentIcon} />
              <FaCcMastercard size={24} className={styles.paymentIcon} />
              <FaCcPaypal size={24} className={styles.paymentIcon} />
              <SiPicpay size={24} className={styles.paymentIcon} />
            </div>
          </div>
        </div>
      )}
    </div>

    <Sugestions title='Produtos Sugeridos'/>
    </>
  )
}

export default Cart