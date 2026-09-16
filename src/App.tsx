import {
  profile,
  avatar,
  pixelated,
  intro,
  now,
  availability,
  work,
  background,
  socials,
  type RichText,
  type WorkItem,
  type WorkProject,
} from './data'
import { Section } from './components/Section'

const linkClass =
  'text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink'

const showNow = now.length > 0 || availability.length > 0

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

function Description({ value }: { value: string | string[] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="mt-1 space-y-0.5 text-muted">
        {value.map((d) => (
          <li key={d} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="mt-1 text-muted">{value}</p>
}

function ProjectName({
  item,
  nested = false,
}: {
  item: Pick<WorkItem | WorkProject, 'name' | 'href'>
  nested?: boolean
}) {
  const nameClass = nested ? 'text-sm font-normal' : 'font-medium'
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${nameClass} ${linkClass}`}
      >
        {item.name}
      </a>
    )
  }
  return <span className={`${nameClass} text-ink`}>{item.name}</span>
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
          {intro.map((item) => (
            <p key={typeof item === 'string' ? item : `${item.pre}${item.link.label}${item.post}`}>
              <Rich value={item} />
            </p>
          ))}
        </div>
      </header>

      <div className="space-y-12">
        {showNow && (
          <Section title="Now" delay={80}>
            <div className="space-y-6">
              {now.length > 0 && (
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
              )}
              {availability.length > 0 && (
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
              )}
            </div>
          </Section>
        )}

        <Section title="Work" delay={showNow ? 160 : 80}>
          <ul className="divide-y divide-line">
            {work.map((item) => (
              <li key={item.name} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <ProjectName item={item} />
                  <span className="shrink-0 font-pixel text-[10px] uppercase tracking-wide text-muted">
                    {item.period}
                  </span>
                </div>
                {item.description ? <Description value={item.description} /> : null}
                {item.projects && item.projects.length > 0 ? (
                  <ul className="mt-3 space-y-3">
                    {item.projects.map((project) => (
                      <li key={project.name}>
                        <ProjectName item={project} nested />
                        {project.description ? <Description value={project.description} /> : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
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

function Avatar() {
  return (
    <div className="group h-40 w-40 overflow-hidden rounded-full">
      <img
        src={`${import.meta.env.BASE_URL}${avatar}`}
        alt={profile.name}
        className={[
          'h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105',
          pixelated ? '[image-rendering:pixelated]' : '',
        ].join(' ')}
      />
    </div>
  )
}

export default App
