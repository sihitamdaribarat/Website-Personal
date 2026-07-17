import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 120, mass: 0.8 };
  
  // Create transforms for shifting textures in different directions
  const transX1 = useSpring(useTransform(mouseX, [-800, 800], [-25, 25]), springConfig);
  const transY1 = useSpring(useTransform(mouseY, [-800, 800], [-25, 25]), springConfig);

  const transX2 = useSpring(useTransform(mouseX, [-800, 800], [40, -40]), springConfig);
  const transY2 = useSpring(useTransform(mouseY, [-800, 800], [40, -40]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none select-none bg-p5-black">
      {/* Background Moving Stripes */}
      <div className="absolute inset-0 p5-stripes-bg" />

      {/* Red Halftone Dots */}
      <motion.div 
        style={{ x: transX1, y: transY1 }}
        className="absolute inset-[-60px] p5-halftone-red opacity-35" 
      />

      {/* White Halftone Dots (opposite movement) */}
      <motion.div 
        style={{ x: transX2, y: transY2 }}
        className="absolute inset-[-60px] p5-halftone-white opacity-10" 
      />

      {/* Scanline Effect */}
      <div className="absolute inset-0 p5-scanlines opacity-20" />
    </div>
  );
}
