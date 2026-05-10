'use client'
import { useEffect, useRef, useState } from 'react'

interface TravelpayoutsWidgetProps {
  src: string
  className?: string
  minHeight?: string
}

export default function TravelpayoutsWidget({
  src,
  className = '',
  minHeight = '300px',
}: TravelpayoutsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''
    setLoading(true)
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.charset = 'utf-8'
    script.onload = () => setLoading(false)
    script.onerror = () => setLoading(false)
    container.appendChild(script)
    return () => { if (container) container.innerHTML = '' }
  }, [src])

  return (
    <div className={`w-full relative ${className}`} style={{ minHeight, overflow: 'visible', width: '100%' }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ color: '#8A8AA0', fontSize: '0.875rem' }}>
          Loading search...
        </div>
      )}
      <div ref={containerRef} style={{ minHeight, width: '100%', overflow: 'visible' }} />
    </div>
  )
}
