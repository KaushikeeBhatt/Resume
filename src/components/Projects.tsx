import React, { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink, Eye, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  const projects = [
    {
      title: 'D2D Designer - Design Discovery Platform',
      description: 'Full-stack application with 500+ users to discover trending hackathons and UI inspirations. Features AI-driven ranking algorithm and automated data scraping.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Puppeteer'],
      category: 'fullstack',
      github: '#',
      demo: '#',
      features: ['500+ active users', 'AI ranking algorithm', 'Data scraping automation', '1K+ daily API calls'],
    },
    {
      title: 'V-Echo & SCOPE-Connect - Faculty Portal',
      description: 'UI development for 200+ faculty members to communicate, post announcements, and share resources with real-time updates and optimized performance.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'CSS3', 'REST APIs', 'JavaScript'],
      category: 'fullstack',
      github: '#',
      demo: '#',
      features: ['200+ faculty users', 'Real-time updates', '50% load time reduction', 'Certificate awarded'],
    },
    {
      title: 'Healthcare Analytics Dashboard – Power BI',
      description: 'Interactive Power BI dashboard for visualizing healthcare metrics like admissions, diagnoses, billing, and bed occupancy with DAX-powered KPIs.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'DAX', 'Data Modeling'],
      category: 'ai',
      github: '#',
      demo: '#',
      features: [
        'Patient metrics visualized',
        'DAX-powered KPIs',
        'Insurance trend analysis',
        'Dynamic storytelling charts',
      ],
    },
    {
      title: 'Sales Analytics Dashboard – Tableau',
      description: 'Dynamic Tableau dashboard built using multiple CSV datasets for analyzing trends in sales, profit, and quantity with interactive filters and KPI cards.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Tableau', 'KPI Cards', 'Data Blending'],
      category: 'ai',
      github: '#',
      demo: '#',
      features: [
        'Multi-source CSV integration',
        'Sales & profit trends',
        'Interactive filtering',
        'Product-wise forecasting',
      ],
    },
    {
      title: "Solveathon'24 Hackathon",
      description: 'Organized and managed a 24-hour tech hackathon with 300+ participants, industry judges, and major sponsors including PepsiCo and Devfolio.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Event Management', 'Project Coordination', 'Sponsorship', 'Team Leadership'],
      category: 'frontend',
      github: '#',
      demo: '#',
      features: ['300+ participants', 'Industry judges', 'Major sponsors', '24-hour duration'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'iot', label: 'IoT' },
  ];

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter]);

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
  }, [filteredProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orchid-primary to-fuchsia bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orchid-light to-fuchsia mx-auto rounded-full" />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              A showcase of my recent work, spanning from full-stack applications to cutting-edge AI solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
            <Filter className="w-5 h-5 text-orchid-light mr-2" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orchid-primary to-fuchsia text-ivory shadow-lg'
                    : 'bg-charcoal/50 text-gray-400 hover:text-orchid-light border border-orchid-light/20 hover:border-orchid-light/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-on-scroll group relative bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-2xl overflow-hidden hover:border-orchid-light/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-charcoal/80 backdrop-blur-sm rounded-full text-orchid-light hover:text-fuchsia transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-charcoal/80 backdrop-blur-sm rounded-full text-orchid-light hover:text-fuchsia transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-ivory mb-3 group-hover:text-orchid-light transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-orchid-primary/20 border border-orchid-light/30 rounded text-xs text-orchid-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-400">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-fuchsia" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-orchid-light/20">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-orchid-light hover:text-fuchsia transition-colors duration-300 text-sm font-medium"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-orchid-light transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <button className="px-8 py-4 border-2 border-orchid-light text-orchid-light rounded-full font-semibold hover:bg-orchid-light hover:text-charcoal transform hover:scale-105 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
