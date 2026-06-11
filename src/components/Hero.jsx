import background from '../assets/background.webp'
import { ArrowRightIcon, WhatsAppIcon } from './icons'
import { KawungPattern, AKSARA_KEMBANG_SEREH } from './decor'

const WA_LINK = 'https://wa.me/6285640413469'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background + ken-burns */}
      <div
        className="absolute inset-0 animate-kenburns bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />
      {/* Gradient indigo untuk kontras teks */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral/85 via-primary/55 to-neutral/80" />
      {/* Motif kawung tipis */}
      <KawungPattern className="absolute inset-0 text-white/[0.07]" />

      <div className="container relative z-10 mx-auto px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="font-aksara text-2xl sm:text-3xl text-white/70" aria-hidden="true">
            {AKSARA_KEMBANG_SEREH}
          </p>

          <h1 className="font-display mt-2 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
            Kembang Sereh
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-white/85">
            Segarkan harimu, alami rasanya. Paduan sereh dan bunga telang yang
            menyehatkan, diracik dengan kehangatan tradisi Jawa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#our-brews"
              className="btn btn-lg rounded-full border-none bg-accent text-accent-content gap-2 shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] hover:bg-accent"
            >
              Lihat Menu
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg rounded-full gap-2 border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/40"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Petunjuk scroll */}
      <a
        href="#our-story"
        aria-label="Gulir ke bawah"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-current" />
        </span>
      </a>
    </section>
  )
}
