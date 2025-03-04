
import { FileText } from "lucide-react";
import EducationSection from "./EducationSection";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 md:py-24 bg-portfolio-light-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-portfolio-dark-blue">My Resume</h2>
        <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto">
          Want to see my full professional background? Check out my detailed resume below.
        </p>
        
        {/* Education Timeline */}
        <EducationSection />
        
        <a 
          href="https://www.kaushalmohan.com/Kaushal_Mohan_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-portfolio-blue text-white px-6 py-3 rounded-lg hover:bg-portfolio-dark-blue transition-colors hover-lift"
        >
          <FileText className="mr-2 h-5 w-5" />
          <span>Download Full Resume</span>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
