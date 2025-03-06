import { useState } from "react"
import PropTypes from "prop-types"
import styles from "./ProductGallery.module.css"

/**
 * @param {Object} props
 * @param {Array} props.images
 * @param {string} props.title
 * @returns {JSX.Element}
 */

function ProductGallery({ images, title }) {
    const [selectedImage, setSelectedImage] = useState(0)

    // Imagem default caso não tenha
    const displayImages = images.length > 0 ? images : ["/placeholder.svg?height=400&width=400"]

    return (
        <div className={styles.productGallery}>
            <figure className={styles.mainImage}>
                <img src={displayImages[selectedImage] || "/placeholder.svg"} alt={title} />
            </figure>

            {displayImages.length > 1 && (
                <div className={styles.thumbnails}>
                    {displayImages.map((img, index) => (
                        <figure
                            key={index}
                            className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ""}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img src={img || "/placeholder.svg"} alt={`${title} - imagem ${index + 1}`} />
                        </figure>
                    ))}
                </div>
            )}
        </div>
    )

}

ProductGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
}

export default ProductGallery