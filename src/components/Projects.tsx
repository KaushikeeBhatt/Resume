import React, { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink, Eye, Filter } from 'lucide-react';

// ----------------------------------------------------------------------
// --- 🛠️ TYPE DEFINITION TO FIX 'any' WARNINGS (Ln 7, 242, 253) ---
// ----------------------------------------------------------------------
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
  features: string[];
  certificate?: string; // Optional property for the one project that needs it
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  // FIX: Replaced 'any[]' with the new 'Project[]' interface
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // ----------------------------------------------------------------------
  // --- PROJECTS DATA ARRAY ---
  // ----------------------------------------------------------------------
  const projects: Project[] = [ // Added Project[] type annotation
    // --- Existing Project 1: D2D Designer ---
    {
      title: 'D2D Designer - Design Discovery Platform (Full Stack)',
      description: 'A production-ready **Full-Stack discovery platform** used by 500+ users. Architected a custom **AI-driven ranking algorithm** and implemented automated data scraping to provide a real-time feed of trending content.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Puppeteer'],
      category: 'fullstack',
      github: '#', // <-- ACTION: UPDATE THIS LINK
      demo: '#', // <-- ACTION: UPDATE THIS LINK
      features: ['500+ active users', 'AI-driven content ranking', 'Data scraping automation', '1K+ daily API calls'],
    },
    // --- Existing Project 2: V-Echo & SCOPE-Connect ---
    {
      title: 'V-Echo & SCOPE-Connect - Faculty Portal (UI/UX)',
      description: 'Led the **Frontend development** for an internal communications portal serving 200+ faculty members. Successfully **reduced initial page load time by 50%** and integrated real-time APIs for instant announcements and resource sharing.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'CSS3', 'REST APIs', 'JavaScript'],
      category: 'frontend',
      github: '#', // <-- ACTION: UPDATE THIS LINK
      demo: 'https://drive.google.com/file/d/11LGR_74VedpeCP6VDQQ1H7lQlZeNfGMQ/view?usp=drivesdk',
      certificate: 'https://drive.google.com/file/d/119c0B55-OIyi-bYi6amHjkMTmL3S4Rfk/view?usp=drivesdk',
      features: ['200+ faculty users', 'Real-time updates', '50% load time reduction', 'Certificate awarded'],
    },
    // --- Existing Project 3: Healthcare Analytics Dashboard ---
    {
      title: 'Healthcare Analytics Dashboard (Power BI)',
      description: 'Designed and deployed an **interactive Power BI dashboard** for visualization of key healthcare metrics. Leveraged **DAX scripting** to create complex KPIs for tracking admissions, bed occupancy, and insurance trends.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'DAX', 'Data Modeling'],
      category: 'data analysis',
      github: '#', // <-- ACTION: UPDATE THIS LINK
      demo: '#', // <-- ACTION: UPDATE THIS LINK
      features: ['Patient metrics visualized', 'DAX-powered KPIs', 'Insurance trend analysis', 'Dynamic storytelling charts'],
    },
    // --- Existing Project 4: Sales Analytics Dashboard ---
    {
      title: 'Sales Analytics Dashboard (Tableau)',
      description: 'Dynamic Tableau dashboard built using multiple CSV datasets for analyzing trends in sales, profit, and quantity with interactive filters and KPI cards.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Tableau', 'KPI Cards', 'Data Blending'],
      category: 'data analysis',
      github: '#', // <-- ACTION: UPDATE THIS LINK
      demo: '#', // <-- ACTION: UPDATE THIS LINK
      features: ['Multi-source CSV integration', 'Sales & profit trends', 'Interactive filtering', 'Product-wise forecasting'],
    },
    // --- Existing Project 5: Solveathon '24 Hackathon ---
    {
      title: "Solveathon'24 Hackathon (Project Lead)",
      description: 'Led the **end-to-end planning and execution** of a 24-hour tech hackathon with 300+ participants. Successfully secured partnerships with major industry sponsors, **managing a 15+ member core team**.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Event Management', 'Project Coordination', 'Sponsorship', 'Team Leadership'],
      category: 'management',
      github: '#', // <-- ACTION: UPDATE THIS LINK
      demo: '#', // <-- ACTION: UPDATE THIS LINK
      features: ['300+ participants', 'Industry judges', 'Major sponsors', '24-hour duration'],
    },
    
    // ----------------------------------------------------------------------
    // --- NEW PROJECTS (Based on your GitHub links) ---
    // ----------------------------------------------------------------------
    {
      title: 'LinkedIn Job Application Automation Bot',
      description: 'Developed an automation script utilizing **Python and Selenium** to significantly streamline the job search process by automating the filtering, visiting, and application submission for jobs on LinkedIn.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Selenium', 'Web Automation', 'Data Filtering'],
      category: 'automation',
      github: 'https://github.com/KaushikeeBhatt/LinkedIn-Automation-job-apply',
      demo: '#', // <-- ACTION: Add a video demonstration link
      features: ['Automates repetitive tasks', 'Efficient job filtering', 'Utilizes browser automation', 'Optimizes job search workflow'],
    },
    {
      title: 'Salon Management System',
      description: 'Designed and implemented a full-stack web application to manage **real-time appointments, billing, staff scheduling, and inventory** for a business, ensuring seamless operations and record-keeping.',
      image: 'https://images.pexels.com/photos/4099479/pexels-photo-4099479.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Backend Framework', 'SQL/NoSQL Database'],
      category: 'fullstack',
      github: 'https://github.com/KaushikeeBhatt/salon-management-system',
      demo: '#', // <-- ACTION: Add live link or walkthrough video
      features: ['Real-time appointment booking', 'Integrated billing & invoicing', 'Inventory tracking', 'Improved operational efficiency'],
    },
    {
      title: 'Digital File Tracking System',
      description: 'Built a robust system to track the real-time movement and status of documents within an organizational workflow. The solution ensures a clear **audit trail** and enhances **document accountability**.',
      image: 'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['System Design', 'Database Modeling', 'Web Forms', 'Workflow Management'],
      category: 'system-design',
      github: 'https://github.com/KaushikeeBhatt/FileTrackingSystem',
      demo: '#', // <-- ACTION: Add live link or walkthrough video
      features: ['Transparent document flow', 'Comprehensive audit logging', 'Role-based access control', 'Streamlines approvals'],
    },
    {
      title: 'Curated Design Resources',
      description: 'A highly organized GitHub repository compiling **essential tools, links, and learning materials** for UI/UX designers and creative developers. Showcases excellent curation and domain expertise.',
      image: 'https://images.pexels.com/photos/3847366/pexels-photo-3847366.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Content Curation', 'Markdown', 'UI/UX Principles'],
      category: 'content',
      github: 'https://github.com/KaushikeeBhatt/Design-Resources',
      demo: 'https://github.com/KaushikeeBhatt/Design-Resources',
      features: ['Categorized resource directory', 'Showcases domain knowledge', 'Highly accessible organization', 'Continuous content updates'],
    },
    {
      title: 'NPTEL Course Notes: Psychology of Learning',
      description: 'Detailed and structured repository of notes and summarized concepts from the NPTEL "Psychology of Learning" course. Highlights **strong academic discipline** and the ability to synthesize complex educational material.',
      image: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Academic Documentation', 'Markdown', 'Knowledge Synthesis'],
      category: 'academic',
      github: 'https://github.com/KaushikeeBhatt/nptel-Psychology-of-Learning',
      demo: 'https://github.com/KaushikeeBhatt/nptel-Psychology-of-Learning',
      features: ['Structured learning path', 'Demonstrates academic rigor', 'Public knowledge sharing', 'Detailed concept maps'],
    },
  ];

  // ----------------------------------------------------------------------
  // --- UPDATED FILTERS ---
  // ----------------------------------------------------------------------
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend-UI/UX' },
    { id: 'automation', label: 'Automation' },
    { id: 'system-design', label: 'System Design' },
    { id: 'data analysis', label: 'Data Analysis' },
    { id: 'management', label: 'Management' },
    { id: 'content', label: 'Content/Curation' },
    { id: 'academic', label: 'Academic' }
  ];

  // FIX 1: Added 'projects' to dependency array to satisfy react-hooks/exhaustive-deps (Ln 145)
  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter, projects]); 

  // FIX 2: Added 'filteredProjects' to dependency array. It's used in the cleanup function's logic implicitly 
  // because the effect re-runs when 'filteredProjects' changes to set up the IntersectionObserver 
  // for the new elements. A common, safe practice for observers dependent on rendered elements.
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
  }, [filteredProjects]); // Added filteredProjects

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
              A showcase of my recent work, spanning from full-stack applications to cutting-edge automation and data insights.
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
            {/* FIX: project is now of type 'Project', removing 'implicitly has an 'any' type' warning */}
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
                    {/* FIX: tech is now of type 'string', removing 'implicitly has an 'any' type' warning */}
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
                    {/* FIX: feature/idx are now typed by the .map context, removing 'implicitly has an 'any' type' warning */}
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
                    {/* Accessing project.certificate is now safe due to the Project interface */}
                    {project.title === 'V-Echo & SCOPE-Connect - Faculty Portal (UI/UX)' && project.certificate && ( 
                      <div className="flex flex-col gap-1 ml-4">
                        <a
                          href={project.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline text-xs hover:text-blue-600"
                        >
                          [Certificate]
                        </a>
                      </div>
                    )}
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