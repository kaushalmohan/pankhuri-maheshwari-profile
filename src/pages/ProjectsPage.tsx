
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

// Project data based on your experience
const projects = [
  {
    id: 1,
    title: "Alteryx Automation Framework",
    description: "Designed and implemented over 30 complex workflows on Alteryx, leading to exponential improvement in team efficiency through automation of repetitive tasks.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    categories: ["Automation", "Data Analytics"],
    technologies: ["Alteryx", "Excel"],
    keyAchievements: [
      "Reduced processing time by 70% for monthly calculations",
      "Eliminated manual errors in data handling",
      "Standardized calculation methodologies across teams"
    ]
  },
  {
    id: 2,
    title: "Transfer Pricing Dashboards",
    description: "Created multiple Power BI dashboards for enhanced data analytics, improving efficiency in reviewing calculations and enabling scenario analysis for transfer pricing decisions.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    categories: ["Data Visualization", "Analytics"],
    technologies: ["Power BI", "SQL", "Excel"],
    keyAchievements: [
      "Built interactive visualizations for complex financial data",
      "Implemented drill-down capabilities for detailed analysis",
      "Created executive dashboards for management reporting"
    ]
  },
  {
    id: 3,
    title: "Global Transfer Pricing Policy Management",
    description: "Managed Nomura's adopted Transfer Pricing policies for Global Markets and Investment Banking divisions after thorough understanding of policies.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    categories: ["Policy Management", "Finance"],
    technologies: ["Documentation", "Regulatory Compliance"],
    keyAchievements: [
      "Streamlined policy implementation across global offices",
      "Ensured compliance with tax authorities in multiple jurisdictions",
      "Provided training to team members on policy implementation"
    ]
  },
  {
    id: 4,
    title: "Cross-Border Interaction Analysis",
    description: "Conducted monthly evaluations for cross-border interactions, contributing to financial reporting and inter-company settlements with significant impact on company finances.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    categories: ["Financial Analysis", "Reporting"],
    technologies: ["Excel", "Data Analysis"],
    keyAchievements: [
      "Developed methodologies for evaluating complex transactions",
      "Created financial models for projecting settlement outcomes",
      "Improved reporting accuracy by 25%"
    ]
  },
  {
    id: 5,
    title: "Tax Compliance Process Optimization",
    description: "Streamlined the tax return filing process for various entities including banking branches and foreign investment companies, improving efficiency and reducing errors.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    categories: ["Tax Filing", "Process Improvement"],
    technologies: ["Documentation", "Regulatory Compliance"],
    keyAchievements: [
      "Reduced filing preparation time by 40%",
      "Implemented quality control checks",
      "Created templates and process documentation"
    ]
  },
  {
    id: 6,
    title: "Transfer Pricing Calculation Framework",
    description: "Developed and analyzed board management packs based on monthly TP calculations to assess cross-border business profitability, with significant financial impact.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    categories: ["Financial Analysis", "Reporting"],
    technologies: ["Excel", "Alteryx", "PowerBI"],
    keyAchievements: [
      "Created standardized calculation templates",
      "Automated monthly reporting process",
      "Improved data accuracy and consistency"
    ]
  }
];

// All unique categories
const allCategories = [...new Set(projects.flatMap(project => project.categories))];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Refs for animation
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) observer.observe(projectsRef.current);

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
            My Projects
          </h1>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto animate-fade-in">
            Explore my key projects and professional achievements in finance, data analytics, and process automation.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16" ref={projectsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="mb-12 opacity-0 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-portfolio-dark-blue mb-4 md:mb-0">
                Project Portfolio
              </h2>
              
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
                      {allCategories.map((category) => (
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
            <div className="md:hidden flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedCategory("All")}
                className={cn(
                  "px-3 py-1 rounded-full text-sm",
                  selectedCategory === "All" 
                    ? "bg-portfolio-blue text-white" 
                    : "bg-portfolio-light-gray text-portfolio-dark-gray"
                )}
              >
                All
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-fade-in">
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
    </div>
  );
};

export default ProjectsPage;
