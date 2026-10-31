import { MapPin, Phone } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../contact'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'

function Contact() {
  return (
    <section id="contact" className="bg-forest-700 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">Book Your Next Adventure</h2>
        <p className="mx-auto mt-3 max-w-2xl text-forest-100/85">
          Tell us where you want to go, your dates and group size &mdash; we'll
          plan the right route for you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-forest-50 sm:flex-row sm:gap-10">
          <a href={PHONE_TEL} className="flex items-center gap-2 hover:underline">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY} (Call / WhatsApp)
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <InstagramIcon className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> All-India Tours &mdash; Kanyakumari to Kashmir
          </span>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-route-500 px-6 py-3 font-semibold text-white hover:bg-route-600"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
