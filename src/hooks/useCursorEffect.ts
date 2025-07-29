import { useEffect } from 'react';

export const useCursorEffect = (
  cursorRef: React.RefObject<HTMLElement>,
  glowRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    
    if (!cursor || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLElement && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive'))) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        glow.style.transform = 'translate(-50%, -50%) scale(1.2)';
        glow.style.opacity = '0.4';
      }
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.opacity = '0.2';
    };

    // Hide cursor on mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);
      
      // Hide default cursor
      document.body.style.cursor = 'none';
    } else {
      // Hide custom cursor on touch devices
      cursor.style.display = 'none';
      glow.style.display = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = 'auto';
    };
  }, [cursorRef, glowRef]);
};