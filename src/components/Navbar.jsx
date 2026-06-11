import { useEffect, useState } from 'react'
import { navLinks } from '../data/navLinks'
import { LeafIcon, MenuIcon, WhatsAppIcon } from './icons'

const WA_LINK = 'https://wa.me/6285640413469'

export default function Navbar({ onOpenDrawer }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`navbar fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base-100/85 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(43,37,32,0.4)] border-b border-base-300/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex w-full items-center px-2 sm:px-4">
        <div className="flex-1">
          <a
            href="#hero"
            className={`btn btn-ghost gap-2 px-2 text-xl sm:text-2xl font-display font-semibold transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <span
              className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${
                scrolled ? 'bg-primary/10 text-primary' : 'bg-white/15 text-white'
              }`}
            >
              <LeafIcon className="h-5 w-5" />
            </span>
            Kembang Sereh
          </a>
        </div>

        <nav className="hidden lg:flex flex-none items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform hover:after:scale-x-100 ${
                scrolled
                  ? 'text-base-content/80 hover:text-primary'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-sm ml-2 rounded-full gap-2 border-none ${
              scrolled
                ? 'bg-primary text-primary-content hover:bg-primary/90'
                : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan
          </a>
        </nav>

        <div className="flex-none lg:hidden">
          <button
            type="button"
            aria-label="Buka menu"
            className={`btn btn-square btn-ghost ${scrolled ? 'text-primary' : 'text-white'}`}
            onClick={onOpenDrawer}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
