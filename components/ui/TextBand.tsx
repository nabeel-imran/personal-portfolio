const defaultItems = [
  'AI Automation', 'GenAI Systems', 'Full-Stack AI', 'n8n Workflows',
  'RPA Bots', 'LLM Integration', 'Production-Ready', 'Ships Fast',
]

export function TextBand({ items = defaultItems }: { items?: string[] }) {
  const row = (
    <span aria-hidden>
      {items.map(item => (
        <span key={item} className="inline-flex items-center gap-16">
          <span>{item}</span>
          <span style={{ WebkitTextStroke: '0', color: 'var(--blue)', fontSize: '0.4em' }}>✦</span>
        </span>
      ))}
    </span>
  )
  return (
    <div className="band" role="presentation">
      <div className="band-inner">
        {row}{row}{row}
      </div>
    </div>
  )
}
