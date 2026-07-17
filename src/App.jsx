import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Heart } from './components/Icons';
import ParallaxBackground from './components/ParallaxBackground';
import Hero from './components/Hero';
import ConfidantProfile from './components/ConfidantProfile';
import RequestBoard from './components/RequestBoard';
import CallingCardContact from './components/CallingCardContact';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [approvalRating, setApprovalRating] = useState(82.4);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Slowly fluctuate approval rating for P5 Phan-Site authentic feel
  useEffect(() => {
    const interval = setInterval(() => {
      setApprovalRating(prev => {
        const delta = (Math.random() * 0.4 - 0.2);
        const next = prev + delta;
        return parseFloat(Math.min(100, Math.max(90, next)).toFixed(1));
      });
    }, 4000);
    // Initialize to high approval rating
    setApprovalRating(99.4);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'HERO', target: 'hero' },
    { name: 'CONFIDANT', target: 'profile' },
    { name: 'MISSIONS', target: 'missions' },
    { name: 'CONTACT', target: 'contact' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-p5-black text-p5-white select-none overflow-x-hidden">
      
      {/* Dynamic interactive background */}
      <ParallaxBackground />

      {/* Progress Bar styled as P5 Red Slash */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-2 bg-p5-red origin-left z-50 shadow-[0_0_10px_#ff0000]"
      />

      {/* FIXED HEADER & BATTLE NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-p5-black via-p5-black/80 to-transparent">
        
        {/* Phan-Site Approval Rating Widget */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className="flex items-center gap-3 bg-p5-black border-2 border-p5-red py-1.5 px-4 shadow-[4px_4px_0px_#ff0000] transform -skew-x-12 cursor-pointer hover:scale-105 transition-transform"
        >
          <Heart className="w-5 h-5 text-p5-red fill-p5-red animate-pulse" />
          <div className="font-mono text-[10px] md:text-xs">
            <span className="text-p5-white font-bold block drop-shadow-sm">PHAN-SITE APPROVAL:</span>
            <span className="text-p5-yellow font-bebas text-xl md:text-2xl font-bold tracking-widest">{approvalRating}%</span>
          </div>
        </motion.div>

        {/* Navigation Options - P5 Battle Menu Style */}
        <nav className="flex items-center gap-2 md:gap-4">
          {navItems.map((item, idx) => (
            <motion.button
              key={item.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.15,
                rotate: idx % 2 === 0 ? -6 : 6,
                backgroundColor: '#ff0000',
                color: '#0d0d0d'
              }}
              onClick={() => handleScroll(item.target)}
              className="bg-p5-black border-2 border-p5-white text-p5-white font-bebas text-lg md:text-2xl px-4 py-1.5 transform -skew-x-12 shadow-[4px_4px_0px_#000000] cursor-pointer transition-all duration-100 ease-out"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
      </header>

      {/* SECTIONS */}
      <main id="hero" className="relative z-10">
        <Hero />
        <ConfidantProfile />
        <RequestBoard />
        <CallingCardContact />
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-p5-black text-p5-white py-12 px-6 border-t-4 border-p5-red text-center font-mono text-xs text-p5-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bebas text-2xl text-p5-white tracking-widest">GIDEON BENEDICTUS PANJAITAN</span>
            <span>© 2026. ALL RIGHTS RESERVED COGNITIVE SECTOR INDONESIA.</span>
          </div>
          <div className="text-p5-red font-bebas text-xl transform -rotate-2 bg-p5-white px-4 py-1 border border-p5-black shadow-md select-none font-bold">
            STEAL YOUR HEART!
          </div>
        </div>
      </footer>
    </div>
  );
}
