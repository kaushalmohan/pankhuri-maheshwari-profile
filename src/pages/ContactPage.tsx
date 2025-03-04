
import { useState, useRef } from "react";
import { Mail, Linkedin, Send, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          <div className="max-w-6xl mx-auto" ref={containerRef}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
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
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-portfolio-light-gray hover-lift">
                  <h2 className="text-2xl font-bold text-portfolio-dark-blue mb-6">Send Me a Message</h2>
                  
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
                        placeholder="Your message here..."
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
    </div>
  );
};

export default ContactPage;
