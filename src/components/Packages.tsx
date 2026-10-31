import {
  BedDouble,
  CalendarDays,
  Camera,
  Car,
  Flame,
  Headphones,
  Landmark,
  MapPin,
  Palmtree,
  Truck,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import { whatsappLink } from '../contact'

const PACKAGES = [
  {
    state: 'Kerala',
    tagline: "God's Own Country",
    icon: Palmtree,
    duration: '1 Night 2 Days',
    price: '₹3,500',
    places: ['Munnar', 'Vagamon', 'Alleppey', 'Kochi', 'Thekkady', 'Wayanad', 'Varkala', 'Marayoor', 'Athirappilly'],
    accent: 'from-forest-600 to-forest-900',
  },
  {
    state: 'Karnataka',
    tagline: 'Land of Diverse Experiences',
    icon: Landmark,
    duration: '2 Nights 3 Days',
    price: '₹4,500',
    places: ['Mysore', 'Chikkamagaluru', 'Coorg', 'Dandeli', 'Gokarna', 'Hampi', 'Sakleshpur', 'Belur', 'Halebidu'],
    accent: 'from-navy-700 to-navy-900',
  },
]

const INCLUDES = [
  { icon: Car, label: 'Pick-up & Drop', note: 'to nearest railway station' },
  { icon: BedDouble, label: 'Accommodation', note: 'comfortable stay' },
  { icon: UtensilsCrossed, label: 'Breakfast & Dinner', note: 'tasty & hygienic meals' },
  { icon: Truck, label: 'Jeep Safari', note: 'if available' },
  { icon: Flame, label: 'Campfire', note: 'if available' },
  { icon: Camera, label: 'Sightseeing', note: 'as per itinerary' },
  { icon: Headphones, label: '24 × 7 Support', note: 'throughout the trip' },
]

function Packages() {
  return (
    <section id="packages" className="bg-forest-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-route-600">
          Scenic places &middot; Great experiences &middot; Affordable packages
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-navy-800">
          Kerala &amp; Karnataka Sightseeing Packages
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-forest-900/75">
          One trip. Endless memories. Pick a state, gather your group and we'll
          handle the rest.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.state}
              className={`flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${pkg.accent} text-white shadow-lg`}
            >
              <div className="flex items-center gap-4 p-6 pb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <pkg.icon className="h-6 w-6 text-route-400" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">{pkg.state}</h3>
                  <p className="text-sm text-white/70">{pkg.tagline}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 px-6 text-sm text-white/90 sm:grid-cols-3">
                {pkg.places.map((place) => (
                  <li key={place} className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-route-400" />
                    {place}
                  </li>
                ))}
                <li className="text-white/60">&amp; more</li>
              </ul>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 bg-black/20 p-6 pt-5">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80">
                    <CalendarDays className="h-4 w-4" /> {pkg.duration}
                  </p>
                  <p className="mt-1 text-4xl font-extrabold text-route-400">
                    {pkg.price}
                    <span className="ml-1 text-sm font-medium text-white/70">/ person</span>
                  </p>
                </div>
                <a
                  href={whatsappLink(
                    `Hi KeyRoute Holidays! I'm interested in the ${pkg.state} ${pkg.duration} package (${pkg.price}/person).`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 hover:bg-forest-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-route-500 px-6 py-4 text-center text-white shadow">
          <Users className="h-6 w-6 flex-shrink-0" />
          <p className="font-semibold">
            Strictly <span className="text-xl font-extrabold">7 PAX</span> needed &mdash; minimum 7 people per booking.
          </p>
        </div>

        <h3 className="mt-16 text-center text-2xl font-bold text-navy-800">Package Includes</h3>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {INCLUDES.map(({ icon: Icon, label, note }) => (
            <div key={label} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-forest-100">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-navy-800">{label}</p>
              <p className="mt-0.5 text-xs text-forest-900/60">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
