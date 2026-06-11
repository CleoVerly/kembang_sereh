import { products } from '../data/products'
import { WhatsAppIcon } from './icons'
import { Reveal, SectionHeading, TumpalDivider } from './decor'

const WA_LINK = 'https://wa.me/6285640413469'

function ProductCard({ product, index }) {
  return (
    <Reveal
      delay={index * 120}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-content shadow">
          {product.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-base-content">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm sm:text-base leading-relaxed text-base-content/75">
          {product.description}
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-5 w-full rounded-full border-none bg-primary text-primary-content gap-2 hover:bg-primary/90"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Pesan Sekarang
        </a>
      </div>
    </Reveal>
  )
}

export default function OurBrews() {
  return (
    <section id="our-brews" className="relative bg-base-100 py-20 sm:py-28">
      <TumpalDivider className="absolute inset-x-0 top-0 text-base-200" />
      <div className="container mx-auto px-6">
        <SectionHeading
          kicker="Menu"
          title="Pilihan Segar Kami"
          subtitle="Temukan favoritmu dari racikan sereh dan bunga telang kami."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
