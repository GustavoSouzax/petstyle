import { products } from '../../../data/products'
//import { faker } from '@faker-js/faker'
import Product from './Product'
import styles from './ProductList.module.css'

function ProductList() {

    /*     const products = Array.from({ length: 100 }, () => ({
            id: faker.number.int({ min: 1, max: 1000 }), // IDs únicos entre 1 e 1000
            title: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price({ min: 1.2, max: 399.9 })), // Preço entre 1,20 e 499,90
            rating: faker.number.int({ min: 1, max: 5 }), // Rating entre 1 e 5
            shipping: faker.datatype.boolean() ? 'Frete Grátis' : 'Frete Pago', // Frete grátis ou pago
            image: 'https://placehold.co/400x400'
        }))
     */
    return (
        <div className={styles.productList}>
            {products.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    shipping={product.shipping}
                    image={product.image}
                />
            ))}
        </div>
    )
}

export default ProductList