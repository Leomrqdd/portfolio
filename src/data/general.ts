import type { PortfolioContent } from './types'

export const content = {
  profile: {
    name: 'Léo Mrqd',
    role: 'Software and infrastructure engineer',
  },
  avatar: 'photo_CV.jpeg',
  pixelated: false,

  intro: [
    {
      pre: "Hey, I'm Léo. I co-founded ",
      link: { label: 'Kevred', href: 'https://www.kevred.com/' },
      post: ', where I built backend software and infrastructure. I am now looking for a new role.',
    },
    'Open to backend and infrastructure roles. Feel free to reach out.',
    'Based in Rennes. Remote-friendly, but ready to move or travel for work.',
  ],

  now: [],
  availability: [],

  work: [
    {
      period: '2024–',
      name: 'System Reliability Engineer',
      description:
        'Operated a fleet of 5 high-performance servers end to end (bare-metal). Automated provisioning with Ansible, ran workloads in Docker, monitored with Grafana and GCP.',
    },
    {
      period: '2025–',
      name: 'Software Engineer',
      projects: [
        {
          name: 'Kevred Load Balancer',
          description:
            'A load balancer that reduces latency and improves reliability for APIs. Based on Cloudflare Workers, written in TypeScript, and open-source.',
          href: 'https://github.com/kevredlabs/kevred-rpc',
        },
        {
          name: 'News agent',
          description: 'An agent that summarizes news from X into Telegram.',
          href: 'https://t.me/kevred_sol_news',
        },
        {
          name: 'Roshambo',
          description:
            'A mobile Rock-Paper-Scissors game with on-device play and a live store listing with more than 30 reviews.',
          href: 'https://roshambo.kevred.com/',
        },
      ],
    },
  ],

  background: [
    {
      pre: 'Engineering degree from ',
      link: { label: 'Arts et Métiers (ENSAM)', href: 'https://artsetmetiers.fr/' },
      post: '.',
    },
    'Developer training in Python, Rust, and blockchain.',
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Leomrqdd', display: 'github.com/Leomrqdd' },
  ],
} satisfies PortfolioContent
