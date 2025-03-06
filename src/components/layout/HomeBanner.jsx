import { Link } from 'react-router';
import styles from './HomeBanner.module.css';

function HomeBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h2>Produtos em Oferta!</h2>
                <p>Aproveite descontos de até 50% em produtos selecionados para o seu pet.</p>
                <Link to="/offers" className={styles.bannerLink}>Ver Ofertas</Link>
            </div>
        </div>
    )
}

export default HomeBanner