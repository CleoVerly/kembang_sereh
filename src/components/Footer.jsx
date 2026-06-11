import { LeafIcon, TwitterIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from './icons'
import { navLinks } from '../data/navLinks'
import { KawungPattern, TumpalDivider, AKSARA_KEMBANG_SEREH } from './decor'

const socials = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: YoutubeIcon, label: 'YouTube' },
  { icon: FacebookIcon, label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-neutral text-neutral-content">
      <TumpalDivider flip className="text-base-100" />
      <KawungPattern className="absolute inset-0 text-white/[0.04]" />

      <div className="container relative mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                <LeafIcon className="h-6 w-6" />
              </span>
              <span className="font-display text-2xl font-semibold">Kembang Sereh</span>
            </div>
            <p className="font-aksara mt-3 text-lg text-neutral-content/50" aria-hidden="true">
              {AKSARA_KEMBANG_SEREH}
            </p>
            <p className="mt-2 max-w-xs text-sm text-neutral-content/70">
              Menyajikan kesegaran alami khas nusantara sejak 2024.
            </p>
          </div>

          {/* Navigasi */}
          <div className="md:justify-self-center">
            <h4 className="font-semibold uppercase tracking-wider text-neutral-content/60 text-sm">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-content/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold uppercase tracking-wider text-neutral-content/60 text-sm">
              Ikuti Kami
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-accent-content"
                >
                  <Icon className="h-5 w-5 fill-current" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-neutral-content/60">
          Copyright © {year} Kembang Sereh — Segarkan harimu, alami rasanya.
        </div>
      </div>
    </footer>
  )
}
