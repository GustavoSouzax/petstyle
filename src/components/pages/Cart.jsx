import { useState } from 'react'
import { Link } from 'react-router'
import { useCart } from '../features/cart/cartUtils'
import { Button } from '../ui'
import { Suggestions } from '../features/products'
import { CartSummary } from '../features/cart/'
import styles from './Cart.module.css'

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

  return (
    <>
      <main className={styles.cartContainer}>
        <article className={styles.cart}>
          {cart.length === 0 ? (
            <section className={styles.emptyCart}>
              <h1>O seu carrinho está vazio</h1>
              <p>Confira nossos produtos</p>
              <Link to="/">
                <Button customClass="primary">Ver produtos</Button>
              </Link>
            </section>
          ) : (
            <section className={styles.cartContent}>
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
                            <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} customClass="removeButton">-</Button>
                            <span>{item.quantity}</span>
                            <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} customClass="addButton">+</Button>
                          </div>
                        </div>
                        <Button onClick={() => {
                          removeFromCart(item.id)
                          setSelectedItems(prev => prev.filter(id => id !== item.id))
                        }} customClass="secondary">Remover</Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
        {cart.length > 0 && (
          <CartSummary
            total={total}
            shipping={shipping}
            discount={discount}
            selectedItems={selectedItems}
          />
        )}
      </main>

      <section>
        <Suggestions title='Produtos Sugeridos' />
      </section>
    </>
  )
}

export default Cart