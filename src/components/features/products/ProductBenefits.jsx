import { FaTruck, FaShieldAlt, FaUndo, FaCreditCard } from "react-icons/fa"
import { PRODUCT_BENEFITS } from "../../../constants"
import styles from "./ProductBenefits.module.css"

/**
 * @returns {JSX.Element}
 */

function ProductBenefits() {
    const iconMap = {
        FaTruck: <FaTruck />,
        FaShieldAlt: <FaShieldAlt />,
        FaUndo: <FaUndo />,
        FaCreditCard: <FaCreditCard />,
    }

    return (
        <section className={styles.benefits}>
            {PRODUCT_BENEFITS.map((benefit, index) => (
                <article key={index} className={styles.benefitItem}>
                    <figure className={styles.benefitIcon}>
                        {typeof benefit.icon === "string" ? iconMap[benefit.icon] : benefit.icon}
                    </figure>
                    <div className={styles.benefitText}>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                </article>
            ))}
        </section>
    )

}

export default ProductBenefits