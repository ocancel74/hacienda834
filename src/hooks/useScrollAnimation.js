import { useEffect, useRef } from 'react'

/**
 * Agrega la clase `visible` al elemento referenciado cuando entra en el viewport.
 * Combina con las clases `reveal` y `delay-*` definidas en index.css.
 *
 * @param {number} threshold  — Qué fracción del elemento debe ser visible (0–1)
 * @param {string} rootMargin — Margen del observer (ej. "-100px")
 */
export function useScrollAnimation(threshold = 0.1, rootMargin = '0px') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
