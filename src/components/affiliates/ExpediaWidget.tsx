'use client'
import { useEffect } from 'react'

export default function ExpediaWidget() {
  useEffect(() => {
    const existing = document.querySelector('.eg-widgets-script')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.src = 'https://creator.expediagroup.com/products/widgets/assets/eg-widgets.js'
    script.className = 'eg-widgets-script'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const s = document.querySelector('.eg-widgets-script')
      if (s) s.remove()
    }
  }, [])

  return (
    <div className="w-full">
      <div
        className="eg-widget"
        data-widget="search"
        data-program="uk-expedia"
        data-lobs="stays,flights"
        data-network="pz"
        data-camref="1101l47jQ6"
        data-pubref=""
      />
    </div>
  )
}
