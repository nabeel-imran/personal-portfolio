import { Hero } from '@/components/sections/Hero'
import { BillyIntro } from '@/components/sections/BillyIntro'
import { About } from '@/components/sections/About'
import { WhyMe } from '@/components/sections/WhyMe'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Process } from '@/components/sections/Process'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Content } from '@/components/sections/Content'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { TextBand } from '@/components/ui/TextBand'

export default function Home() {
  return (
    <>
      <Hero />
      <TextBand />
      <BillyIntro />
      <About />
      <WhyMe />
      <Services />
      <Projects />
      <TextBand items={['Discover', 'Architect', 'Build', 'Ship', 'Document', 'Support']} />
      <Process />
      <Experience />
      <Skills />
      <Content />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
