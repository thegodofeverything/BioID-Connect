import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  children,
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top',   // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  style = {},
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // ✅ Split text while PRESERVING <br />
  const splitContent = (content) => {
    if (typeof content === 'string') {
      return content
        .split(/(\s+|\n)/) // Split by spaces and new lines
        .map((word, i) => (word === '\n' ? <br key={`br-${i}`} /> : word)); // Preserve line breaks
    }
    if (Array.isArray(content)) {
      return content.flatMap((child) => splitContent(child));
    }
    return [content]; // Keep JSX elements intact
  };

  const elements = splitContent(children);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    { filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className}`} style={style}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: elements[index] === <br /> ? 'block' : 'inline-block', // ✅ Ensure new lines break
            willChange: 'transform, filter, opacity',
          }}
        >
          {elements[index]}
          {animateBy === 'words' && typeof elements[index] === 'string' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
