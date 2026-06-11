import { useEffect, useState } from 'react'
import { navLinks } from '../data/navLinks'
import { LeafIcon, MenuIcon } from './icons'

export default function Navbar({ onOpenDrawer }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`navbar fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base-100 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex w-full items-center">
        <div className="flex-1">
          <a
            href="#hero"
            className={`btn btn-ghost text-xl sm:text-2xl font-bold ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <LeafIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2" />
            Kembang Sereh
          </a>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    scrolled
                      ? 'hover:text-primary'
                      : 'text-white hover:text-white/80'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none lg:hidden">
          <button
            type="button"
            aria-label="open sidebar"
            className={`btn btn-square btn-ghost ${
              scrolled ? '' : 'text-white'
            }`}
            onClick={onOpenDrawer}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
