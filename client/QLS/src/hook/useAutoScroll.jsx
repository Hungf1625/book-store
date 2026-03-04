import { useRef,useEffect } from "react";

const useAutoScroll = (speed = 1) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let animationId;
    let scrollPos = 0;
    
    const animateScroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
        container.scrollLeft = 0;
      } else {
        scrollPos += speed;
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(animateScroll);
    };
    
    animationId = requestAnimationFrame(animateScroll);
    
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(animateScroll);
    };
    
    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, [speed]);
  
  return containerRef;
};

export default useAutoScroll;