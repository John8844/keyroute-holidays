import alleppey from '../assets/images/dest-alleppey.webp'
import belur from '../assets/images/dest-belur.webp'
import chikkamagaluru from '../assets/images/dest-chikkamagaluru.webp'
import halebidu from '../assets/images/dest-halebidu.webp'
import keralaHills from '../assets/images/dest-kerala-hills.webp'
import kochi from '../assets/images/dest-kochi.webp'
import munnar from '../assets/images/dest-munnar.webp'
import mysore from '../assets/images/dest-mysore.webp'
import sakleshpur from '../assets/images/dest-sakleshpur.webp'
import vagamon from '../assets/images/dest-vagamon.webp'

const DESTINATIONS = [
  { name: 'Munnar', state: 'Kerala', note: 'Misty hills & tea gardens', image: munnar },
  { name: 'Vagamon', state: 'Kerala', note: 'Green meadows & pine forests', image: vagamon },
  { name: 'Alleppey', state: 'Kerala', note: 'Houseboats on the backwaters', image: alleppey },
  { name: 'Kochi', state: 'Kerala', note: 'Coastal vibes & Chinese nets', image: kochi },
  { name: 'Wayanad', state: 'Kerala', note: 'Lush valleys & waterfalls', image: keralaHills },
  { name: 'Mysore', state: 'Karnataka', note: 'Royal palace & heritage', image: mysore },
  { name: 'Chikkamagaluru', state: 'Karnataka', note: 'Coffee estates & peaks', image: chikkamagaluru },
  { name: 'Belur', state: 'Karnataka', note: 'Hoysala temple architecture', image: belur },
  { name: 'Halebidu', state: 'Karnataka', note: 'Timeless carved temples', image: halebidu },
  { name: 'Sakleshpur', state: 'Karnataka', note: 'Waterfalls & Western Ghats', image: sakleshpur },
]

function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-navy-800">Popular Destinations</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-forest-900/75">
        South India is calling &mdash; from Kerala's backwaters to Karnataka's
        heritage temples and coffee hills.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {DESTINATIONS.map((dest) => (
          <div
            key={dest.name}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm ring-1 ring-forest-100"
          >
            <img
              src={dest.image}
              alt={`${dest.name}, ${dest.state}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${
                dest.state === 'Kerala' ? 'bg-forest-600' : 'bg-navy-700'
              }`}
            >
              {dest.state}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-3 text-white">
              <h3 className="font-bold">{dest.name}</h3>
              <p className="text-xs text-white/80">{dest.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Destinations
