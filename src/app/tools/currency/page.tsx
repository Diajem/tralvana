import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Currency Converter | Tralvana Travel Tools',
  description: 'Free live currency converter for travellers. Convert GBP, USD, EUR, NGN, GHS, JMD and more with live exchange rates.',
}

export default function CurrencyPage() {
  redirect('/tools')
}
