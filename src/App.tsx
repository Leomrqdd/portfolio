import { profile, now, availability, work, background, socials, KEVRED_URL, type RichText } from './data'
import { Section } from './components/Section'

const linkClass =
  'text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink'

/** Renders plain text, or text with one inline link. */
function Rich({ value }: { value: RichText }) {
  if (typeof value === 'string') return <>{value}</>
  return (
    <>
      {value.pre}
      <a href={value.link.href} target="_blank" rel="noreferrer" className={linkClass}>
        {value.link.label}
      </a>
      {value.post}
    </>
  )
}

function App() {
  return (
    <main className="mx-auto max-w-[640px] px-6 py-24 sm:py-32">
      <header className="reveal mb-16">
        <Avatar />
        <h1 className="mt-6 text-base font-medium text-ink">Léo</h1>
        <p className="mt-1.5 font-pixel text-sm leading-relaxed text-muted">
          {profile.role}
        </p>
        <div className="mt-5 max-w-prose space-y-4 text-ink/90">
          <p>
            Hey, I'm Léo. I co-founded{' '}
            <a href={KEVRED_URL} target="_blank" rel="noreferrer" className={linkClass}>
              Kevred
            </a>
            , where I build Solana infrastructure and software.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        <Section title="Now" delay={80}>
          <div className="space-y-6">
            <ul className="space-y-2">
              {now.map((item) => (
                <li
                  key={typeof item === 'string' ? item : item.link.label}
                  className="text-ink/90"
                >
                  <Rich value={item} />
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {availability.map((item) => (
                <li
                  key={typeof item === 'string' ? item : item.link.label}
                  className="text-ink/90"
                >
                  <Rich value={item} />
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title="Work" delay={160}>
          <ul className="divide-y divide-line">
            {work.map((item) => (
              <li key={item.name} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`font-medium ${linkClass}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="font-medium text-ink">{item.name}</span>
                  )}
                  <span className="shrink-0 font-pixel text-[10px] uppercase tracking-wide text-muted">
                    {item.period}
                  </span>
                </div>
                {Array.isArray(item.description) ? (
                  <ul className="mt-1 space-y-0.5 text-muted">
                    {item.description.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-muted">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Background" delay={240}>
          <ul className="space-y-2">
            {background.map((item) => (
              <li
                key={typeof item === 'string' ? item : item.link.label}
                className="text-ink/90"
              >
                <Rich value={item} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Connect" delay={300}>
          <ul className="space-y-1.5">
            {socials.map((s) => (
              <li key={s.label} className="flex gap-4">
                <span className="w-20 shrink-0 text-muted">{s.label}</span>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={linkClass}
                >
                  {s.display}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <footer
        className="reveal mt-24 border-t border-line pt-6 font-pixel text-[10px] uppercase tracking-wide text-muted"
        style={{ animationDelay: '360ms' }}
      >
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  )
}

/** Large circular pixel-art avatar with an 8-bit hard offset shadow. */
function Avatar() {
  return (
    <div className="group h-40 w-40 overflow-hidden rounded-full">
      <img
        src={`${import.meta.env.BASE_URL}monkey_pfp.png`}
        alt={profile.name}
        className="h-full w-full object-cover [image-rendering:pixelated] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105"
      />
    </div>
  )
}

export default App
