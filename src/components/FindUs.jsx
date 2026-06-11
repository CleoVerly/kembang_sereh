import {
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from './icons'

const contactInfo = [
  {
    icon: LocationIcon,
    title: 'Alamat',
    value: 'Jl. Kenangan Manis No.16, Kudus',
  },
  {
    icon: PhoneIcon,
    title: 'Telepon / WhatsApp',
    value: '+62 8564 0413 469',
  },
  {
    icon: EmailIcon,
    title: 'Email',
    value: 'satria.narendra23@mhs.uinjkt.ac.id',
  },
]

const socials = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: YoutubeIcon, label: 'YouTube' },
]

const QR_SRC =
  'https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/6281234567890'

export default function FindUs() {
  return (
    <section id="find-us" className="py-16 sm:py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Temukan Kami
          </h2>
          <p className="text-md sm:text-lg mt-2 text-base-content/80">
            Kami Siap Melayani Anda
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center md:items-start">
          <div className="text-center md:text-left w-full md:w-auto">
            {contactInfo.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="flex items-center justify-center md:justify-start mb-4"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl">{title}</h4>
                  <p className="text-sm sm:text-base">{value}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-primary hover:text-primary-focus"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[14rem] sm:max-w-[16rem] flex justify-center md:justify-end">
            <div className="mockup-phone">
              <div className="mockup-phone-camera"></div>
              <div className="mockup-phone-display">
                <div className="flex h-full w-full flex-col items-center justify-center bg-base-200 p-6 text-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-primary">
                    Pesan Langsung!
                  </h3>
                  <p className="text-xs sm:text-sm mb-1 leading-snug">
                    Scan QR Code di bawah untuk memesan melalui WhatsApp atau
                    marketplace kami.
                  </p>
                  <img
                    src={QR_SRC}
                    alt="QR Code Pemesanan"
                    loading="lazy"
                    className="mx-auto my-3 rounded"
                  />
                  <p className="text-xs">Atau kunjungi outlet kami!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
