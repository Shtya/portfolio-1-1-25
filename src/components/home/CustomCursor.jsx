
import { useEffect, useRef } from 'react';
 
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const onElement = useRef(null);

  useEffect(() => {
    const updateProperties = (elem, state) => {
      elem.style.setProperty('--x', `${state.x}px`);
      elem.style.setProperty('--y', `${state.y}px`);
      elem.style.setProperty('--width', `${state.width}px`);
      elem.style.setProperty('--height', `${state.height}px`);
      elem.style.setProperty('--radius', state.radius);
      elem.style.setProperty('--scale', state.scale);
    };

    const createState = (e) => {
      const defaultState = {
        x: e.clientX,
        y: e.clientY,
        width: 42,
        height: 42,
        radius: '100px',
        scale: 1
      };

      if (onElement.current) {
        const { top, left, width, height } = onElement.current.getBoundingClientRect();
        const radius = window.getComputedStyle(onElement.current).borderRadius;
        
        return {
          x: left + width / 2,
          y: top + height / 2,
          width: width,
          height: height,
          radius: radius,
          scale: 1.2
        };
      }

      return defaultState;
    };

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const state = createState(e);
        updateProperties(cursorRef.current, state);
      }
    };

    const handleMouseEnter = (elem) => {
      onElement.current = elem;
    };

    const handleMouseLeave = () => {
      onElement.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(elem => {
      elem.addEventListener('mouseenter', () => handleMouseEnter(elem));
      elem.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(elem => {
        elem.removeEventListener('mouseenter', () => handleMouseEnter(elem));
        elem.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
};

export default CustomCursor;