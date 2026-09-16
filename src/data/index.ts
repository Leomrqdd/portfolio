import { content as general } from './general'
import { content as web3 } from './web3'
import type { PortfolioContent, Variant } from './types'

function resolveVariant(value: string | undefined): Variant {
  return value === 'general' ? 'general' : 'web3'
}

const variant = resolveVariant(import.meta.env.VITE_VARIANT)
const content: PortfolioContent = variant === 'general' ? general : web3

export const { profile, intro, now, availability, work, background, socials } = content
export type { Link, PortfolioContent, Profile, RichText, Variant, WorkItem } from './types'
