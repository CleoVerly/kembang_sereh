import proses from '../assets/proses_pembuatan.webp'
import { HeartIcon } from './icons'

export default function OurStory() {
  return (
    <section id="our-story" className="py-16 sm:py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Cerita Kami
          </h2>
          <p className="text-md sm:text-lg mt-2 text-base-content/80">
            Di Balik Setiap Tegukan Kesegaran
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="md:w-1/2">
            <img
              src={proses}
              alt="Proses Pembuatan Kembang Sereh"
              loading="lazy"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 text-base sm:text-lg">
            <p className="mb-4">
              <strong>Kembang Sereh</strong> lahir dari kecintaan kami pada
              kekayaan alam Indonesia dan keinginan untuk menyajikan minuman yang
              tidak hanya lezat, tetapi juga membawa manfaat bagi tubuh. Kami
              percaya bahwa kesegaran sejati datang dari bahan-bahan alami
              berkualitas.
            </p>
            <p className="mb-4">
              Setiap helai sereh pilihan dan kelopak bunga telang kami olah dengan
              penuh ketelitian, menciptakan harmoni rasa yang unik dan tampilan
              yang memikat. Kami berkomitmen untuk menghadirkan pengalaman minum
              yang otentik dan menyegarkan bagi Anda.
            </p>
            <div className="flex items-center mt-6">
              <HeartIcon className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
              <p className="font-semibold">Dibuat dengan Cinta dan Bahan Alami.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
