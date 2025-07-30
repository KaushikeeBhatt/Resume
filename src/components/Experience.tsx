import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Apoliums Infotech India Pvt. Ltd.',
      location: 'India',
      period: 'May 2025 - June 2025',
      description: [
        'Built responsive full-stack web apps with RESTful APIs using Node.js & React, enabling seamless data interaction',
        'Improved database performance by 25% via query optimization and schema redesign in MySQL',
        'Deployed web apps on AWS infrastructure using EC2, RDS, and S3; ensured high availability and scalability',
        'Collaborated with senior engineers in agile sprints; followed clean code, Git workflow, and code reviews'
      ],
      technologies: ['React.js', 'Node.js', 'MySQL', 'Bootstrap', 'AWS EC2', 'AWS S3', 'AWS RDS']
    },
    {
      title: 'President',
      company: 'SOCRATES Club (VIT)',
      location: 'VIT Chennai',
      period: 'Jul 2024 - Present',
      description: [
        'Grew club participation by 150% by leading debate events, workshops, and mentorship drives',
        'Organized and managed multiple tech events and competitions throughout the academic year',
        'Led cross-functional teams and mentored junior students in leadership and communication skills',
        'Coordinated with faculty and administration to secure resources and venues for club activities'
      ],
      technologies: ['Leadership', 'Event Management', 'Team Coordination', 'Public Speaking', 'Mentorship']
    },
    {
      title: 'Core Member',
      company: 'PRODINNO Club (VIT)',
      location: 'VIT Chennai',
      period: 'Mar 2024 - Present',
      description: [
        'Led innovation-focused teams on software prototypes and technical projects',
        'Mentored junior students on Data Structures & Algorithms and Software Development Life Cycle',
        'Collaborated on multiple hackathons and coding competitions within the club',
        'Organized technical workshops and coding bootcamps for skill development'
      ],
      technologies: ['DSA', 'SDLC', 'Java', 'Python', 'Mentoring', 'Project Management']
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orchid-primary to-fuchsia bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orchid-light to-fuchsia mx-auto rounded-full" />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              My journey through the tech industry, building impactful solutions and leading innovative projects.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orchid-light via-fuchsia to-orchid-light opacity-30" />
            
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 animate-on-scroll ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-orchid-light to-fuchsia rounded-full border-4 border-charcoal z-10" />
                
                {/* Content Card */}
                <div className="ml-20 md:ml-0 group">
                  <div className="bg-charcoal/80 backdrop-blur-sm border border-orchid-light/20 rounded-2xl p-6 hover:bg-orchid-primary/5 hover:border-orchid-light/40 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia/10">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold text-ivory group-hover:text-orchid-light transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-orchid-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="text-orchid-light font-semibold mb-2">{exp.company}</div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-fuchsia rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-orchid-primary/20 border border-orchid-light/30 rounded-full text-xs text-orchid-light group-hover:bg-orchid-primary/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <button className="px-8 py-4 bg-gradient-to-r from-orchid-primary to-fuchsia rounded-full text-ivory font-semibold hover:shadow-2xl hover:shadow-fuchsia/50 transform hover:scale-105 transition-all duration-300">
             <a href="https://drive.usercontent.google.com/uc?id=1aeObeZbNYfvwROYNux-cCXhFq1t8kkdx&export=download" download>Download Resume</a> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;