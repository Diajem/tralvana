export default function BannerAds() {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '30px 20px',
      borderTop: '1px solid #F3F4F6',
      borderBottom: '1px solid #F3F4F6',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>

        <p style={{
          textAlign: 'center',
          fontSize: '11px',
          color: '#9CA3AF',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Featured Partners &amp; Offers
        </p>

        {/* Banner Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          {/* GoWithGuide - Local Tour Guides */}
          <a
            href="https://www.awin1.com/cread.php?s=4750813&v=87121&q=496538&r=1773696"
            target="_blank"
            rel="noopener noreferrer sponsored"
            title="GoWithGuide - Book Local Tour Guides Worldwide"
          >
            <img
              src="https://www.awin1.com/cshow.php?s=4750813&v=87121&q=496538&r=1773696"
              alt="GoWithGuide - Local Tour Guides Worldwide"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                display: 'block'
              }}
            />
          </a>

          {/* Goddiva - Holiday Fashion Banner 1 */}
          <a
            href="https://www.awin1.com/cread.php?s=3861504&v=2894&q=512086&r=1773696"
            target="_blank"
            rel="noopener noreferrer sponsored"
            title="Goddiva - Holiday Fashion & Summer Dresses"
          >
            <img
              src="https://www.awin1.com/cshow.php?s=3861504&v=2894&q=512086&r=1773696"
              alt="Goddiva Holiday Fashion"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                display: 'block'
              }}
            />
          </a>

          {/* Goddiva - Holiday Fashion Banner 2 */}
          <a
            href="https://www.awin1.com/cread.php?s=4206385&v=2894&q=233835&r=1773696"
            target="_blank"
            rel="noopener noreferrer sponsored"
            title="Goddiva - Summer Wear & Holiday Dresses"
          >
            <img
              src="https://www.awin1.com/cshow.php?s=4206385&v=2894&q=233835&r=1773696"
              alt="Goddiva Summer Wear"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                display: 'block'
              }}
            />
          </a>

        </div>

        {/* Disclosure */}
        <p style={{
          textAlign: 'center',
          fontSize: '10px',
          color: '#D1D5DB',
          marginTop: '16px'
        }}>
          Advertisement — we may earn a commission from partner links
        </p>

      </div>
    </section>
  )
}
