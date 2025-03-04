
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-portfolio-dark-blue text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pankhuri Maheshwari</h3>
            <p className="text-portfolio-light-gray mb-4 max-w-xs">
              Manager, Transfer Pricing at Nomura with expertise in process automation, tax policy, and data analytics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-portfolio-light-blue transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:pankhuri_maheshwari@ymail.com" 
                className="text-white hover:text-portfolio-light-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-portfolio-light-gray hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-portfolio-light-gray hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("resume")}
                  className="text-portfolio-light-gray hover:text-white transition-colors"
                >
                  Resume
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-portfolio-light-gray hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-portfolio-light-gray mb-2">pankhuri_maheshwari@ymail.com</p>
            <p className="text-portfolio-light-gray">+91-9833391564</p>
          </div>
        </div>
        
        <div className="border-t border-portfolio-gray/30 mt-8 pt-8 text-center text-portfolio-light-gray">
          <p>&copy; {currentYear} Pankhuri Maheshwari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
