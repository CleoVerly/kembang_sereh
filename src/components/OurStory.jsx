import proses from '../assets/proses_pembuatan.webp'
import { HeartIcon } from './icons'
import { Reveal, SectionHeading, KawungPattern } from './decor'

const highlights = [
  { value: '100%', label: 'Bahan Alami' },
  { value: '2024', label: 'Sejak Berdiri' },
  { value: '3', label: 'Varian Rasa' },
]

export default function OurStory() {
  return (
    <section id="our-story" className="relative overflow-hidden bg-base-200 py-20 sm:py-28">
      <div className="container relative mx-auto px-6">
        <SectionHeading
          kicker="Cerita Kami"
          title="Di Balik Setiap Tegukan"
          subtitle="Kesegaran sejati lahir dari kekayaan alam Indonesia dan ketelatenan tangan."
        />

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <Reveal className="w-full lg:w-1/2">
            <div className="relative">
              {/* aksen kawung di belakang gambar */}
              <KawungPattern className="absolute -left-5 -top-5 h-28 w-28 text-accent/30" />
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-secondary/40" />
              <img
                src={proses}
                alt="Proses pembuatan Kembang Sereh"
                loading="lazy"
                className="relative w-full rounded-2xl object-cover shadow-xl ring-1 ring-base-300"
              />
            </div>
          </Reveal>

          <div className="w-full lg:w-1/2">
            <Reveal as="p" className="text-base sm:text-lg leading-relaxed text-base-content/90">
              <strong className="text-primary">Kembang Sereh</strong> lahir dari
              kecintaan kami pada kekayaan alam Indonesia dan keinginan menyajikan
              minuman yang tak hanya lezat, tetapi juga membawa manfaat bagi tubuh.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-4 text-base sm:text-lg leading-relaxed text-base-content/80">
              Setiap helai sereh pilihan dan kelopak bunga telang kami olah dengan
              penuh ketelitian — menciptakan harmoni rasa yang unik dan tampilan
              yang memikat, terinspirasi tradisi minuman herbal Jawa.
            </Reveal>

            <Reveal delay={200} className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-base-300 bg-base-100 p-4 text-center"
                >
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-base-content/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={280} className="mt-8 flex items-center gap-3">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-error/10 text-error">
                <HeartIcon className="h-6 w-6" />
              </span>
              <p className="font-display text-lg font-medium text-base-content">
                Dibuat dengan cinta dan bahan alami.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
