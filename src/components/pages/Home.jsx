import { HomeBanner } from "../layout"
import { Categories, ProductList } from "../features"
import styles from "./Home.module.css"

function Home() {
  return (
    <main className={styles.home}>
      <HomeBanner />
      <Categories />
      <h1 className={styles.title}>Bem-vindo à PetStyle</h1>
      <p className={styles.subtitle}>Encontre os melhores produtos para o seu pet!</p>
      <ProductList />
    </main>
  )
}

export default Home