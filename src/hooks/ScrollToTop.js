import { useEffect } from "react"
import { useLocation } from "react-router"

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!pathname.startsWith("/")) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}