import ProductList from '../features/products/ProductList'
import styles from './Offers.module.css'

function Offers() {
    return (
        <main className={styles.offers}>
            <ProductList />
        </main>
    )
}

export default Offers