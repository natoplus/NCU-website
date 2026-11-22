import { useEffect } from 'react'
import { useRouter } from 'next/router'

const revealSelector = [
  'main > section:not(.hero-section)',
  '.universe-card',
  '.path-card',
  '.feature-card',
  '.empty-state',
  '.legal-section',
].join(', ')

export default function PageScrollReveal() {
  const { asPath } = useRouter()

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    if (items.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('scroll-reveal-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' })

    items.forEach((element, index) => {
      element.classList.add('scroll-reveal-item')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      items.forEach((element) => {
        element.classList.remove('scroll-reveal-item', 'scroll-reveal-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [asPath])

  return null
}
