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
      post: ', where I build Solana infrastructure and software.',
    },
  ],

  now: [
    {
      pre: 'Running a performance-focused Solana ',
      link: {
        label: 'validator',
        href: 'https://app.jpool.one/validators/Gvt8s5Bwnhg4G27VbnT1Zkfh7Jsztq6CNvZcc5anPonS',
      },
      post: ' on mainnet.',
    },
    'Open-source contributions to Circular, Triton, Agave, and LimeChain.',
    {
      pre: 'Member of the ',
      link: { label: 'Vault', href: 'https://thevault.finance/' },
      post: ' Validator Board.',
    },
    {
      pre: 'Helping with events and projects in the ',
      link: { label: 'Ferno', href: 'https://ferno.ag/' },
      post: ' community.',
    },
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
        'An RPC load-balancer for Solana that reduces latency and improves reliability for devs and users. Based on Cloudflare Workers, written in TypeScript, and open-source.',
      href: 'https://github.com/kevredlabs/kevred-rpc',
    },
    {
      period: '2026',
      name: 'AI Agents',
      description: [
        'An agent that summarizes Solana X news into Telegram.',
        'A DeFi agent optimized for high-frequency trading, fully built in Rust.',
      ],
      href: 'https://t.me/kevred_sol_news',
    },
    {
      period: '2025',
      name: 'Roshambo',
      description:
        'A Solana Mobile dApp: on-chain Rock-Paper-Scissors where players bet SOL in a trustless, winner-takes-all game. Live on the Seeker dApp Store with more than 30 reviews.',
      href: 'https://roshambo.kevred.com/',
    },
    {
      period: '2025',
      name: 'Onchain Lottery',
      description: 'An on-chain lottery on Solana, using VRF for verifiable on-chain randomness.',
      href: 'https://github.com/Leomrqdd/lottery-ackee',
    },
  ],

  background: [
    {
      pre: '',
      link: { label: 'School of Solana', href: 'https://ackee.xyz/school-of-solana' },
      post: ' (Ackee).',
    },
    {
      pre: '',
      link: { label: 'Turbin3 Builders', href: 'https://turbin3.org/institute' },
      post: '.',
    },
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
