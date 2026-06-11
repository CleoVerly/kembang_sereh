import { LeafIcon, TwitterIcon, YoutubeIcon, FacebookIcon } from './icons'

const socials = [
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: YoutubeIcon, label: 'YouTube' },
  { icon: FacebookIcon, label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-8 md:p-10 bg-primary text-primary-content">
      <aside>
        <LeafIcon className="w-10 h-10" />
        <p className="font-bold text-lg sm:text-xl">
          Kembang Sereh
          <br />
          <span className="font-normal text-sm sm:text-base">
            Menyajikan Kesegaran Alami Sejak 2024
          </span>
        </p>
        <p className="text-xs sm:text-sm">
          Copyright © {year} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {socials.map(({ icon: Icon, label }) => (
            <a key={label} href="#" aria-label={label}>
              <Icon className="fill-current hover:opacity-75 transition-opacity" />
            </a>
          ))}
        </div>
      </nav>
    </footer>
  )
}
