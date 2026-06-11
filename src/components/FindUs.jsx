import {
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  WhatsAppIcon,
} from './icons'
import { Reveal, SectionHeading, KawungPattern } from './decor'

const WA_NUMBER = '6285640413469'
const WA_LINK = `https://wa.me/${WA_NUMBER}`

const contactInfo = [
  { icon: LocationIcon, title: 'Alamat', value: 'Jl. Kenangan Manis No.16, Kudus' },
  { icon: PhoneIcon, title: 'Telepon / WhatsApp', value: '+62 8564 0413 469' },
  { icon: EmailIcon, title: 'Email', value: 'satria.narendra23@mhs.uinjkt.ac.id' },
]

const socials = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: YoutubeIcon, label: 'YouTube' },
]

const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
  WA_LINK
)}`

export default function FindUs() {
  return (
    <section id="find-us" className="bg-base-100 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          kicker="Kontak"
          title="Temukan Kami"
          subtitle="Kami siap melayani Anda setiap hari."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Info kontak */}
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-base-300 bg-base-200/60 p-6 sm:p-8">
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, title, value }) => (
                  <div key={title} className="flex items-center gap-4">
                    <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base sm:text-lg text-base-content">
                        {title}
                      </h4>
                      <p className="truncate text-sm sm:text-base text-base-content/70">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-base-300 pt-6">
                <p className="mb-3 text-sm font-medium text-base-content/70">
                  Ikuti kami
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full bg-base-100 text-primary ring-1 ring-base-300 transition-colors hover:bg-primary hover:text-primary-content"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Kartu pemesanan */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-neutral p-6 text-center text-primary-content sm:p-8">
              <KawungPattern className="absolute inset-0 text-white/10" />
              <div className="relative">
                <h3 className="font-display text-xl sm:text-2xl font-semibold">
                  Pesan Langsung!
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-primary-content/80">
                  Scan QR di bawah untuk memesan lewat WhatsApp.
                </p>
                <div className="mx-auto mt-5 w-fit rounded-xl bg-white p-3 shadow-lg">
                  <img
                    src={QR_SRC}
                    alt="QR Code pemesanan WhatsApp"
                    loading="lazy"
                    width="160"
                    height="160"
                    className="rounded"
                  />
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-5 w-full rounded-full border-none bg-accent text-accent-content gap-2 hover:bg-accent"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
