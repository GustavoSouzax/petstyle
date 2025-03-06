import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { PRODUCT_CATEGORIES } from "../../../constants"
import styles from "./Categories.module.css"

function Categories() {
  return (
    <div className={styles.categoriesWrapper}>
      <button
        className={`${styles.scrollButton} ${styles.scrollLeft}`}
        onClick={() => document.querySelector(".swiper-button-prev").click()}
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
        {PRODUCT_CATEGORIES.map((category) => (
          <SwiperSlide key={category.id} className={styles.categorySlide}>
            <div className={styles.category}>
              <img src={category.image || "/placeholder.svg"} alt={category.name} draggable="false" />
              <span>{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${styles.scrollButton} ${styles.scrollRight}`}
        onClick={() => document.querySelector(".swiper-button-next").click()}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

export default Categories