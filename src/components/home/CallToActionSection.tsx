
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-portfolio-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-lg text-portfolio-light-gray mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Let's turn your challenges into success stories!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="bg-portfolio-blue text-white px-6 py-3 rounded hover:bg-portfolio-light-blue transition-colors hover-lift inline-flex items-center justify-center"
          >
            <span>See My Projects</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="bg-transparent text-white border border-white/30 px-6 py-3 rounded hover:bg-white/10 transition-colors hover-lift"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
