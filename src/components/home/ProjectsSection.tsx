
import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

// Project type definition for better type safety
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  keyAchievements: string[];
}

// Enhanced project data with better categorization
const projects: Project[] = [
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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div 
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
  );
};

const ProjectsSection = () => {
  // State for project filtering
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
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

  return (
    <section id="projects" className="py-16 md:py-24 bg-portfolio-light-gray/30">
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
            <ProjectCard key={project.id} project={project} />
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
  );
};

export default ProjectsSection;
