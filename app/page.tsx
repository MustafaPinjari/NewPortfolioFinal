import Contact from './components/contact';
import Hero from './components/hero-v2/hero';
import Intro from './components/intro';
import LinuxSkills from './components/linux-skills';
import { ScrollProvider } from './components/providers/ScrollProvider';
import Works from './components/work/works';
import Testimonials from './components/testimonials';
import Skills from './components/skills';
import { DockDemo } from './components/dock';

export default function Home() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro />
      <LinuxSkills />
      <Skills />
      <Works />
      <Testimonials />
      <Contact />
      <DockDemo />
    </ScrollProvider>
  );
}
