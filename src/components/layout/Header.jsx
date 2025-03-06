import { useState, useEffect } from 'react'
import { Link, useLocation, redirect } from 'react-router'
import { FaMagnifyingGlass, FaCartShopping, FaUser } from 'react-icons/fa6'
import styles from './Header.module.css'
import { useCart } from '../features/cart/cartUtils'
import Button from '../ui/Button'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import CategoriesHeader from '../features/categories/CategoriesHeader'

function Header() {
    const { cart } = useCart()
    const [hasItems, setHasItems] = useState(false)
    const [search, setSearch] = useState('')
    const scrollDirection = useScrollDirection()
    const location = useLocation()

    useEffect(() => {
        setHasItems(cart.length > 0)
    }, [cart])

    const handleSearch = (e) => {
        e.preventDefault()
        redirect('/search')
        // Implement search functionality
    }

    return (
        <header className={`${styles.header} ${scrollDirection === "down" ? styles.hide : ""}`}>
            <div className={`${styles.headerContent} ${styles.headerTop}`}>
                <Link to="/" className={styles.logo}>
                    PetStyle
                </Link>
                <form className={styles.searchBar} onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder='Busque roupas e acessórios para seu pet...'
                        aria-label="Buscar produtos"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button type="submit" customClass="searchBarButton" aria-label="Buscar">
                        <FaMagnifyingGlass />
                    </Button>
                </form>
                <nav className={styles.userActions}>
                    <Link to="/login" className={styles.actionLink}>
                        <FaUser aria-hidden="true" />
                        <p>Olá,</p>
                        <span>Conta</span>
                    </Link>
                    <Link to="/cart" className={styles.actionLink}>
                        <FaCartShopping aria-hidden="true" />
                        <span>Carrinho</span>
                        {hasItems && (
                            <span className={styles.cartIndicator} 
                                  aria-label="Carrinho contém itens" 
                            />
                        )}
                    </Link>
                </nav>
            </div>
            {location.pathname === '/' && (
                <div className={styles.row}>
                    <CategoriesHeader />
                </div>
            )}
        </header>
    )
}

export default Header