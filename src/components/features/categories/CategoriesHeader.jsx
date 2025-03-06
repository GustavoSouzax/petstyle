import { PRODUCT_CATEGORIES } from "../../../constants"
import styles from "./CategoriesHeader.module.css"

function CategoriesHeader() {
  return (
    <div className={styles.categoriesHeader}>
      {PRODUCT_CATEGORIES.map((category) => (
        <div key={category.id} className={styles.category}>
          <button>{category.name}</button>
        </div>
      ))}
    </div>
  )
}

export default CategoriesHeader