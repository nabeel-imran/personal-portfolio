export interface Project {
  slug: string
  title: string
  category: 'AI Automation' | 'GenAI' | 'Full-Stack' | 'Tools'
  status: 'live' | 'shipped' | 'personal'
  featured?: boolean
  description: string
  longDescription?: string
  tech: string[]
  achievements: string[]
  url?: string | null
  github?: string | null
  image: string
}

export const projects: Project[] = [
  {
    slug: 'veremark-automation',
    title: 'Veremark Background Screening Automation Platform',
    category: 'AI Automation',
    status: 'live',
    featured: true,
    description:
      'Enterprise RPA platform with 4 live production bots automating multi-country background screening for Veremark UK.',
    longDescription:
      'The most complex automation system I have built. A multi-country enterprise RPA platform for Veremark (UK) — replacing hours of manual compliance work with fully automated, audit-ready pipelines. Built and deployed 4 production bots, a rule-based decisioning engine, a benchmarking system, and a package creation automation that reduced client onboarding from 45+ minutes to under 2 minutes.',
    tech: ['Axiom.ai', 'n8n', 'Monday.com GraphQL', 'LLM Integration', 'AWS', 'JavaScript', 'Python'],
    achievements: [
      '4 live RPA bots running in production',
      'Rule-Based Decisioning Engine with 95/100 efficiency score',
      'Package creation: 45+ minutes → under 2 minutes',
      'Audit-Log Engine & Benchmarking System',
      'Direct collaboration with Veremark UK engineering & ops teams',
      '6-variant name-logic matching algorithm',
    ],
    url: null,
    github: null,
    image: '/projects/veremark.png',
  },
  {
    slug: 'rankguide',
    title: 'RankGuide — AI Marketing SaaS',
    category: 'Full-Stack',
    status: 'live',
    featured: true,
    description:
      'Production AI-powered marketing assistant and social media content generator with streaming responses and user auth.',
    longDescription:
      'Full-stack SaaS product built from scratch. Features AI-powered marketing tools, social media content generation, streaming LLM responses, user authentication, and a polished dark/light UI. Live at tools.rankguide.io.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'LLM Integration', 'TypeScript', 'TailwindCSS'],
    achievements: [
      'Live SaaS product at tools.rankguide.io',
      'Streaming AI responses for real-time UX',
      'Multi-tool architecture (content, marketing, social)',
      'Full user auth + dark/light UI',
    ],
    url: 'https://tools.rankguide.io',
    github: null,
    image: '/projects/rankguide.png',
  },
  {
    slug: 'social-media-saas',
    title: 'Social Media Content Generation SaaS',
    category: 'Full-Stack',
    status: 'shipped',
    description:
      '12-tool AI creator platform with ideation, scripting, repurposing, and Make.com auto-publishing integration.',
    tech: ['LLM Integration', 'Next.js', 'Make.com', 'Node.js', 'Docker', 'TypeScript'],
    achievements: [
      '12 distinct AI content tools',
      'Make.com auto-publish integration',
      'CSV bulk content library',
      'Engagement prediction module',
    ],
    image: '/projects/social-saas.png',
  },
  {
    slug: 'genai-scene-generator',
    title: 'GenAI Scene Generator',
    category: 'GenAI',
    status: 'shipped',
    description:
      'AI web app transforming written scripts into cinematic video sequences with character memory and multi-style support.',
    tech: ['AI Image Generation', 'AI Vision', 'LLM Integration', 'React', 'Next.js'],
    achievements: [
      'Multi-model image generation pipeline',
      'Character memory across scenes',
      'Real photography, 3D animation, digital painting styles',
      'MP4 video sequence export',
    ],
    image: '/projects/scene-gen.png',
  },
  {
    slug: 'ai-tiktok-pipeline',
    title: 'AI TikTok Content Factory',
    category: 'AI Automation',
    status: 'shipped',
    description:
      'Fully automated pipeline: topic ideation → LLM-generated script → AI voice → AI video → auto-post. 5–10 videos/day.',
    tech: ['n8n', 'LLM Integration', 'AI Voice', 'AI Video'],
    achievements: [
      '5–10 videos/day with zero manual input',
      'End-to-end pipeline: idea → publish',
      'Production workaround for n8n API chaining limits',
      'AI voice synthesis integration',
    ],
    image: '/projects/tiktok-pipeline.png',
  },
  {
    slug: 'job-intelligence-system',
    title: 'AI Job Intelligence System',
    category: 'AI Automation',
    status: 'personal',
    description:
      'Automated job discovery: scrapes LinkedIn + Upwork every 30 min, generates AI-personalized proposals, delivers to Slack.',
    tech: ['n8n', 'LLM Integration', 'Slack'],
    achievements: [
      'Real-time job scraping every 30 minutes',
      'AI-personalized proposal generation',
      'Slack delivery for one-click review',
      'Used personally every day',
    ],
    image: '/projects/job-intel.png',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
