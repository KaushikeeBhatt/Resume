import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 90, 150, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 90, 150, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Subtle Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Background Circles */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orchid-primary/10 to-fuchsia/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-fuchsia/8 to-orchid-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          
          {/* Floating Minimal Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orchid-light/40 rounded-full animate-float" style={{ animationDuration: '8s' }} />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-fuchsia/50 rounded-full animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orchid-primary/40 rounded-full animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }} />
          
          {/* Subtle Lines */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orchid-light/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia/15 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        </div>
        
        {/* Professional Code Elements */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div className="absolute top-20 left-20 text-xs font-mono text-orchid-light animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            &lt;/&gt;
          </div>
          <div className="absolute top-40 right-32 text-xs font-mono text-fuchsia animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}>
            { }
          </div>
          <div className="absolute bottom-32 left-1/3 text-xs font-mono text-orchid-primary animate-pulse" style={{ animationDelay: '4s', animationDuration: '3s' }}>
            =&gt;
          </div>
        </div>
        
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-transparent to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-orchid-primary/20 backdrop-blur-sm border border-orchid-light/30 rounded-full text-orchid-light text-sm animate-slide-down">
          <Sparkles size={16} className="animate-spin-slow" />
          Available for new opportunities
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-ivory via-orchid-light to-fuchsia bg-clip-text text-transparent animate-slide-up"
        >
          Kaushikee
          <br />
          <span className="italic font-light">Bhatt</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay">
          Software Developer & Full-Stack Engineer building
          <span className="text-orchid-light"> scalable</span> web systems and
          <span className="text-fuchsia"> data-intensive</span> applications
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
          <button
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-gradient-to-r from-orchid-primary to-fuchsia rounded-full text-ivory font-semibold hover:shadow-2xl hover:shadow-fuchsia/50 transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia to-orchid-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-orchid-light text-orchid-light rounded-full font-semibold hover:bg-orchid-light hover:text-charcoal transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orchid-light hover:text-fuchsia transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;