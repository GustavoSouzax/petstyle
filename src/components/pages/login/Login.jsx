import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import Button from '../../ui/Button';
import styles from './Login.module.css';
import Input from '../../ui/form/Input';
import Label from '../../ui/form/label';

function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.password) {
            newErrors.password = 'Senha é obrigatória';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
        }

        if (!isLogin) {
            if (!formData.name) {
                newErrors.name = 'Nome é obrigatório';
            }

            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Senhas não conferem';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            navigate('/');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleGoogleSignIn = () => {
        console.log('Google Sign In clicked');
        // Implement Google Sign In logic here
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                <Link to="/" className={styles.logo}>
                    PetStyle
                </Link>
                <div className={styles.formContainer}>
                    <div className={styles.formHeader}>
                        <button
                            className={`${styles.tabButton} ${isLogin ? styles.active : ''}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`${styles.tabButton} ${!isLogin ? styles.active : ''}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Cadastro
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {!isLogin && (
                            <div className={styles.formGroup}>
                                <Label
                                    htmlFor="name"
                                    text="Nome"
                                />
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    handleInputChange={handleInputChange}
                                    customClass={errors.name ? 'errorInput' : ''}
                                />
                                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                            </div>
                        )}
                        <div className={styles.formGroup}>
                            <Label
                                htmlFor="email"
                                text="Email"
                            />
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                handleInputChange={handleInputChange}
                                customClass={errors.email ? 'errorInput' : ''}
                            />
                            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <Label
                                htmlFor="password"
                                text="Senha"
                            />
                            <div className={styles.passwordInput}>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    handleInputChange={handleInputChange}
                                    customClass={errors.password ? 'errorInput' : ''}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={styles.showPasswordButton}
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>
                            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
                        </div>
                        {!isLogin && (
                            <div className={styles.formGroup}>
                                <Label
                                    htmlFor="confirmPassword"
                                    text="Confirmar senha"
                                />
                                <div className={styles.passwordInput}>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        handleInputChange={handleInputChange}
                                        customClass={errors.password ? 'errorInput' : ''}
                                    />
                                </div>
                                {errors.confirmPassword && (
                                    <span className={styles.errorMessage}>{errors.confirmPassword}</span>
                                )}
                            </div>
                        )}
                        {isLogin && (
                            <Link to="/forgot-password" className={styles.forgotPassword}>
                                Esqueceu sua senha?
                            </Link>
                        )}
                        <Button type="submit" variant="primary" className={styles.submitButton}>
                            {isLogin ? 'Entrar' : 'Cadastrar'}
                        </Button>
                    </form>
                    <div className={styles.divider}>
                        <span>ou</span>
                    </div>
                    <button
                        type="button"
                        className={styles.googleButton}
                        onClick={handleGoogleSignIn}
                    >
                        <FcGoogle size={20} /> Entrar com Google
                    </button>
                    <Link to="/" className={styles.backToHome}>
                        <FaArrowLeft /> Voltar para página inicial
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login