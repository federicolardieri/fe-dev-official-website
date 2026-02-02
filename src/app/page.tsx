import { AboutMe } from "@/components/sections/AboutMe";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyFeDev } from "@/components/sections/WhyFeDev";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="pb-0">
      <Hero />
      <Services />
      <WhyFeDev />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
