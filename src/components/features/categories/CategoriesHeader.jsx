import styles from './CategoriesHeader.module.css'

const categories = [
    { id: 1, name: 'Acessórios', image: 'https://placehold.co/80x80' },
    { id: 2, name: 'Moda Pet', image: 'https://placehold.co/80x80' },
    { id: 3, name: 'Brinquedos', image: 'https://placehold.co/80x80' },
    { id: 4, name: 'Camas', image: 'https://placehold.co/80x80' },
    { id: 5, name: 'Coleiras', image: 'https://placehold.co/80x80' },
    { id: 6, name: 'Conforto', image: 'https://placehold.co/80x80' },
    { id: 7, name: 'Cães', image: 'https://placehold.co/80x80' },
    { id: 8, name: 'Cães e Gatos', image: 'https://placehold.co/80x80' },
    { id: 9, name: 'Estilo', image: 'https://placehold.co/80x80' },
    { id: 10, name: 'Interatividade', image: 'https://placehold.co/80x80' },
]

function CategoriesHeader() {
    return (
        <div className={styles.categoriesHeader}>
            {categories.map((category) => (
                <div key={category.id} className={styles.category}>
                    <button>{category.name}</button>
                </div>
            ))}
        </div>
    )
}

export default CategoriesHeader