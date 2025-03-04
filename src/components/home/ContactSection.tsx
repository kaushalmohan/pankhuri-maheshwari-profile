
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-portfolio-dark-blue">Let's Connect</h2>
        <p className="text-lg text-portfolio-gray mb-12 max-w-2xl mx-auto text-center">
          Have a question or want to discuss a potential opportunity? I'd love to hear from you! 
          Feel free to reach out to me directly using the contact information below.
        </p>
        
        <div className="max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default ContactSection;
