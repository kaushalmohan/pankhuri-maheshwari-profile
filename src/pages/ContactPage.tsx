
import { useState, useEffect, useRef, FormEvent } from "react";
import { Send, Mail, Linkedin, CheckCircle } from "lucide-react";
import { toast } from "sonner";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactPage = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Refs for animation
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  // Form validation
  const validateForm = () => {
    const errors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formValues.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if there was one
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Your message has been sent successfully!");
        
        // Reset form after submission
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset submitted state after a few seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

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

    if (formRef.current) observer.observe(formRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);

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
            Contact Me
          </h1>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto animate-fade-in">
            Have a question or want to work together? Feel free to reach out through this form or my social profiles.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3" ref={formRef}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-portfolio-light-gray p-8 opacity-0">
                <h2 className="text-2xl font-bold text-portfolio-dark-blue mb-6">Send Me a Message</h2>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-portfolio-light-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue`}
                        placeholder="Enter your name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-portfolio-light-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue`}
                        placeholder="Enter your email"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${formErrors.subject ? 'border-red-500' : 'border-portfolio-light-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue`}
                      placeholder="What is this about?"
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-portfolio-light-gray'} rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue`}
                      placeholder="Type your message here..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded text-white font-medium transition-colors ${
                      isSubmitted 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-portfolio-blue hover:bg-portfolio-dark-blue'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} hover-lift`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2" ref={contactInfoRef}>
              <div className="bg-portfolio-dark-blue text-white rounded-xl overflow-hidden shadow-lg p-8 opacity-0">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-portfolio-light-blue" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:pankhuri_maheshwari@ymail.com" 
                        className="text-portfolio-light-gray hover:text-white transition-colors"
                      >
                        pankhuri_maheshwari@ymail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 mr-4 mt-1 text-portfolio-light-blue" />
                    <div>
                      <h3 className="font-medium mb-1">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-light-gray hover:text-white transition-colors"
                      >
                        Pankhuri Maheshwari
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <h3 className="font-medium mb-3">Connect with me</h3>
                    <p className="text-portfolio-light-gray mb-6">
                      I'm currently open to new opportunities and collaborations in finance and data analytics.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/pankhuri-maheshwari-195845159/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white text-portfolio-dark-blue rounded hover:bg-portfolio-light-gray transition-colors"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Additional Info Card */}
              <div className="mt-8 bg-white rounded-xl overflow-hidden shadow-lg border border-portfolio-light-gray p-8 opacity-0 animate-fade-in">
                <h3 className="text-xl font-bold text-portfolio-dark-blue mb-4">Response Time</h3>
                <p className="text-portfolio-gray">
                  I typically respond to all inquiries within 24-48 hours. Thank you for your patience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
