import { useState } from "react"
import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import Button from "../../ui/Button"
import styles from "./ForgotPassword.module.css"
import Input from "../../ui/form/Input"
import Label from "../../ui/form/label"

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccessMessage('')

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, insira um endereço de e-mail.')
            return
        }

        // Implement forgot password logic here
        setSuccessMessage('Um link de redefinição foi enviado para o seu e-mail.')
        setEmail('')
    }
    return (
        <div className={styles.forgotPasswordContainer}>
            <div className={styles.forgotPasswordContent}>
                <Link to="/" className={styles.logo}>
                    PetStyle
                </Link>
                <div className={styles.formContainer}>
                    <h2 className={styles.title}>Esqueceu sua senha?</h2>
                    <p className={styles.description}>
                        Insira o endereço de e-mail associado à sua conta e nós lhe enviaremos um link para redefinir sua senha.
                    </p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <Label htmlFor="email" text="E-mail" /> 
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                handleInputChange={(e) => setEmail(e.target.value)}
                                customClass={error ? 'errorInput' : ''}
                            />
                            {error && <span className={styles.errorMessage}>{error}</span>}
                        </div>
                        <Button type="submit" variant="primary" className={styles.submitButton}>
                            Enviar link de redefinição
                        </Button>
                    </form>
                    {successMessage && (
                        <p className={styles.successMessage}>{successMessage}</p>
                    )}
                    <Link to="/login" className={styles.backToLogin}>
                        <FaArrowLeft /> Voltar para o login
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default ForgotPassword