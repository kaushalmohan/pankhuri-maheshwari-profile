
import { useRef, useEffect } from "react";

// Import section components
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ResumeSection from "@/components/home/ResumeSection";
import ContactSection from "@/components/home/ContactSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const HomePage = () => {
  // Refs for animation and scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Intersection Observer setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe elements
    const refs = [aboutRef, projectsRef, skillsRef, experienceRef, educationRef, contactRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Wrap sections with refs for animation */}
      <div ref={aboutRef}>
        <HeroSection />
      </div>
      
      <div ref={experienceRef} className="opacity-0">
        <ExperienceSection />
      </div>
      
      <div ref={projectsRef} className="opacity-0">
        <ProjectsSection />
      </div>
      
      <div ref={skillsRef} className="opacity-0">
        <SkillsSection />
      </div>
      
      <ResumeSection />
      
      <div ref={contactRef} className="opacity-0">
        <ContactSection />
      </div>
      
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
