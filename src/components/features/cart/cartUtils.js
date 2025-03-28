import { createContext, useContext } from 'react'

export const CartContext = createContext()

function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context;
}

export { useCart }