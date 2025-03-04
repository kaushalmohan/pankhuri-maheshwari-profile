
import { Mail, Linkedin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-white to-portfolio-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark-blue animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto animate-fade-in">
            I'd love to hear from you! Whether you have a question, want to discuss a potential project, or just want to say hello,
            feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-portfolio-light-gray hover-lift">
              <h2 className="text-2xl font-bold text-portfolio-dark-blue mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-portfolio-light-blue p-3 rounded-full mr-4">
                    <Mail className="text-portfolio-blue h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-portfolio-dark-blue">Email</h3>
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
                    <h3 className="font-medium text-portfolio-dark-blue">LinkedIn</h3>
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
                <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Let's Connect</h3>
                <p className="text-portfolio-gray mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
    </div>
  );
};

export default ContactPage;
