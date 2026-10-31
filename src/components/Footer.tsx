import logoMark from '../assets/images/logo-mark.webp'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-navy-900 py-6 text-center text-sm text-white/70">
      <img src={logoMark} alt="" className="mx-auto mb-3 h-10 w-auto rounded-lg bg-white p-1" />
      <p>&copy; {YEAR} KeyRoute Holidays. All rights reserved.</p>
      <p className="mt-1 text-xs italic text-white/50">Every journey, the right route.</p>
    </footer>
  )
}

export default Footer
