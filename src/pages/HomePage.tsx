
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Award, FileText, BarChart, ExternalLink, Filter, Mail, Linkedin, Send, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Enhanced project data with better categorization
const projects = [
  {
    id: 1,
    title: "Alteryx Automation Framework",
    description: "Created a comprehensive automation framework using Alteryx that revolutionized our team's workflow. This project involved designing and implementing over 30 complex workflows that streamlined repetitive tasks and brought unprecedented efficiency to our operations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    categories: ["Automation", "Data Analytics"],
    technologies: ["Alteryx", "Excel"],
    keyAchievements: [
      "Reduced processing time by 70% for monthly calculations",
      "Eliminated manual errors in data handling",
      "Standardized calculation methodologies across teams",
      "Provided intuitive interface for non-technical users"
    ]
  },
  {
    id: 2,
    title: "Transfer Pricing Dashboards",
    description: "Developed a suite of interactive Power BI dashboards that transformed how we visualize and analyze transfer pricing data. These dashboards provided our team with dynamic tools to review calculations and perform scenario analysis for better decision-making.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    categories: ["Data Visualization", "Financial Analysis"],
    technologies: ["Power BI", "SQL", "Excel"],
    keyAchievements: [
      "Built interactive visualizations for complex financial data",
      "Implemented drill-down capabilities for detailed analysis",
      "Created executive dashboards for management reporting",
      "Enabled real-time scenario testing for business decisions"
    ]
  },
  {
    id: 3,
    title: "Global TP Policy Management",
    description: "Led the management of Nomura's Transfer Pricing policies for Global Markets and Investment Banking divisions. This involved developing a deep understanding of policies created by external consultants and ensuring their proper implementation across the organization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    categories: ["Policy Management", "Finance"],
    technologies: ["Documentation", "Regulatory Compliance"],
    keyAchievements: [
      "Streamlined policy implementation across global offices",
      "Ensured compliance with tax authorities in multiple jurisdictions",
      "Provided training to team members on policy implementation",
      "Created accessible documentation for complex policies"
    ]
  },
  {
    id: 4,
    title: "Cross-Border Transaction Analysis",
    description: "Developed and implemented a robust framework for evaluating cross-border interactions within the organization. This monthly analysis played a critical role in financial reporting and inter-company settlements, directly impacting the company's financial position.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    categories: ["Financial Analysis", "Reporting"],
    technologies: ["Excel", "Data Analysis", "Alteryx"],
    keyAchievements: [
      "Developed methodologies for evaluating complex transactions",
      "Created financial models for projecting settlement outcomes",
      "Improved reporting accuracy by 25%",
      "Reduced analysis time from 3 days to 4 hours"
    ]
  },
  {
    id: 5,
    title: "Tax Compliance Optimization",
    description: "Revamped the tax return filing process for various entities including banking branches and foreign investment companies. This comprehensive optimization project improved efficiency, reduced errors, and ensured timely compliance with regulatory requirements.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    categories: ["Tax Filing", "Process Improvement"],
    technologies: ["Documentation", "Regulatory Compliance"],
    keyAchievements: [
      "Reduced filing preparation time by 40%",
      "Implemented quality control checks to eliminate errors",
      "Created templates and comprehensive process documentation",
      "Established a repeatable framework for future filings"
    ]
  },
  {
    id: 6,
    title: "Board Management Reporting",
    description: "Created a sophisticated reporting system based on monthly Transfer Pricing calculations to assess cross-border business profitability. These board management packs provided crucial insights for executive decision-making and strategic planning.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    categories: ["Financial Analysis", "Reporting", "Data Visualization"],
    technologies: ["Excel", "Alteryx", "PowerBI"],
    keyAchievements: [
      "Created standardized calculation templates for consistency",
      "Automated monthly reporting process saving 20+ hours per month",
      "Improved data accuracy and consistency across reports",
      "Developed executive summaries that highlighted key insights"
    ]
  },
  {
    id: 7,
    title: "Tax Advisory Knowledge Base",
    description: "Developed a comprehensive knowledge base for tax advisory services, consolidating expertise and best practices gained from working with diverse clients. This resource became an invaluable tool for the team to provide consistent, high-quality advisory services.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    categories: ["Tax Advisory", "Knowledge Management"],
    technologies: ["Documentation", "Knowledge Sharing"],
    keyAchievements: [
      "Centralized tax advisory knowledge from multiple experts",
      "Created searchable database of precedents and solutions",
      "Reduced research time for complex advisory requests by 60%",
      "Implemented regular updates to reflect regulatory changes"
    ]
  },
  {
    id: 8,
    title: "Tax Refund Optimization",
    description: "Led initiatives to optimize tax refund processes for clients through thorough understanding of regulations and effective communication with tax authorities. This project resulted in significant financial benefits for clients while ensuring full compliance.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    categories: ["Tax Advisory", "Client Success"],
    technologies: ["Regulatory Compliance", "Negotiation"],
    keyAchievements: [
      "Secured substantial tax refunds for multiple clients",
      "Developed repeatable methodology for refund applications",
      "Built positive relationships with tax authorities",
      "Created documentation templates for future refund requests"
    ]
  }
];

// Group projects by category
const projectCategories = [...new Set(projects.flatMap(project => project.categories))].sort();

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
  // State for project filtering
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // State for contact form
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  
  // Refs for animation and scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.categories.includes(selectedCategory)
      ));
    }
  }, [selectedCategory]);

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

  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero/About Section */}
      <section id="about" ref={aboutRef} className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-portfolio-light-gray">
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
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="bg-portfolio-blue text-white px-6 py-3 rounded hover:bg-portfolio-dark-blue transition-colors hover-lift inline-flex items-center"
                >
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth"
                      });
                    }
                  }}
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

      {/* Experience Summary */}
      <section id="experience" ref={experienceRef} className="py-16 md:py-24 opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark-blue">My Journey So Far</h2>
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
                  <p>• Transformed team efficiency by building 30+ complex Alteryx workflows that automated repetitive tasks</p>
                  <p>• Designed interactive Power BI dashboards that turned raw data into actionable insights for scenario planning</p>
                  <p>• Guided the implementation of Nomura's Transfer Pricing policies across Global Markets and Investment Banking</p>
                  <p>• Led monthly cross-border interaction analyses that directly impacted financial reporting and settlements</p>
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
                  <p>• Orchestrated tax return filing for diverse financial entities, ensuring accuracy and compliance</p>
                  <p>• Secured client tax refunds through expert handling of withholding tax returns</p>
                  <p>• Delivered practical advisory services on complex tax matters, translating technical jargon into clear guidance</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="pill">Tax Filing</span>
                  <span className="pill">Tax Advisory</span>
                  <span className="pill">Client Communication</span>
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
                  <p>• Cut my teeth as a Staff Accountant in Direct Taxation, specializing in the BFSI Segment</p>
                  <p>• Contributed to technical research and appeal filings, developing a strong foundation in tax analysis</p>
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

      {/* Projects Section with Better Categorization */}
      <section id="projects" ref={projectsRef} className="py-16 md:py-24 bg-portfolio-light-gray/30 opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-portfolio-dark-blue">
            Projects & Achievements
          </h2>
          <p className="text-lg text-portfolio-gray mb-12 max-w-2xl mx-auto text-center">
            Here's a collection of my key projects and professional accomplishments. Each represents a unique challenge that I've tackled with creativity and expertise.
          </p>
          
          {/* Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4 md:mb-0">
                Explore My Work
              </h3>
              
              <div className="relative">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 bg-white border border-portfolio-light-gray px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <Filter className="h-4 w-4 text-portfolio-gray" />
                  <span className="text-portfolio-dark-gray">Filter by: {selectedCategory}</span>
                </button>
                
                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-portfolio-light-gray z-10">
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setSelectedCategory("All");
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md hover:bg-portfolio-light-gray/50 transition-colors",
                          selectedCategory === "All" ? "bg-portfolio-light-gray/80 font-medium" : ""
                        )}
                      >
                        All Projects
                      </button>
                      {projectCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-md hover:bg-portfolio-light-gray/50 transition-colors",
                            selectedCategory === category ? "bg-portfolio-light-gray/80 font-medium" : ""
                          )}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile horizontal category pills */}
            <div className="md:hidden flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={cn(
                  "px-3 py-1 rounded-full text-sm whitespace-nowrap",
                  selectedCategory === "All" 
                    ? "bg-portfolio-blue text-white" 
                    : "bg-portfolio-light-gray text-portfolio-dark-gray"
                )}
              >
                All
              </button>
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm whitespace-nowrap",
                    selectedCategory === category 
                      ? "bg-portfolio-blue text-white" 
                      : "bg-portfolio-light-gray text-portfolio-dark-gray"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-portfolio-light-gray hover-lift"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map((category, idx) => (
                      <span key={idx} className="pill">{category}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-portfolio-dark-blue">{project.title}</h3>
                  <p className="text-portfolio-gray mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-portfolio-dark-blue mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-portfolio-light-blue/10 text-portfolio-blue px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-portfolio-dark-blue mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-portfolio-gray space-y-1">
                      {project.keyAchievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-blue mt-1.5 mr-2"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-portfolio-gray">No projects found for the selected category.</p>
              <button 
                onClick={() => setSelectedCategory("All")} 
                className="mt-4 text-portfolio-blue hover:text-portfolio-dark-blue underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-16 md:py-24 opacity-0">
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
      
      {/* Resume Section */}
      <section id="resume" className="py-16 md:py-24 bg-portfolio-light-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-portfolio-dark-blue">My Resume</h2>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto">
            Want to see my full professional background? Check out my detailed resume below.
          </p>
          
          {/* Education Timeline */}
          <div ref={educationRef} className="opacity-0 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-portfolio-dark-blue">Education Journey</h3>
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-light-blue"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-blue"></div>
                    
                    {/* Content - alternating sides */}
                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-portfolio-light-gray hover-lift">
                          <h4 className="text-xl font-bold mb-1 text-portfolio-dark-blue">{edu.degree}</h4>
                          <p className="text-portfolio-gray">{edu.institution}</p>
                          <p className="text-sm text-portfolio-gray mb-2">{edu.date}</p>
                          {edu.score && (
                            <div className="mt-2 text-portfolio-blue font-medium">
                              Score: {edu.score}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
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

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 md:py-24 opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-portfolio-dark-blue">Let's Connect</h2>
          <p className="text-lg text-portfolio-gray mb-12 max-w-2xl mx-auto text-center">
            Have a question or want to discuss a potential opportunity? I'd love to hear from you! 
            Feel free to reach out using the form below or connect with me directly.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-portfolio-light-gray hover-lift">
                  <h3 className="text-2xl font-bold text-portfolio-dark-blue mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-portfolio-light-blue p-3 rounded-full mr-4">
                        <Mail className="text-portfolio-blue h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-portfolio-dark-blue">Email</h4>
                        <a 
                          href="mailto:pankhuri_maheshwari@ymail.com" 
                          className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                        >
                          pankhuri_maheshwari@ymail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-portfolio-light-blue p-3 rounded-full mr-4">
                        <Linkedin className="text-portfolio-blue h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-portfolio-dark-blue">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <hr className="my-8 border-portfolio-light-gray" />
                  
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-dark-blue mb-4">Why Connect?</h4>
                    <p className="text-portfolio-gray mb-6">
                      I'm always excited to discuss new ideas, share insights about finance and data analytics, 
                      or explore potential collaborations. Whether you have a specific question or just want 
                      to say hello, I'm happy to connect!
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-portfolio-blue text-white px-5 py-2.5 rounded hover:bg-portfolio-dark-blue transition-colors hover-lift"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span>View LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-portfolio-light-gray hover-lift">
                  <h3 className="text-2xl font-bold text-portfolio-dark-blue mb-6">Send Me a Message</h3>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark-blue mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-portfolio-light-gray rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark-blue mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-portfolio-light-gray rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-portfolio-dark-blue mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-portfolio-light-gray rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-colors"
                        placeholder="How can I help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark-blue mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-portfolio-light-gray rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-colors resize-none"
                        placeholder="I'd love to hear about your experience in..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || formStatus === "success"}
                      className={`w-full inline-flex justify-center items-center px-5 py-3 rounded transition-colors ${
                        formStatus === "success" 
                          ? "bg-green-500 hover:bg-green-600 text-white" 
                          : "bg-portfolio-blue hover:bg-portfolio-dark-blue text-white"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : formStatus === "success" ? (
                        <span className="inline-flex items-center">
                          <Check className="mr-2 h-4 w-4" />
                          Message Sent!
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </button>
                    
                    {formStatus === "error" && (
                      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <p>There was an error sending your message. Please try again later.</p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default HomePage;
