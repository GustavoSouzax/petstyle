import { Routes, Route, useLocation } from 'react-router'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { CartProvider } from './components/features/cart/CartContext'
import FloatingCartIcon from './components/features/cart/FloatingCartIcon'
import Home from './components/pages/Home'
import Offers from './components/pages/Offers'
import Login from './components/pages/login/Login'
import Cart from './components/pages/Cart'
import ProductDetails from './components/pages/ProductDetails'
import ForgotPassword from './components/pages/login/ForgotPassword.jsx'

function App() {

  const location = useLocation()
  const isLoginPage = location.pathname === '/login' || location.pathname === '/forgot-password'
  const isCartPage = location.pathname === '/cart'

  return (
    <CartProvider>
        {!isLoginPage && <Header />}
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </Container>
        {!isLoginPage && <Footer />}
        {!isLoginPage && !isCartPage && <FloatingCartIcon />}
    </CartProvider>
  )
}

export default App