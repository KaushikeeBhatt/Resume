import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(htmlElement.dataset.speed || '0.5');
        htmlElement.style.transform = `translateY(${scrolled * speed}px)`;
      });

      // Update scroll progress indicator
      const scrollProgress = (scrolled / (document.body.scrollHeight - window.innerHeight)) * 100;
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${scrollProgress}%`;
      }
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-fade-in, .animate-slide-up, .animate-slide-down'
    );
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
};