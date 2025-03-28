import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { products } from '../../../data/products'
import Product from './Product'
import styles from "./Suggestions.module.css"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

function Suggestions({ title }) {
    const suggestedProducts = products.slice(0, 9)

    return (
        <section className={styles.suggestionsContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.carouselContainer}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    className={styles.carousel}
                >
                    {suggestedProducts.map(product => (
                        <SwiperSlide key={product.id} className={styles.carouselItem}>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                shipping={product.shipping}
                                image={product.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

Suggestions.propTypes = {
    title: PropTypes.string.isRequired
}

export default Suggestions