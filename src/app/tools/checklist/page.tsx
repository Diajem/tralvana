import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Travel Packing Checklist | Tralvana Travel Tools',
  description: 'Free interactive packing checklist for every trip. Documents, clothing, toiletries, tech and more — tick items as you pack.',
}

export default function ChecklistPage() {
  redirect('/tools')
}
