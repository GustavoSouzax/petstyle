import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaPix } from 'react-icons/fa6'
import { FaBarcode } from "react-icons/fa";
import { SiPicpay } from 'react-icons/si'
import styles from './PaymentMethods.module.css'

function PaymentMethods() {
    const payment = [
        { icon: <FaBarcode size={24} /> },
        { icon: <FaPix size={24} /> },
        { icon: <FaCcVisa size={24} /> },
        { icon: <FaCcMastercard size={24} /> },
        { icon: <FaCcPaypal size={24} /> },
        { icon: <SiPicpay size={24} /> }
    ]

    return (
        <div className={styles.securePayment}>
            <h4>Métodos de pagamento</h4>
            <p>Pagamentos 100% seguros</p>
            <div className={styles.paymentMethods}>
                {payment.map((method, index) => (
                    <div key={index} className={styles.paymentIcon}>
                        {method.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PaymentMethods