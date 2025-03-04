
import { useEffect, useRef } from "react";
import { ArrowRight, Award, FileText, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Skills from your resume
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
  "Data Modeling"
];

// Education details
const education = [
  {
    degree: "Chartered Accountant",
    institution: "ICAI",
    date: "November 2015",
    score: "56%"
  },
  {
    degree: "CFA, Level 3",
    institution: "CFA Institute",
    date: "November 2021"
  },
  {
    degree: "B. Comm",
    institution: "R. A. Podar College, Mumbai University",
    date: "March 2014",
    score: "75%"
  }
];

const HomePage = () => {
  // Refs for animation
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

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
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-portfolio-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <p className="pill inline-block mb-4">Manager, Transfer Pricing</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-dark-blue">
                Pankhuri Maheshwari
              </h1>
              <p className="text-lg text-portfolio-gray mb-8 text-balance">
                Finance professional specializing in Transfer Pricing with expertise in process automation, 
                tax policy management, and data analysis. Currently working at Nomura, managing global 
                transfer pricing policies and implementing advanced automation workflows.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/projects" 
                  className="bg-portfolio-blue text-white px-6 py-3 rounded hover:bg-portfolio-dark-blue transition-colors hover-lift inline-flex items-center"
                >
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white text-portfolio-dark-blue border border-portfolio-light-gray px-6 py-3 rounded hover:bg-portfolio-light-gray/50 transition-colors hover-lift"
                >
                  Contact Me
                </Link>
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

      {/* Experience Summary */}
      <section ref={experienceRef} className="py-16 md:py-24 opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark-blue">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            {/* Nomura Experience */}
            <div className="flex mb-12">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 bg-portfolio-light-blue/30 rounded-full">
                  <BarChart className="h-6 w-6 text-portfolio-blue" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-portfolio-dark-blue">Manager, Transfer Pricing</h3>
                  <span className="mx-3 text-portfolio-gray">•</span>
                  <span className="text-portfolio-gray">Nomura</span>
                </div>
                <p className="text-sm text-portfolio-gray mb-4">Apr 2018 - Present</p>
                <div className="space-y-2 text-portfolio-dark-gray mb-4">
                  <p>• Built over 30 complex workflows on Alteryx, leading to exponential improvement in team efficiency</p>
                  <p>• Created Power BI dashboards for enhanced data analytics and scenario analysis</p>
                  <p>• Managed Nomura's Transfer Pricing policies for Global Markets and Investment Banking divisions</p>
                  <p>• Conducted monthly evaluations for cross-border interactions and inter-company settlements</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="pill">Alteryx</span>
                  <span className="pill">PowerBI</span>
                  <span className="pill">Transfer Pricing</span>
                  <span className="pill">Data Analytics</span>
                </div>
              </div>
            </div>

            {/* KPMG Experience */}
            <div className="flex mb-12">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 bg-portfolio-light-blue/30 rounded-full">
                  <FileText className="h-6 w-6 text-portfolio-blue" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-portfolio-dark-blue">Senior Executive, Direct Tax</h3>
                  <span className="mx-3 text-portfolio-gray">•</span>
                  <span className="text-portfolio-gray">KPMG</span>
                </div>
                <p className="text-sm text-portfolio-gray mb-4">Sept 2015 - Sept 2017</p>
                <div className="space-y-2 text-portfolio-dark-gray mb-4">
                  <p>• Managed tax return filing for various entities including banking branches and foreign investment companies</p>
                  <p>• Filed and revised withholding tax returns for clients</p>
                  <p>• Provided expert advisory services on tax matters and implications under the Income Tax Act</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="pill">Tax Filing</span>
                  <span className="pill">Tax Advisory</span>
                  <span className="pill">Due Diligence</span>
                </div>
              </div>
            </div>

            {/* KPMG Articleship */}
            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 bg-portfolio-light-blue/30 rounded-full">
                  <Award className="h-6 w-6 text-portfolio-blue" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-portfolio-dark-blue">Articleship Experience</h3>
                  <span className="mx-3 text-portfolio-gray">•</span>
                  <span className="text-portfolio-gray">KPMG</span>
                </div>
                <p className="text-sm text-portfolio-gray mb-4">Sept 2012 - Sept 2015</p>
                <div className="space-y-2 text-portfolio-dark-gray mb-4">
                  <p>• Designated as a Staff Accountant in Direct Taxation catering to the BFSI Segment</p>
                  <p>• Assisted in filing appeals and background research in relation to technical analysis</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="pill">Direct Taxation</span>
                  <span className="pill">BFSI</span>
                  <span className="pill">Technical Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-16 md:py-24 bg-portfolio-light-gray/30 opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark-blue">Skills & Expertise</h2>
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
      
      {/* Education Section */}
      <section ref={educationRef} className="py-16 md:py-24 opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark-blue">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white border border-portfolio-light-gray rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-lift"
              >
                <h3 className="text-xl font-bold mb-2 text-portfolio-dark-blue">{edu.degree}</h3>
                <p className="text-portfolio-gray mb-1">{edu.institution}</p>
                <p className="text-sm text-portfolio-gray mb-2">{edu.date}</p>
                {edu.score && (
                  <div className="mt-3 text-portfolio-blue font-medium">
                    Score: {edu.score}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-portfolio-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Collaborate</h2>
          <p className="text-lg text-portfolio-light-gray mb-8 max-w-2xl mx-auto">
            Interested in working together or have a question about my experience?
            I'm always open to new opportunities and connections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/projects" 
              className="bg-portfolio-blue text-white px-6 py-3 rounded hover:bg-portfolio-light-blue transition-colors hover-lift inline-flex items-center justify-center"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent text-white border border-white/30 px-6 py-3 rounded hover:bg-white/10 transition-colors hover-lift"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
