import { MapPin, Phone } from 'lucide-react'
import heroPoster from '../assets/images/poster-kerala-karnataka.webp'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../contact'
import { WhatsAppIcon } from './BrandIcons'

const STATS = [
  { value: '₹3,500', label: 'Kerala from / person' },
  { value: '₹4,500', label: 'Karnataka from / person' },
  { value: '24 × 7', label: 'Trip support' },
]

function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-sky-100 via-forest-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-forest-600">
            <MapPin className="h-4 w-4 flex-shrink-0 text-route-500" /> All-India Tours &amp; Travels &middot; Kanyakumari to Kashmir
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-navy-800 md:text-5xl">
            Every Journey,{' '}
            <span className="text-route-500">The Right Route.</span>
          </h1>
          <p className="mt-5 text-lg text-forest-900/75">
            Misty mountains, winding roads, peaceful backwaters and timeless
            heritage &mdash; KeyRoute Holidays plans affordable Kerala &amp;
            Karnataka sightseeing packages, college trips and friends getaways
            you'll remember forever.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#packages"
              className="rounded-full bg-forest-600 px-6 py-3 font-semibold text-white hover:bg-forest-700"
            >
              Explore Packages
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-forest-600 px-6 py-3 font-semibold text-forest-700 hover:bg-forest-100"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <a
            href={PHONE_TEL}
            className="mt-6 inline-flex items-center gap-2 text-sm text-forest-800/80 hover:text-route-600"
          >
            <Phone className="h-4 w-4 text-route-500" />
            Call / WhatsApp: <span className="font-semibold">{PHONE_DISPLAY}</span>
          </a>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/80 p-3 text-center shadow-sm ring-1 ring-forest-100">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-lg font-extrabold text-navy-800">{stat.value}</dd>
                <dd className="text-[11px] leading-tight text-forest-800/70" aria-hidden="true">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="w-full max-w-md justify-self-center overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white md:max-w-none">
          <img
            src={heroPoster}
            alt="Explore Kerala & Karnataka sightseeing packages with KeyRoute Holidays"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
