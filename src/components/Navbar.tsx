
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
          <NavLink 
            to="/" 
            className="text-xl font-bold text-portfolio-dark-blue"
          >
            Pankhuri Maheshwari
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("link-hover-effect py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray hover:text-portfolio-dark-blue")}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                cn("link-hover-effect py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray hover:text-portfolio-dark-blue")}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => 
                cn("link-hover-effect py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray hover:text-portfolio-dark-blue")}
            >
              Resume
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                cn("link-hover-effect py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray hover:text-portfolio-dark-blue")}
            >
              Contact
            </NavLink>
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
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray")}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                cn("py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray")}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => 
                cn("py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray")}
            >
              Resume
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                cn("py-2 font-medium", 
                isActive ? "text-portfolio-blue" : "text-portfolio-gray")}
            >
              Contact
            </NavLink>
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
