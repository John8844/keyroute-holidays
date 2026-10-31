export const PHONE_DISPLAY = '+91 63747 70600'
export const PHONE_TEL = 'tel:+916374770600'
export const INSTAGRAM_HANDLE = '@keyroute_holidays'
export const INSTAGRAM_URL = 'https://www.instagram.com/keyroute_holidays/'

export function whatsappLink(message = 'Hi KeyRoute Holidays! I would like to enquire about a trip.') {
  return `https://wa.me/916374770600?text=${encodeURIComponent(message)}`
}
