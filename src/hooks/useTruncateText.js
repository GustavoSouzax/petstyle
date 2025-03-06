import { useCallback } from "react"
import { useWindowSize } from "./useWindowSize"
import { SCREEN_BREAKPOINTS, TITLE_LENGTHS } from "../constants"

/**
 * Hook personalizado para truncar texto com base no tamanho da tela
 * @returns {Function}
 */
export function useTruncateText() {
  const { width } = useWindowSize()

  const truncateText = useCallback(
    (text, customLengths = TITLE_LENGTHS) => {
      if (!text) return ""

      if (width < SCREEN_BREAKPOINTS.MOBILE) {
        return text.length > customLengths.MOBILE ? `${text.substring(0, customLengths.MOBILE)}...` : text
      }

      if (width < SCREEN_BREAKPOINTS.TABLET) {
        return text.length > customLengths.TABLET ? `${text.substring(0, customLengths.TABLET)}...` : text
      }

      if (width >= SCREEN_BREAKPOINTS.DESKTOP) {
        return text.length > customLengths.DESKTOP ? `${text.substring(0, customLengths.DESKTOP)}...` : text
      }

      return text
    },
    [width],
  )

  return truncateText
}