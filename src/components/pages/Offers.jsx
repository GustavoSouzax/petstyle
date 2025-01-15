import styles from './Offers.module.css'
import ProductList from '../features/products/ProductList'

function Offers() {
    return (
        <div className={styles.offers}>
            <ProductList />
        </div>
    )
}

export default Offers