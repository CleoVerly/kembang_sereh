import momen1 from '../assets/momen_kembang_sereh.webp'
import momen2 from '../assets/momen_kembang_sereh2.webp'
import momen3 from '../assets/momen_kembang_sereh3.webp'
import momen4 from '../assets/momen_kembang_sereh4.webp'
import { Reveal, SectionHeading } from './decor'

const gallery = [
  { src: momen1, caption: 'Segar di setiap suasana' },
  { src: momen2, caption: 'Teman ngobrol sore' },
  { src: momen3, caption: 'Warna alami bunga telang' },
  { src: momen4, caption: 'Kehangatan tradisi' },
]

export default function Moments() {
  return (
    <section id="moments" className="bg-base-200 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          kicker="Galeri"
          title="Momen Kembang Sereh"
          subtitle="Keceriaan dalam setiap gelas."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 100}
              className="group relative h-52 overflow-hidden rounded-2xl shadow-sm ring-1 ring-base-300 sm:h-64"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 via-neutral/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
