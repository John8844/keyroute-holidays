import { HeartHandshake, Route, ShieldCheck, Sparkles, Users, Wallet } from 'lucide-react'

const POINTS = [
  { icon: ShieldCheck, title: 'Safe & Reliable Travel', desc: 'Comfortable vehicles and experienced drivers on every route.' },
  { icon: HeartHandshake, title: 'Family Friendly Trips', desc: 'Relaxed itineraries and stays that suit all ages.' },
  { icon: Users, title: 'Group Trips', desc: 'College, IT team and friends trips planned end to end.' },
  { icon: Sparkles, title: 'Memorable Experiences', desc: 'Campfires, music, jeep safaris and scenic stops.' },
  { icon: Route, title: 'Customized Itineraries', desc: 'Tell us your dates and wishlist — we build the route.' },
  { icon: Wallet, title: 'Budget Friendly Packages', desc: 'Kerala from ₹3,500 and Karnataka from ₹4,500 per person.' },
]

function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-navy-800">Why Travel with KeyRoute</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-forest-600">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-navy-800">{title}</h3>
            <p className="mt-2 text-sm text-forest-900/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
