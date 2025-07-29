import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Cloud, Palette, Globe, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'C', level: 70 },
        { name: 'R', level: 65 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'REST APIs', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 75 },
        { name: 'AWS (EC2, RDS, S3)', level: 80 }
      ]
    },
    {
      title: 'Development Tools',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 90 },
        { name: 'IntelliJ IDEA', level: 85 },
        { name: 'Cursor AI', level: 80 }
      ]
    },
    {
      title: 'CS Fundamentals',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 85 },
        { name: 'Object-Oriented Programming', level: 90 },
        { name: 'Database Management Systems', level: 80 },
        { name: 'Operating Systems', level: 75 },
        { name: 'Computer Networks', level: 75 }
      ]
    },
    {
      title: 'Productivity & Analytics',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: 'Tableau', level: 80 },
        { name: 'Power BI', level: 75 },
        { name: 'Excel', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Notion', level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            const categoryIndex = parseInt(entry.target.getAttribute('data-category') || '0');
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, categoryIndex]);
            }, categoryIndex * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.skill-category');
      elements.forEach((el, index) => {
        el.setAttribute('data-category', index.toString());
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const getSkillBarDelay = (categoryIndex: number, skillIndex: number) => {
    return `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orchid-primary to-fuchsia bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orchid-light to-fuchsia mx-auto rounded-full" />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="skill-category group bg-charcoal/50 backdrop-blur-sm border border-orchid-light/20 rounded-2xl p-6 hover:bg-orchid-primary/5 hover:border-orchid-light/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orchid-primary to-fuchsia rounded-xl text-ivory group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ivory group-hover:text-orchid-light transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-orchid-light text-sm font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-2 bg-charcoal-light rounded-full overflow-hidden">
                        <div
                          className={`absolute left-0 top-0 h-full bg-gradient-to-r from-orchid-light to-fuchsia rounded-full transition-all duration-1000 ease-out ${
                            visibleSkills.includes(categoryIndex) ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            width: visibleSkills.includes(categoryIndex) ? `${skill.level}%` : '0%',
                            transitionDelay: getSkillBarDelay(categoryIndex, skillIndex)
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-orchid-light/20">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Proficiency</span>
                    <span className="text-orchid-light">Expert Level</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'CGPA', value: '8.28' },
              { label: 'Projects Completed', value: '10+' },
              { label: 'LeetCode Problems', value: '300+' },
              { label: 'Active Users', value: '500+' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-on-scroll bg-gradient-to-br from-orchid-primary/10 to-fuchsia/10 backdrop-blur-sm border border-orchid-light/20 rounded-2xl p-6 hover:bg-orchid-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orchid-light to-fuchsia bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;