import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <section className={styles.footerSection}>
                    <h3>Sobre Nós</h3>
                    <p>PetStyle - Sua loja online de moda pet</p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                </section>
                <section className={styles.footerSection}>
                    <h3>Contato</h3>
                    <p>Email: contato@petstyle.com</p>
                    <p>Telefone: (11) 9999-9999</p>
                    <p>Whatsapp: (11) 99999-9999</p>
                </section>
                <section className={styles.footerSection}>
                    <h3>Redes Sociais</h3>
                    <div className={styles.socialLinks}>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </section>
                <section className={styles.footerSection}>
                    <h3>Atendimento</h3>
                    <p>Segunda a Sexta: 9h as 18h</p>
                    <p>Sábado e Domingo: 9h as 13h</p>
                </section>
            </div>
            <p>&copy; 2025 PetStyle. Todos os direitos reservados.</p>
            <p>Developed by Gutavo Souzax</p>
        </footer>
    )
}

export default Footer