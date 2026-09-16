import type { PortfolioContent } from './types'

export const content = {
  profile: {
    name: 'Léo Mrqd',
    role: 'Software and infrastructure engineer',
  },

  intro: [
    {
      pre: "Hey, I'm Léo. I co-founded ",
      link: { label: 'Kevred', href: 'https://www.kevred.com/' },
      post: ', where I build backend software and infrastructure.',
    },
  ],

  now: [
    {
      pre: 'Building backend systems and infrastructure at ',
      link: { label: 'Kevred', href: 'https://www.kevred.com/' },
      post: '.',
    },
    'Open-source work on load balancing, APIs, and performance-sensitive services.',
    'Helping with events and technical projects in local communities.',
  ],

  availability: [
    'Based in France. Remote-friendly, but ready to move or travel for work.',
    'Open to backend and infrastructure roles. Feel free to reach out.',
  ],

  work: [
    {
      period: '2026',
      name: 'Kevred Load-Balancer',
      description:
        'A load balancer that reduces latency and improves reliability for APIs. Based on Cloudflare Workers, written in TypeScript, and open-source.',
      href: 'https://github.com/kevredlabs/kevred-rpc',
    },
    {
      period: '2026',
      name: 'AI Agents',
      description: [
        'An agent that summarizes news from X into Telegram.',
        'A trading agent optimized for high-frequency execution, fully built in Rust.',
      ],
      href: 'https://t.me/kevred_sol_news',
    },
    {
      period: '2025',
      name: 'Roshambo',
      description:
        'A mobile Rock-Paper-Scissors game with on-device play and a live store listing with more than 30 reviews.',
      href: 'https://roshambo.kevred.com/',
    },
  ],

  background: [
    {
      pre: '',
      link: { label: 'Rektoff Rust Security Bootcamp', href: 'https://www.rektoff.xyz/bootcamp' },
      post: '.',
    },
    'Trained as a generalist engineer in France.',
  ],

  socials: [
    { label: 'Telegram', href: 'https://t.me/Leomrqd', display: '@Leomrqd' },
    { label: 'GitHub', href: 'https://github.com/Leomrqdd', display: 'github.com/Leomrqdd' },
    { label: 'X', href: 'https://x.com/mrqd_leo', display: '@mrqd_leo' },
  ],
} satisfies PortfolioContent
