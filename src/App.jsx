import { Routes, Route, useLocation, useNavigate } from "react-router"
import { useEffect, useRef } from "react"
import { CartProvider } from "./components/features/cart/CartContext"
import { ScrollToTop } from "./hooks"
import { Container, Header, Footer } from "./components/layout"
import { FloatingCartIcon } from "./components/features/cart"
import { Home, Offers, Login, Cart, ForgotPassword } from "./components/pages"
import { ProductModal } from "./components/features/products"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isLoginPage = location.pathname === "/login" || location.pathname === "/forgot-password"
  const isCartPage = location.pathname === "/cart"

  const isProductPage = location.pathname.startsWith("/product/")
  const productSlug = isProductPage ? location.pathname.split("/product/")[1] : null

  const lastNonModalPathRef = useRef("/")

  useEffect(() => {
    if (!isProductPage && location.pathname !== lastNonModalPathRef.current) {
      lastNonModalPathRef.current = location.pathname
    }
  }, [location.pathname, isProductPage])

  const handleCloseModal = () => {
    navigate(lastNonModalPathRef.current)
  }

  return (
    <CartProvider>
      {!isLoginPage && <Header />}
      <Container>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<Home />} />
        </Routes>
        {isProductPage && productSlug && <ProductModal slug={productSlug} onClose={handleCloseModal} />}
      </Container>
      {!isLoginPage && <Footer />}
      {!isLoginPage && !isCartPage && <FloatingCartIcon />}
    </CartProvider>
  )
}

export default App