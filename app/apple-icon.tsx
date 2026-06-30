import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 112,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.05em',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            marginTop: -4,
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  )
}
