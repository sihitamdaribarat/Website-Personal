import { motion } from 'framer-motion';
import RansomNoteHeader from './RansomNoteHeader';

export default function Hero() {
  const shardVariants = {
    hiddenLeft: { x: '-100vw', y: '-50vh', rotate: -45 },
    hiddenRight: { x: '100vw', y: '50vh', rotate: 45 },
    visible: { 
      x: 0, 
      y: 0, 
      rotate: 0,
      transition: { 
        type: 'spring', 
        stiffness: 80, 
        damping: 15,
        mass: 1.2
      } 
    }
  };

  const nameVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 12,
        delay: 0.3
      } 
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-p5-black text-p5-white pt-20 px-6">
      
      {/* Background Star Wallpaper from user's image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0 pointer-events-none"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}bg_wallpaper.jpg')` }}
      />

      {/* Red Jagged Background Slash */}
      <motion.div 
        initial="hiddenLeft"
        animate="visible"
        variants={shardVariants}
        className="absolute inset-y-0 -left-10 w-[70%] bg-p5-red clip-p5-hero-bg origin-top-left z-0"
      />

      {/* Halftone texture inside the slash */}
      <div className="absolute inset-y-0 -left-10 w-[70%] clip-p5-hero-bg p5-halftone-black opacity-30 z-0 pointer-events-none" />

      {/* Background Decorative Shards */}
      <motion.div
        initial="hiddenRight"
        animate="visible"
        variants={shardVariants}
        className="absolute bottom-0 right-0 w-[45%] h-[40%] bg-p5-white clip-p5-skew-right opacity-10 z-0"
      />

      <motion.div
        initial={{ x: '-100vw', y: '100vh', rotate: -90 }}
        animate={{ x: 0, y: 0, rotate: -15 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.2 }}
        className="absolute top-1/4 left-1/3 w-96 h-12 bg-p5-black border-2 border-p5-red z-0 pointer-events-none"
      />

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Intro Text Column */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          
          {/* Subheading / Arcana Title */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="mb-4 inline-block bg-p5-black text-p5-yellow font-bebas text-xl md:text-2xl px-4 py-1.5 transform -skew-x-12 border-2 border-p5-red shadow-md"
          >
            THE PHANTOM THIEF CODENAME: JOKER
          </motion.div>

          {/* Gideon Name Header */}
          <div className="mb-6">
            <RansomNoteHeader text="GIDEON PANJAITAN" />
          </div>

          {/* Persona fan description tag */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.4 }}
            className="bg-p5-black text-p5-white font-mono text-base md:text-lg px-4 py-3 border-l-4 border-p5-yellow max-w-lg mb-8 transform -rotate-1 select-none font-bold shadow-lg"
          >
            // COGNITIVE PSI INVESTIGATOR & SECURITY ANALYST FROM MEDAN. ENTHUSIAST OF CTF (CAPTURE THE FLAG).
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleScroll('profile')}
              className="font-bebas text-2xl bg-p5-black hover:bg-p5-yellow text-p5-white hover:text-p5-black py-3 px-8 border-2 border-p5-white hover:border-p5-black shadow-[6px_6px_0px_0px_rgba(255,0,0,1)] active:translate-x-1 active:translate-y-1 transition duration-150 transform -skew-x-6 cursor-pointer"
            >
              VIEW CONFIDANT DATA
            </button>
            <button
              onClick={() => handleScroll('missions')}
              className="font-bebas text-2xl bg-p5-white hover:bg-p5-yellow text-p5-black py-3 px-8 border-2 border-p5-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition duration-150 transform -skew-x-6 cursor-pointer"
            >
              INVESTIGATE MISSIONS
            </button>
          </motion.div>
        </div>

        {/* Character Image Column */}
        <div className="md:col-span-5 relative flex justify-center items-center h-[450px] md:h-[600px] mt-10 md:mt-0">
          
          {/* Back Red Silhouette for extreme P5 contrast */}
          <motion.div
            initial={{ scale: 0.5, rotate: -20, opacity: 0, x: 200 }}
            animate={{ scale: 1.15, rotate: -5, opacity: 0.8, x: -20 }}
            transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.15 }}
            className="absolute w-full h-full pointer-events-none select-none overflow-visible flex justify-center items-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}joker.png`} 
              alt="Joker Shadow" 
              className="w-[90%] h-full object-contain filter brightness-0 sepia(1) saturate(100) hue-rotate(350deg) opacity-90 scale-105"
            />
          </motion.div>

          {/* Actual Joker Image */}
          <motion.div
            initial={{ scale: 0.5, rotate: 15, opacity: 0, x: 150 }}
            animate={{ scale: 1.1, rotate: 2, opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 10 }}
            className="w-full h-full relative z-10 flex justify-center items-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}joker.png`} 
              alt="Joker Persona 5 Protagonist" 
              className="w-[90%] h-full object-contain p5-shadow-black filter drop-shadow(-12px 10px 0px #ff0000)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
