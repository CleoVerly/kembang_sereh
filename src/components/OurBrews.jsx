import { products } from '../data/products'
import { CartIcon } from './icons'

function ProductCard({ product }) {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-6 pt-6 sm:px-10 sm:pt-10">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center p-6 sm:p-8">
        <h3 className="card-title text-xl sm:text-2xl">{product.name}</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          {product.description}
        </p>
        <p className="text-lg sm:text-xl font-semibold text-primary mt-2">
          {product.price}
        </p>
        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-sm sm:btn-md">
            <CartIcon className="w-5 h-5 mr-2" />
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  )
}

export default function OurBrews() {
  return (
    <section id="our-brews" className="py-16 sm:py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Pilihan Segar Kami
          </h2>
          <p className="text-md sm:text-lg mt-2 text-base-content/80">
            Temukan Favoritmu
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
