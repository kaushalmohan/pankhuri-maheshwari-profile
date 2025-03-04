
import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
}

const Navbar = ({ isScrolled, activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for the navbar
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/80 nav-blur border-b border-gray-200/20 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-xl font-bold text-portfolio-dark-blue"
          >
            Pankhuri Maheshwari
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection("about")}
              className={cn(
                "link-hover-effect py-2 font-medium", 
                activeSection === "about" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray hover:text-portfolio-dark-blue"
              )}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className={cn(
                "link-hover-effect py-2 font-medium", 
                activeSection === "projects" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray hover:text-portfolio-dark-blue"
              )}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("resume")}
              className={cn(
                "link-hover-effect py-2 font-medium", 
                activeSection === "resume" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray hover:text-portfolio-dark-blue"
              )}
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={cn(
                "link-hover-effect py-2 font-medium", 
                activeSection === "contact" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray hover:text-portfolio-dark-blue"
              )}
            >
              Contact
            </button>
            <a 
              href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-portfolio-dark-blue"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 nav-blur border-b border-gray-200/20 shadow-md animate-fade-in">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection("about")}
              className={cn(
                "py-2 text-left font-medium", 
                activeSection === "about" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray"
              )}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className={cn(
                "py-2 text-left font-medium", 
                activeSection === "projects" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray"
              )}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("resume")}
              className={cn(
                "py-2 text-left font-medium", 
                activeSection === "resume" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray"
              )}
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={cn(
                "py-2 text-left font-medium", 
                activeSection === "contact" 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-gray"
              )}
            >
              Contact
            </button>
            <div className="pt-2 border-t border-gray-200">
              <a 
                href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-portfolio-gray"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
