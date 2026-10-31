import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoMark from '../assets/images/logo-mark.webp'
import { whatsappLink } from '../contact'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#packages', label: 'Packages' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#trips', label: 'Trips' },
  { href: '#contact', label: 'Contact' },
]

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2">
      <img src={logoMark} alt="KeyRoute Holidays logo" className="h-11 w-auto" />
      <span className="text-xl font-extrabold uppercase leading-none tracking-tight">
        <span className="text-route-500">Key</span>
        <span className="text-navy-800">Route</span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.3em] text-forest-600">
          Holidays
        </span>
      </span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-forest-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <BrandMark />
          <nav className="hidden gap-8 text-sm font-medium text-navy-800 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-route-600">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-route-500 px-4 py-2 text-sm font-semibold text-white hover:bg-route-600 md:px-5"
            >
              Book Now
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-lg p-2 text-navy-800 hover:bg-forest-100 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop — kept outside <header> so it isn't clipped by the header's backdrop-blur containing block */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Right-side drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80vw] flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-forest-100 px-5 py-4">
          <BrandMark />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-2 text-navy-800 hover:bg-forest-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4 text-base font-medium text-navy-800">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-forest-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto border-t border-forest-100 p-5">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block rounded-full bg-route-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-route-600"
          >
            Book Your Trip Now
          </a>
        </div>
      </aside>
    </>
  )
}

export default Header
