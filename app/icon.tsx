import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.05em',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            marginTop: -1,
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  )
}
