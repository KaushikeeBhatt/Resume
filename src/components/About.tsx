import React, { useRef, useEffect } from 'react';
import { Heart, Code, Palette, Zap } from 'lucide-react';
import photo from '../assets/IMG_7227.JPG';
const About: React.FC = () => {
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

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, elegant solutions that stand the test of time.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Focus',
      description: 'Bridging the gap between beautiful design and flawless functionality.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing every detail for lightning-fast, smooth experiences.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Every decision is made with the end user experience in mind.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orchid-primary to-fuchsia bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orchid-light to-fuchsia mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orchid-primary/20 to-fuchsia/20 rounded-full backdrop-blur-sm border border-orchid-light/30 flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                  <div className="w-72 h-72 bg-gradient-to-br from-charcoal to-charcoal-light rounded-full flex items-center justify-center text-orchid-light text-8xl font-light group-hover:text-fuchsia transition-colors duration-300">
                  <img
                    src={photo}
                    alt="Kaushikee"
                    className="w-full h-full object-cover rounded-full shadow-md transition-transform duration-300"
                  />

                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-fuchsia to-orchid-primary rounded-full animate-float opacity-80" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orchid-light to-fuchsia rounded-full animate-float-delayed opacity-60" />
              </div>
            </div>

            <div className="animate-on-scroll space-y-6">
              <h3 className="text-3xl font-bold text-ivory mb-6">
                Software Developer &
                <span className="text-orchid-light"> Full-Stack Engineer</span>
              </h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  Computer Science undergraduate at Vellore Institute of Technology, Chennai with hands-on experience 
                  in software engineering, scalable web systems, and data-intensive applications. Currently maintaining 
                  a CGPA of 8.28/10 with expected graduation in May 2026.
                </p>
                <p>
                  Proficient in Java, DSA, and full-stack development with React, Node.js, MySQL, and MongoDB. 
                  Strong foundation in backend architecture, cloud deployment (AWS), and agile workflows. 
                  Currently seeking Software Engineering roles to contribute to robust, high-impact systems.
                </p>
                <p>
                  Led multiple production-grade applications including D2D Designer with 500+ users, and served 
                  as President of SOCRATES Club, growing participation by 150%. Strong problem-solving skills 
                  with 300+ LeetCode problems solved and experience in leading cross-functional teams.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Java', 'React.js', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'MySQL', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-orchid-primary/20 backdrop-blur-sm border border-orchid-light/30 rounded-full text-orchid-light text-sm hover:bg-orchid-primary/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-on-scroll group relative p-6 bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-2xl hover:bg-orchid-primary/10 hover:border-orchid-light/40 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-orchid-light group-hover:text-fuchsia transition-colors duration-300 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-ivory mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-orchid-primary/5 to-fuchsia/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;