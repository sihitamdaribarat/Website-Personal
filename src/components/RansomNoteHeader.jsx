import { motion } from 'framer-motion';

export default function RansomNoteHeader({ text, className = '' }) {
  const words = text.split(' ');

  const styles = [
    { bg: 'bg-p5-black text-p5-white border-p5-white', font: 'font-marker' },
    { bg: 'bg-p5-white text-p5-black border-p5-black', font: 'font-bebas' },
    { bg: 'bg-p5-red text-p5-white border-p5-black', font: 'font-marker' },
    { bg: 'bg-p5-black text-p5-red border-p5-red', font: 'font-bebas' },
    { bg: 'bg-p5-white text-p5-red border-p5-black', font: 'font-marker' },
    { bg: 'bg-p5-red text-p5-black border-p5-white', font: 'font-bebas' },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-y-3 gap-x-1 ${className}`}>
      {words.map((word, wIdx) => (
        <div key={wIdx} className="flex items-center mr-4 md:mr-6 select-none last:mr-0">
          {word.split('').map((char, cIdx) => {
            const styleIdx = (wIdx * 7 + cIdx * 3) % styles.length;
            const rotation = ((wIdx * 5 + cIdx * 13) % 17) - 8.5; // -8.5 to 8.5 deg
            const offset = ((wIdx * 4 + cIdx * 7) % 8) - 4; // -4px to 4px vertical shift
            const activeStyle = styles[styleIdx];
            
            const padding = (cIdx % 2 === 0) ? 'px-2 py-1 md:px-3 md:py-1.5' : 'px-1.5 py-1.5 md:px-2.5 md:py-2';
            const size = (cIdx % 3 === 0) 
              ? 'text-3xl md:text-5xl lg:text-6xl' 
              : 'text-2xl md:text-4xl lg:text-5xl';

            return (
              <motion.span
                key={cIdx}
                initial={{ scale: 0, rotate: rotation * 2.5, y: 30 }}
                whileInView={{ scale: 1, rotate: rotation, y: offset }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 18,
                  delay: (wIdx * 3 + cIdx) * 0.02,
                }}
                className={`inline-block border-2 font-bold tracking-tight shadow-lg select-none transform hover:scale-125 hover:rotate-6 hover:bg-p5-yellow hover:text-p5-black hover:border-p5-black transition-all duration-100 ${activeStyle.bg} ${activeStyle.font} ${padding} ${size}`}
                style={{
                  transformOrigin: 'center',
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
