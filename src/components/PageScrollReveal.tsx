import { useEffect } from 'react'
import { useRouter } from 'next/router'

const revealSelector = [
  'main > section:not(.hero-section):not(.home-hero)',
  '.universe-card',
  '.path-card',
  '.feature-card',
  '.family-card',
  '.news-empty',
  '.empty-state',
  '.legal-section',
  'main .button',
  'main button[type="submit"]',
].join(', ')

export default function PageScrollReveal() {
  const { asPath } = useRouter()

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    if (items.length === 0 && parallaxItems.length === 0) return

    let observer: IntersectionObserver | undefined
    if (items.length > 0) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('scroll-reveal-visible')
          revealObserver.unobserve(entry.target)
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' })
      observer = revealObserver
    }

    items.forEach((element, index) => {
      element.classList.add('scroll-reveal-item')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
      observer?.observe(element)
    })

    let frame = 0
    const updateParallax = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        parallaxItems.forEach((element) => {
          const bounds = element.getBoundingClientRect()
          if (bounds.bottom < 0 || bounds.top > window.innerHeight) return
          const speed = Number(element.dataset.parallax) || 0.06
          const distance = window.innerHeight / 2 - (bounds.top + bounds.height / 2)
          const offset = Math.max(-28, Math.min(28, distance * speed))
          element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
        })
      })
    }

    if (parallaxItems.length > 0) {
      updateParallax()
      window.addEventListener('scroll', updateParallax, { passive: true })
      window.addEventListener('resize', updateParallax)
    }

    return () => {
      observer?.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
      items.forEach((element) => {
        element.classList.remove('scroll-reveal-item', 'scroll-reveal-visible')
        element.style.removeProperty('--reveal-delay')
      })
      parallaxItems.forEach((element) => element.style.removeProperty('--parallax-y'))
    }
  }, [asPath])

  return null
}
