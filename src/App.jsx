import { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { navLinks } from './data/navLinks'

// Komponen di bawah hero dimuat secara lazy (code-splitting) agar
// muatan awal halaman ringan saat user pertama kali masuk.
const OurStory = lazy(() => import('./components/OurStory'))
const OurBrews = lazy(() => import('./components/OurBrews'))
const Moments = lazy(() => import('./components/Moments'))
const FindUs = lazy(() => import('./components/FindUs'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return (
    <div className="flex justify-center py-20">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  )
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="drawer drawer-end bg-base-100 text-base-content antialiased">
      <input
        id="mobile-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={(e) => setDrawerOpen(e.target.checked)}
      />

      <div className="drawer-content flex flex-col">
        <Navbar onOpenDrawer={() => setDrawerOpen(true)} />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <OurStory />
            <OurBrews />
            <Moments />
            <FindUs />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>

      <div className="drawer-side z-[100]">
        <label
          htmlFor="mobile-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {navLinks.map((link) => (
            <li key={link.href} className="py-2">
              <a
                href={link.href}
                className="text-lg hover:text-primary"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
