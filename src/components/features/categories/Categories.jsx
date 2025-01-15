import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './Categories.module.css'

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

function Categories() {
    return (
        <div className={styles.categoriesWrapper}>
            <button
                className={`${styles.scrollButton} ${styles.scrollLeft}`}
                onClick={() => document.querySelector('.swiper-button-prev').click()}
                aria-label="Scroll left"
            >
                <FaChevronLeft />
            </button>

            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={10}
                navigation={{
                    prevEl: `.${styles.scrollLeft}`,
                    nextEl: `.${styles.scrollRight}`,
                }}
                breakpoints={{
                    768: {
                        spaceBetween: 20,
                    },
                }}
                className={styles.categoriesContainer}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id} className={styles.categorySlide}>
                        <div className={styles.category}>
                            <img
                                src={category.image}
                                alt={category.name}
                                draggable="false"
                            />
                            <span>{category.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                className={`${styles.scrollButton} ${styles.scrollRight}`}
                onClick={() => document.querySelector('.swiper-button-next').click()}
                aria-label="Scroll right"
            >
                <FaChevronRight />
            </button>
        </div>
    )
}

export default Categories