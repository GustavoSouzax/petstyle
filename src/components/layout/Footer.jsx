import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Sobre Nós</h3>
                    <p>PetStyle - Sua loja online de moda pet</p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contato</h3>
                    <p>Email: contato@petstyle.com</p>
                    <p>Telefone: (11) 9999-9999</p>
                    <p>Whatsapp: (11) 99999-9999</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Redes Sociais</h3>
                    <div className={styles.socialLinks}>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <h3>Atendimento</h3>
                    <p>Segunda a Sexta: 9h até 18h</p>
                    <p>Série: 9h até 13h</p>
                </div>
            </div>
            <p>&copy; 2025 PetStyle. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer