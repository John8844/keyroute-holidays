import { useEffect, useState } from 'react'
import { Bus, CalendarDays, MapPin, X } from 'lucide-react'
import posterBoys from '../assets/images/poster-boys-trip.webp'
import posterFriends from '../assets/images/poster-it-friends-trip.webp'
import posterKerala from '../assets/images/poster-kerala-karnataka.webp'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../contact'
import { InstagramIcon } from './BrandIcons'

const TRIPS = [
  {
    title: 'IT Friends Trip — Karnataka',
    partner: 'with Rashmi Travels',
    poster: posterFriends,
    route: 'Chikkamagaluru • Belur • Sakleshpur',
    dates: 'November 27 – 29',
    details: 'Pickup & drop Bengaluru · Semi-sleeper bus · Guests from Chennai',
  },
  {
    title: 'Boys Trip from Chennai — Kerala',
    partner: 'with Rudra Holidays',
    poster: posterBoys,
    route: 'Munnar • Vagamon • Cochin',
    dates: 'September 03 – 05',
    details: 'Pickup & drop Ernakulam · 14-seater Tempo Traveller · Chennai Institute of Technology',
  },
  {
    title: 'Explore Kerala & Karnataka',
    partner: 'Sightseeing packages',
    poster: posterKerala,
    route: 'Munnar • Alleppey • Mysore • Coorg & more',
    dates: '1N/2D & 2N/3D packages',
    details: 'From ₹3,500 per person · Minimum 7 people per booking',
  },
]

function Trips() {
  const [active, setActive] = useState<(typeof TRIPS)[number] | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="trips" className="bg-navy-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">Recent Trips</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          New places. New memories. Same friends. A look at the journeys we've
          planned recently.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRIPS.map((trip) => (
            <article key={trip.title} className="flex flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => setActive(trip)}
                className="block overflow-hidden"
                aria-label={`View poster: ${trip.title}`}
              >
                <img
                  src={trip.poster}
                  alt={trip.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </button>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-route-400">{trip.partner}</p>
                <h3 className="mt-1 text-lg font-bold">{trip.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-route-400" /> {trip.route}
                  </li>
                  <li className="flex gap-2">
                    <CalendarDays className="mt-0.5 h-4 w-4 flex-shrink-0 text-route-400" /> {trip.dates}
                  </li>
                  <li className="flex gap-2">
                    <Bus className="mt-0.5 h-4 w-4 flex-shrink-0 text-route-400" /> {trip.details}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
          >
            <InstagramIcon className="h-5 w-5" /> See more on Instagram {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={active.poster}
            alt={active.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

export default Trips
