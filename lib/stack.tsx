import type { SVGProps } from 'react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiPython, SiFastapi, SiDjango, SiDart,
  SiPostgresql, SiMongodb, SiSupabase, SiFirebase,
  SiVercel, SiDocker, SiGooglecloud, SiNetlify, SiGithub,
  SiLangchain, SiHuggingface,
  SiN8N, SiMake, SiZapier,
  SiNotion, SiAirtable, SiSlack, SiGraphql, SiFlutter,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export type StackItem = {
  name: string
  Icon: IconType
  color: string
  category: StackCategory
}

export type StackCategory =
  | 'AI & LLM'
  | 'Automation & RPA'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Cloud & DevOps'
  | 'Enterprise'

// Custom inline-SVG icon for tools not in simple-icons (Amazon trademark, niche brands).
// Each component accepts the same props as react-icons (className, color/style applied via parent).
const makeTextBrand = (label: string): IconType => {
  const TextBrand = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 64 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontWeight="700"
        fontSize="18"
        fill="currentColor"
      >
        {label}
      </text>
    </svg>
  )
  TextBrand.displayName = `TextBrand(${label})`
  return TextBrand as unknown as IconType
}

const SiAws = makeTextBrand('AWS')
const SiAzure = makeTextBrand('Azure')
const SiMonday = makeTextBrand('monday')
const SiWorkday = makeTextBrand('Workday')
const SiAxiom = makeTextBrand('Axiom')

export const stack: StackItem[] = [
  // AI & LLM
  { name: 'LLM Integration', Icon: makeTextBrand('LLM'), color: '#A78BFA', category: 'AI & LLM' },
  { name: 'LangChain', Icon: SiLangchain, color: '#1C3C3C', category: 'AI & LLM' },
  { name: 'RAG Pipelines', Icon: makeTextBrand('RAG'), color: '#60A5FA', category: 'AI & LLM' },
  { name: 'AI Agents', Icon: makeTextBrand('Agents'), color: '#34D399', category: 'AI & LLM' },
  { name: 'Vector Search', Icon: makeTextBrand('Vector'), color: '#F472B6', category: 'AI & LLM' },
  { name: 'Hugging Face', Icon: SiHuggingface, color: '#FFD21E', category: 'AI & LLM' },
  { name: 'Computer Vision', Icon: makeTextBrand('CV'), color: '#FB923C', category: 'AI & LLM' },
  { name: 'Prompt Eng.', Icon: makeTextBrand('Prompt'), color: '#A78BFA', category: 'AI & LLM' },

  // Automation
  { name: 'n8n', Icon: SiN8N, color: '#EA4B71', category: 'Automation & RPA' },
  { name: 'Make.com', Icon: SiMake, color: '#6D00CC', category: 'Automation & RPA' },
  { name: 'Axiom.ai', Icon: SiAxiom, color: '#3B82F6', category: 'Automation & RPA' },
  { name: 'Zapier', Icon: SiZapier, color: '#FF4F00', category: 'Automation & RPA' },
  { name: 'Browser RPA', Icon: makeTextBrand('RPA'), color: '#60A5FA', category: 'Automation & RPA' },

  // Frontend
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF', category: 'Frontend' },
  { name: 'React', Icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B', category: 'Frontend' },
  { name: 'Dart', Icon: SiDart, color: '#0175C2', category: 'Frontend' },

  // Backend
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Python', Icon: SiPython, color: '#3776AB', category: 'Backend' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688', category: 'Backend' },
  { name: 'Django', Icon: SiDjango, color: '#0DA56C', category: 'Backend' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', category: 'Databases' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', category: 'Databases' },
  { name: 'Supabase', Icon: SiSupabase, color: '#3FCF8E', category: 'Databases' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28', category: 'Databases' },

  // Cloud
  { name: 'AWS', Icon: SiAws, color: '#FF9900', category: 'Cloud & DevOps' },
  { name: 'Azure', Icon: SiAzure, color: '#0078D4', category: 'Cloud & DevOps' },
  { name: 'GCP', Icon: SiGooglecloud, color: '#4285F4', category: 'Cloud & DevOps' },
  { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF', category: 'Cloud & DevOps' },
  { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7', category: 'Cloud & DevOps' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED', category: 'Cloud & DevOps' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF', category: 'Cloud & DevOps' },

  // Enterprise
  { name: 'Monday.com', Icon: SiMonday, color: '#FF3D57', category: 'Enterprise' },
  { name: 'Workday', Icon: SiWorkday, color: '#F38B00', category: 'Enterprise' },
  { name: 'Notion', Icon: SiNotion, color: '#FFFFFF', category: 'Enterprise' },
  { name: 'Airtable', Icon: SiAirtable, color: '#FCB400', category: 'Enterprise' },
  { name: 'Slack', Icon: SiSlack, color: '#E01E5A', category: 'Enterprise' },
]

export const categories: { key: StackCategory; label: string }[] = [
  { key: 'AI & LLM', label: 'AI & LLM' },
  { key: 'Automation & RPA', label: 'Automation & RPA' },
  { key: 'Frontend', label: 'Frontend' },
  { key: 'Backend', label: 'Backend' },
  { key: 'Databases', label: 'Databases' },
  { key: 'Cloud & DevOps', label: 'Cloud & DevOps' },
  { key: 'Enterprise', label: 'Enterprise Systems' },
]
