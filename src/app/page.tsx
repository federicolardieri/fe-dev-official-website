import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ServicePackages } from "@/components/sections/ServicePackages";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { AboutMe } from "@/components/sections/AboutMe";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { LogoBar } from "@/components/ui/LogoBar";

export default function Home() {
  return (
    <div className="pb-0">
      <Hero />
      <LogoBar />
      <ProblemSolution />
      <ServicePackages />
      <Process />
      <CaseStudies />
      <AboutMe />
      <Certifications />
      <Contact />
    </div>
  );
}
