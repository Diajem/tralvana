export const metadata = { title: 'Privacy Policy | Tralvana' }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-white mb-3">Privacy <span className="text-gold-gradient">Policy</span></h1>
          <p className="text-tralvana-muted text-sm">Last updated: May 2026</p>
        </div>
        <div className="glass-card rounded-2xl p-8 gold-border space-y-6 text-tralvana-muted leading-relaxed text-sm">
          {[
            { title: 'Information We Collect', content: 'We collect information you provide when you contact us, subscribe to our newsletter or submit content to Tralvana TV. This may include your name, email address and message content. We also collect anonymised usage data through analytics tools to improve our service.' },
            { title: 'How We Use Your Information', content: 'We use your information to respond to enquiries, send travel updates and deals you have opted into, and improve our website and services. We do not sell your personal data to third parties.' },
            { title: 'Cookies', content: 'Tralvana uses cookies to remember your currency and language preferences, and to track affiliate referrals so our partners can credit commissions correctly. By using Tralvana, you consent to the use of these cookies.' },
            { title: 'Third Party Services', content: 'When you click affiliate links on Tralvana, you will be directed to third-party websites (Expedia, Agoda, DiscoverCars, Amazon etc). These sites have their own privacy policies and we are not responsible for their data practices.' },
            { title: 'Data Retention', content: 'We retain contact form submissions and newsletter subscriptions for as long as necessary to provide our services. You may request deletion of your data at any time by contacting us.' },
            { title: 'Your Rights', content: 'Under GDPR and applicable data protection laws, you have the right to access, correct or delete your personal data. To exercise these rights, please contact us at privacy@tralvana.com.' },
            { title: 'Contact', content: 'For privacy-related queries, contact us at privacy@tralvana.com or via our contact page.' },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-white font-semibold text-lg mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
