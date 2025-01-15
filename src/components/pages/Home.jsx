import HomeBanner from '../layout/HomeBanner'
import ProductList from '../features/products/ProductList'
import styles from './Home.module.css'
import Categories from '../features/categories/categories'

function Home() {
    return (
        <div className={styles.home}>
            <HomeBanner />
            <Categories />
            <h1 className={styles.title}>Bem-vindo à PetStyle</h1>
            <p className={styles.subtitle}>Encontre os melhores produtos para o seu pet!</p>
            <ProductList />
        </div>
    )
}

export default Home