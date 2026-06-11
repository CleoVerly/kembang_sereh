import background from '../assets/background.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-neutral/60"></div>
      <div className="hero-content text-center text-neutral-content px-4">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white">
            Kembang Sereh
          </h1>
          <p className="mb-5 text-lg sm:text-xl text-gray-200">
            Segarkan Harimu, Alami Rasanya. Nikmati paduan sereh dan bunga telang
            yang menyehatkan dan menyegarkan.
          </p>
          <a href="#our-brews" className="btn btn-primary btn-md sm:btn-lg">
            Lihat Menu
          </a>
        </div>
      </div>
    </section>
  )
}
