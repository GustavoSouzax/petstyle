import { useState, useEffect } from 'react'

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up")
    const [lastScrollTop, setLastScrollTop] = useState(0)

    useEffect(() => {
        const threshold = 10
        let ticking = false

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset
            if (Math.abs(scrollY - lastScrollTop) < threshold) {
                ticking = false
                return
            }
            setScrollDirection(scrollY > lastScrollTop ? "down" : "up")
            setLastScrollTop(scrollY > 0 ? scrollY : 0)
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection)
                ticking = true
            }
        }

        const onKeyDown = (e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                const scrollY = window.pageYOffset
                const direction = e.key === 'ArrowUp' ? "up" : "down"
                setScrollDirection(direction)
                setLastScrollTop(scrollY > 0 ? scrollY : 0)
            }
        }

        window.addEventListener("scroll", onScroll)
        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [lastScrollTop])

    return scrollDirection
}