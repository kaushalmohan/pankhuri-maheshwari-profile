
import { cn } from "@/lib/utils";

// Enhanced skills list
const skills = [
  "Alteryx (Advanced)",
  "PowerBI (Advanced)",
  "MS Excel (Advanced)",
  "Process Automation",
  "Data Analysis",
  "Dashboard Creation",
  "Tax Planning",
  "Regulatory Understanding",
  "Cross Cultural Collaboration",
  "Transfer Pricing",
  "Statistical Analysis",
  "Predictive Analysis",
  "Denodo (Intermediate)",
  "Data Modeling",
  "Problem Solving",
  "Stakeholder Management",
  "Communication",
  "Financial Reporting"
];

const SkillsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-portfolio-dark-blue">Skills & Expertise</h2>
        <p className="text-lg text-portfolio-gray mb-12 max-w-2xl mx-auto text-center">
          I've developed a diverse skill set that blends financial expertise, technical proficiency, and people skills.
          Here's what I bring to the table:
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={cn(
                "px-6 py-4 rounded-xl bg-white shadow-sm border border-portfolio-light-gray",
                "hover:shadow-md hover:border-portfolio-blue/20 transition-all duration-300",
                "scale-hover"
              )}
            >
              <span className="font-medium text-portfolio-dark-blue">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
