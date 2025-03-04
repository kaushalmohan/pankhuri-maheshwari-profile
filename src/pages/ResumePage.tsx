
import { useState, useEffect, useRef } from "react";
import { Download, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Resume sections based on your uploaded resume
const sections = [
  { id: "experience", title: "Work Experience" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "software", title: "Software Proficiency" },
];

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState("experience");
  
  // Refs for animation
  const resumeRef = useRef<HTMLDivElement>(null);
  const pdfViewerRef = useRef<HTMLDivElement>(null);

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

    if (resumeRef.current) observer.observe(resumeRef.current);
    if (pdfViewerRef.current) observer.observe(pdfViewerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-white to-portfolio-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark-blue animate-fade-in">
            My Resume
          </h1>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto animate-fade-in">
            A summary of my professional experience, skills, and qualifications.
            View online or download for your reference.
          </p>
          <a 
            href="https://www.kaushalmohan.com/Kaushal_Mohan_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-portfolio-blue text-white px-6 py-3 rounded hover:bg-portfolio-dark-blue transition-colors hover-lift animate-fade-in"
          >
            <Download className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-portfolio-light-gray" ref={resumeRef}>
            {/* Resume Header */}
            <div className="bg-portfolio-dark-blue text-white p-8 animate-fade-in opacity-0">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Pankhuri Maheshwari</h2>
                  <p className="text-portfolio-light-gray">Manager, Transfer Pricing</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-portfolio-light-gray text-sm mb-1">pankhuri_maheshwari@ymail.com</p>
                  <p className="text-portfolio-light-gray text-sm">+91-9833391564</p>
                </div>
              </div>
            </div>
            
            {/* Resume Navigation */}
            <div className="border-b border-portfolio-light-gray animate-fade-in opacity-0">
              <div className="flex overflow-x-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={cn(
                      "px-6 py-4 whitespace-nowrap font-medium transition-colors",
                      activeSection === section.id 
                        ? "text-portfolio-blue border-b-2 border-portfolio-blue" 
                        : "text-portfolio-gray hover:text-portfolio-dark-blue"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Resume Content */}
            <div className="p-8 animate-fade-in opacity-0">
              {/* Work Experience */}
              {activeSection === "experience" && (
                <div className="space-y-8">
                  {/* Nomura */}
                  <div className="border-b border-portfolio-light-gray pb-8">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue">Manager, Transfer Pricing</h3>
                      <div className="flex items-center">
                        <span className="text-portfolio-gray">Nomura</span>
                        <span className="mx-2 text-portfolio-gray">•</span>
                        <span className="text-portfolio-gray">Apr 2018 - Present</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium text-portfolio-dark-blue mt-4 mb-2">Process Automation (Alteryx and PowerBI)</h4>
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray">
                      <li>Built over 30 complex workflows on Alteryx, leading to exponential improvement in team efficiency through automation</li>
                      <li>Created multiple Power BI dashboards for enhanced data analytics and improved efficiency in reviewing the calculations as well as performing scenario analysis</li>
                      <li>Consulted, advised, and tested 50+ workflows and dashboards built by other team members to improve internal TP processes</li>
                      <li>End-to-end involvement in process automation from requirement gathering, automation tool analysis, conceptualizing automation plans, and plan execution</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-portfolio-dark-blue mt-6 mb-2">Transfer Pricing Policy Management</h4>
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray">
                      <li>Managed Nomura's adopted Transfer Pricing policies for Global Markets and Investment Banking divisions, after a thorough understanding of the policies written by external consultants and the Tax Authorities (HMRC)</li>
                      <li>Conducted monthly evaluations for cross-border interactions, contributing to financial reporting and inter-company settlements</li>
                      <li>Provided suggestions leading to multiple additional clauses and modifications in internal Nomura TP policies</li>
                      <li>Participated in discussions, conducted data quality analysis, constructed models for implementation, and assessed impacts tailored to the requirements of Nomura management, Tax Authorities, and Regulatory Bodies</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-portfolio-dark-blue mt-6 mb-2">Transfer Pricing Calculations and Analysis</h4>
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray">
                      <li>Developed and analyzed board management packs based on monthly TP calculations to assess cross-border business profitability post-TP</li>
                      <li>Prepared and analyzed daily and weekly Transfer Pricing calculations sent to the Head Office in Japan and other regions (EMEA)</li>
                      <li>Built and ensured effectiveness of controls in Transfer Pricing calculation files</li>
                    </ul>
                  </div>
                  
                  {/* KPMG Senior Executive */}
                  <div className="border-b border-portfolio-light-gray pb-8">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue">Senior Executive, Direct Tax</h3>
                      <div className="flex items-center">
                        <span className="text-portfolio-gray">KPMG</span>
                        <span className="mx-2 text-portfolio-gray">•</span>
                        <span className="text-portfolio-gray">Sept 2015 - Sept 2017</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium text-portfolio-dark-blue mt-4 mb-2">Tax Return Filing, Refund Management, and Withholding Tax</h4>
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray">
                      <li>Managed tax return filing for various entities, including banking branches of foreign banks, NBFCs, financial advisory firms, foreign investment companies, and investors</li>
                      <li>Filed and revised withholding tax returns for clients</li>
                      <li>Obtained high-value tax refunds for clients through thorough understanding of regulations and persuasive discussions with tax officers</li>
                      <li>Provided expert advisory services on withholding tax and tax matters, including implications under the Income Tax Act and treaties</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-portfolio-dark-blue mt-6 mb-2">Tax Compliance, Auditing, and Appeals</h4>
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray">
                      <li>Reviewed tax provisionings, including MAT assessments and pick-and-choose method applications</li>
                      <li>Prepared advance tax calculations and tax audit reports for clients</li>
                      <li>Responded to scrutiny assessment notices and attended meetings with tax officers</li>
                      <li>Filed appeals and submissions with CIT(A) and prepared paperbooks for ITAT appeals</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-portfolio-dark-blue mt-6 mb-2">Due Diligence and Banking Setup</h4>
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray">
                      <li>Performed due diligence of a micro-finance and housing finance companies</li>
                      <li>Actively involved in the application process of a foreign bank to set up a wholly owned subsidiary in India, submitted to the RBI as per regulations</li>
                      <li>Drafting submissions for scrutiny assessment notices received by banks and NBFCs</li>
                    </ul>
                  </div>
                  
                  {/* KPMG Articleship */}
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue">Articleship Experience</h3>
                      <div className="flex items-center">
                        <span className="text-portfolio-gray">KPMG</span>
                        <span className="mx-2 text-portfolio-gray">•</span>
                        <span className="text-portfolio-gray">Sept 2012 - Sept 2015</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc ml-5 space-y-2 text-portfolio-gray mt-4">
                      <li>Designated as a Staff Accountant in Direct Taxation catering to the BFSI Segment</li>
                      <li>Assisted in filing appeals and background research in relation to technical analysis on issues faced by clients</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Education */}
              {activeSection === "education" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between p-6 border border-portfolio-light-gray rounded-lg hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-1">Chartered Accountant</h3>
                      <p className="text-portfolio-gray">ICAI</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-portfolio-gray">November 2015</p>
                      <p className="text-portfolio-blue font-medium">Score: 56%</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between p-6 border border-portfolio-light-gray rounded-lg hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-1">CFA, Level 3</h3>
                      <p className="text-portfolio-gray">CFA Institute</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-portfolio-gray">November 2021</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between p-6 border border-portfolio-light-gray rounded-lg hover:shadow-md transition-all">
                    <div>
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-1">B. Comm</h3>
                      <p className="text-portfolio-gray">R. A. Podar College, Mumbai University</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-portfolio-gray">March 2014</p>
                      <p className="text-portfolio-blue font-medium">Score: 75%</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Skills */}
              {activeSection === "skills" && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Technical Skills</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Automation of processes</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Dashboard creation</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Data modelling</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Statistical analysis</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Predictive Analysis</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Domain Knowledge</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Tax planning</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Regulatory understanding</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Reconciliation of data</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Transfer pricing</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Analysis & Reporting</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Data Analysis</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Interpretation</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Presentation</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Storyboarding</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                      <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Soft Skills</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Cross Cultural Collaboration</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Stakeholder management</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Conflict Resolution</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-portfolio-blue rounded-full mr-3"></span>
                          <span>Negotiation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Software Proficiency */}
              {activeSection === "software" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Software Proficiency</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">MS Excel</h4>
                          <span className="text-portfolio-blue text-sm">Advanced</span>
                        </div>
                        <div className="w-full bg-portfolio-light-gray rounded-full h-2">
                          <div className="bg-portfolio-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Alteryx</h4>
                          <span className="text-portfolio-blue text-sm">Advanced</span>
                        </div>
                        <div className="w-full bg-portfolio-light-gray rounded-full h-2">
                          <div className="bg-portfolio-blue h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">PowerBI</h4>
                          <span className="text-portfolio-blue text-sm">Advanced</span>
                        </div>
                        <div className="w-full bg-portfolio-light-gray rounded-full h-2">
                          <div className="bg-portfolio-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div className="border border-portfolio-light-gray rounded-lg p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Denodo</h4>
                          <span className="text-portfolio-blue text-sm">Intermediate</span>
                        </div>
                        <div className="w-full bg-portfolio-light-gray rounded-full h-2">
                          <div className="bg-portfolio-blue h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* PDF Viewer Section */}
          <div className="max-w-4xl mx-auto mt-16" ref={pdfViewerRef}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-portfolio-light-gray p-6 animate-fade-in opacity-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-portfolio-dark-blue">Full Resume</h2>
                <a 
                  href="https://www.kaushalmohan.com/Kaushal_Mohan_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-blue hover:text-portfolio-dark-blue"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>Open in new tab</span>
                </a>
              </div>
              
              <div className="aspect-[8.5/11] bg-portfolio-light-gray rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-portfolio-gray mb-4" />
                  <p className="text-portfolio-gray mb-4">View my complete resume</p>
                  <a 
                    href="https://www.kaushalmohan.com/Kaushal_Mohan_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-portfolio-blue text-white px-4 py-2 rounded hover:bg-portfolio-dark-blue transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
