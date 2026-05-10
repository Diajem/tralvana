export const metadata = { title: 'Terms & Conditions | Tralvana' }

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-white mb-3">Terms & <span className="text-gold-gradient">Conditions</span></h1>
          <p className="text-tralvana-muted text-sm">Last updated: May 2026</p>
        </div>
        <div className="glass-card rounded-2xl p-8 gold-border space-y-6 text-tralvana-muted leading-relaxed text-sm">
          {[
            { title: 'Acceptance of Terms', content: 'By accessing and using Tralvana, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.' },
            { title: 'Nature of Our Service', content: 'Tralvana is a travel comparison and affiliate marketing website. We do not directly sell flights, hotels, tours or other travel services. When you click a booking link, you are transferred to a third-party provider who is responsible for the booking, fulfilment and any customer service related to that booking.' },
            { title: 'Affiliate Links', content: 'Many links on Tralvana are affiliate links. We earn a commission when you make a purchase through these links, at no additional cost to you. This helps us keep Tralvana free to use. See our Affiliate Disclosure for full details.' },
            { title: 'Accuracy of Information', content: 'We strive to keep all information on Tralvana accurate and up to date. However, prices, availability and product details are controlled by third-party providers and may change without notice. Always verify final prices and details on the provider\'s own website before booking.' },
            { title: 'Limitation of Liability', content: 'Tralvana is not responsible for any bookings, transactions or experiences that take place through third-party affiliate partners. Any disputes regarding bookings must be resolved directly with the relevant provider.' },
            { title: 'Intellectual Property', content: 'All content on Tralvana — including text, design, graphics and code — is the property of Tralvana / Diajem Marketing and may not be reproduced without written permission.' },
            { title: 'Governing Law', content: 'These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.' },
            { title: 'Changes to Terms', content: 'We reserve the right to update these terms at any time. Continued use of Tralvana following any changes constitutes acceptance of the revised terms.' },
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
