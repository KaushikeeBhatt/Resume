import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kaushikee.bhatt@example.com',
      href: 'mailto:kaushikee.bhatt@example.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9039517596',
      href: 'tel:+919039517596'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Chennai, Tamil Nadu',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/KaushikeeBhatt',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kaushikee-bhatt-bb4687228/ ',
      color: 'hover:text-blue-400'
    }
   
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orchid-primary to-fuchsia bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orchid-light to-fuchsia mx-auto rounded-full" />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-ivory mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-xl hover:bg-orchid-primary/5 hover:border-orchid-light/40 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-orchid-primary to-fuchsia rounded-lg text-ivory group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-ivory font-medium group-hover:text-orchid-light transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-ivory mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-xl text-orchid-light ${social.color} transition-all duration-300 hover:scale-110 hover:border-orchid-light/40`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-orchid-primary/10 to-fuchsia/10 backdrop-blur-sm border border-orchid-light/20 rounded-2xl">
                <h4 className="text-lg font-semibold text-ivory mb-2">Seeking Software Engineering Roles</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Currently seeking Software Engineering roles to contribute to robust, high-impact systems. 
                  Open to full-time opportunities, internships, and collaborative projects in web development and software engineering.
                </p>
                <div className="flex items-center gap-2 text-sm text-orchid-light">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for opportunities
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-xl text-ivory placeholder-gray-400 focus:border-orchid-light focus:outline-none focus:ring-2 focus:ring-orchid-light/20 transition-all duration-300"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-xl text-ivory placeholder-gray-400 focus:border-orchid-light focus:outline-none focus:ring-2 focus:ring-orchid-light/20 transition-all duration-300"
                      placeholder="abc@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-xl text-ivory placeholder-gray-400 focus:border-orchid-light focus:outline-none focus:ring-2 focus:ring-orchid-light/20 transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-xl text-ivory placeholder-gray-400 focus:border-orchid-light focus:outline-none focus:ring-2 focus:ring-orchid-light/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-orchid-primary to-fuchsia rounded-xl text-ivory font-semibold hover:shadow-2xl hover:shadow-fuchsia/50 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia to-orchid-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-green-300 text-sm animate-fade-in">
                  Thank you for your message! I'll get back to you within 24 hours.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-orchid-light/20 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Portfolio. Crafted with <span className="text-fuchsia">❤</span> and lots of <span className="text-orchid-light">coffee</span>.
        </p>
      </div>
    </section>
  );
};

export default Contact;