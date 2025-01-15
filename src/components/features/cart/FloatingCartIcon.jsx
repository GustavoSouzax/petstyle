import { Link } from "react-router"
import { motion, AnimatePresence } from 'framer-motion'
import { FaCartShopping } from "react-icons/fa6"
import { useCart } from "../cart/cartUtils"
import { useEffect, useState } from "react"
import styles from "./FloatingCartIcon.module.css"

function FloatingCartIcon() {
    const { cart } = useCart()
    const [isItemAdded, setIsItemAdded] = useState(false)
    const [prevCount, setPrevCount] = useState(0)
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

    // Detecta quando um item é adicionado ao carrinho
    useEffect(() => {
        if (cartItemsCount > prevCount) {
            setIsItemAdded(true)
            const timer = setTimeout(() => setIsItemAdded(false), 600)
            return () => clearTimeout(timer)
        }
        setPrevCount(cartItemsCount)
    }, [cartItemsCount, prevCount])

    return (
        <Link to="/cart" className={styles.floatingCart}>
            <div className={styles.cartContainer}>
                <FaCartShopping className={styles.cartIcon} />

                <AnimatePresence>
                    {cartItemsCount > 0 && (
                        <motion.div
                            key="badge"
                            className={styles.badge}
                            initial={{ scale: 1 }}
                            animate={{ scale: isItemAdded ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {cartItemsCount}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Animação da gotinha */}
                <AnimatePresence>
                    {isItemAdded && (
                        <motion.div
                            className={styles.droplet}
                            initial={{
                                y: -40,
                                x: 0,
                                scale: 0,
                                opacity: 1
                            }}
                            animate={{
                                y: [-40, 15],
                                x: 0,
                                scale: [0.2, 1, 0.5, 0],
                                opacity: [1, 1, 0]
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.19, 0.97, 0.31, 1.21]
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </Link>
    )
}

export default FloatingCartIcon