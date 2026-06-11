import momen1 from '../assets/momen_kembang_sereh.webp'
import momen2 from '../assets/momen_kembang_sereh2.webp'
import momen3 from '../assets/momen_kembang_sereh3.webp'
import momen4 from '../assets/momen_kembang_sereh4.webp'

const gallery = [momen1, momen2, momen3, momen4]

export default function Moments() {
  return (
    <section id="moments" className="py-16 sm:py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Momen Kembang Sereh
          </h2>
          <p className="text-md sm:text-lg mt-2 text-base-content/80">
            Keceriaan dalam Setiap Gelas
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((src, index) => (
            <div
              key={src}
              className="h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Momen Kembang Sereh ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
