
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="about" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-portfolio-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="pill inline-block mb-4">Manager, Transfer Pricing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-dark-blue">
              Hi, I'm Pankhuri
            </h1>
            <p className="text-lg text-portfolio-gray mb-8 text-balance">
              I'm a passionate finance professional specializing in Transfer Pricing with a knack for making complex 
              data tell meaningful stories. At Nomura, I've transformed processes through automation, managed global 
              tax policies, and built insightful dashboards that drive better decision-making.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection("projects")}
                className="bg-portfolio-blue text-white px-6 py-3 rounded hover:bg-portfolio-dark-blue transition-colors hover-lift inline-flex items-center"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-white text-portfolio-dark-blue border border-portfolio-light-gray px-6 py-3 rounded hover:bg-portfolio-light-gray/50 transition-colors hover-lift"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[350px] w-[350px] hover-lift animate-fade-in">
              <img 
                src="/lovable-uploads/f7440a58-55c1-4791-a75e-f9238e81581f.png" 
                alt="Pankhuri Maheshwari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
