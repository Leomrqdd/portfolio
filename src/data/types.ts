export interface Profile {
  name: string
  role: string
}

/** Plain text, or text with one inline link. */
export type RichText =
  | string
  | { pre: string; link: { label: string; href: string }; post: string }

export interface WorkItem {
  period: string
  name: string
  /** A single paragraph, or several bulleted lines. */
  description: string | string[]
  href?: string
}

export interface Link {
  label: string
  href: string
  display: string
}

export interface PortfolioContent {
  profile: Profile
  intro: RichText[]
  now: RichText[]
  availability: RichText[]
  work: WorkItem[]
  background: RichText[]
  socials: Link[]
}

export type Variant = 'web3' | 'general'
