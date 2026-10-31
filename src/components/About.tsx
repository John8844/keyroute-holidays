import { Compass, Mountain, ShieldCheck, Users } from 'lucide-react'
import logo from '../assets/images/logo.webp'

const BADGES = [
  { icon: ShieldCheck, label: 'Safe & Reliable' },
  { icon: Users, label: 'Group & Family Trips' },
  { icon: Mountain, label: 'Scenic Destinations' },
  { icon: Compass, label: 'Custom Itineraries' },
]

const PARTNERS = ['Rashmi Travels', 'Rudra Holidays', 'Al-Badar Holidays']

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-forest-100 md:order-1">
          <img
            src={logo}
            alt="KeyRoute Holidays — Every journey, the right route"
            className="mx-auto h-auto w-full max-w-xs"
          />
          <p className="mt-6 text-center text-lg font-semibold text-navy-800">
            "Travel Together, Grow Together."
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs font-semibold text-forest-800">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 rounded-lg bg-forest-50 py-3">
                <Icon className="h-5 w-5 text-route-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-navy-800">About KeyRoute Holidays</h2>
          <p className="mt-4 text-forest-900/75">
            KeyRoute Holidays is an all-India tours &amp; travels company &mdash;
            from Kanyakumari to Kashmir. We specialise in sightseeing packages
            across Kerala and Karnataka, plus customised group trips for
            college students, IT teams, friends and families.
          </p>
          <p className="mt-4 text-forest-900/75">
            Comfortable vehicles, handpicked stays, tasty &amp; hygienic meals,
            campfires, music and memories &mdash; we take care of the route so
            you can enjoy the journey. Whether it's a quick weekend escape or a
            longer holiday, we'll help you plan a trip worth remembering.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-forest-600">
            Travelling with our partners
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold text-navy-700">
            {PARTNERS.map((partner) => (
              <span key={partner} className="rounded-full border border-navy-600/30 px-3 py-1">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
