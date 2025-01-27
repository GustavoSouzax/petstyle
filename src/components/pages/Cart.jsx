import { useCart } from '../features/cart/cartUtils'
import styles from './Cart.module.css'
import Button from '../ui/Button'
import { Link } from 'react-router'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaPix } from 'react-icons/fa6'
import { FaBarcode } from "react-icons/fa";
import { SiPicpay } from 'react-icons/si'
import Sugestions from '../features/products/Sugestions'
import { useState } from 'react'

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [selectedItems, setSelectedItems] = useState([])
  const shipping = 20.0
  const discount = 10.0

  const total = cart.reduce((sum, item) => {
    if (selectedItems.includes(item.id)) {
      return sum + item.price * item.quantity
    }
    return sum
  }, 0)

  const handleItemSelect = (itemId) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId)
      }
      return [...prev, itemId]
    })
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cart.map(item => item.id))
    } else {
      setSelectedItems([])
    }
  }

  const payment = [
    {
      icon: <FaBarcode size={24} />,
    },
    {
      icon: <FaPix size={24} />,
    },
    {
      icon: <FaCcVisa size={24} />,
    },
    {
      icon: <FaCcMastercard size={24} />,
    },
    {
      icon: <FaCcPaypal size={24} />,
    },
    {
      icon: <SiPicpay size={24} />,
    }
  ]

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
                  <input
                    type="checkbox"
                    id="selectAll"
                    checked={selectedItems.length === cart.length}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="selectAll">Selecionar todos os itens</label>
                </div>
              </div>

              <ul className={styles.cartList}>
                {cart.map((item) => (
                  <li key={item.id} className={styles.cartItem}>
                    <div className={styles.itemCheckbox}>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleItemSelect(item.id)}
                      />
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
                          <span className={styles.price}>
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <div className={styles.quantityControl}>
                            <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} variant="removeButton">-</Button>
                            <span>{item.quantity}</span>
                            <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} variant="addButton">+</Button>
                          </div>
                        </div>
                        <Button onClick={() => {
                          removeFromCart(item.id)
                          setSelectedItems(prev => prev.filter(id => id !== item.id))
                        }} variant="secondary">Remover</Button>
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
              <span>R$ {selectedItems.length > 0 ? shipping.toFixed(2) : '0.00'}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Desconto</span>
              <span>R${selectedItems.length > 0 ? discount.toFixed(2) : '0.00'}</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.total}`}>
              <span>Total</span>
              <span>R$ {(total + (selectedItems.length > 0 ? shipping : 0)).toFixed(2)}</span>
            </div>
            <Button
              variant="primary"
              className={styles.checkoutButton}
              disabled={selectedItems.length === 0}
            >
              Continuar ({selectedItems.length})
            </Button>
            <div className={styles.securePayment}>
              <h4>Métodos de pagamento</h4>
              <p>Pagamentos 100% seguros</p>
              <div className={styles.paymentMethods}>
                {payment.map((method, index) => (
                  <div key={index} className={styles.paymentIcon}>
                    {method.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Sugestions title='Produtos Sugeridos' />
    </>
  )
}

export default Cart