import { motion } from 'framer-motion';
import RadarChart from './RadarChart';
import RansomNoteHeader from './RansomNoteHeader';

export default function ConfidantProfile() {
  const profileInfo = [
    { label: 'CODENAME', value: 'JOKER' },
    { label: 'ORIGIN', value: 'Medan, Sumatra Utara' },
    { label: 'AFFILIATION', value: 'Phantom Thieves of Hearts' },
    { label: 'ARCANA', value: 'THE FOOL (Cooperation: Rank Max)' },
    { label: 'PASSION', value: 'Persona 3 Reload & Persona 5 Royal' },
  ];

  return (
    <section id="profile" className="relative py-24 px-4 overflow-hidden bg-p5-black border-t-8 border-p5-red select-none">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0 pointer-events-none"
        style={{ backgroundImage: `url('/persona-5.jpg')` }}
      />

      {/* Background slash details */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-p5-red/10 clip-p5-skew-left pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-p5-red/5 clip-p5-skew-right pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <RansomNoteHeader text="CONFIDANT PROFILE" className="justify-start mb-6" />
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-p5-white font-mono text-base md:text-lg border-l-4 border-p5-red pl-4 font-bold"
          >
            // COOPERATION ESTABLISHED WITH GIDEON BENEDICTUS PANJAITAN. INCREASING SOCIAL STATS IS VITAL TO STEAL THE CORRUPTED HEARTS.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Identity details cardboard */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="bg-p5-white text-p5-black p-8 relative clip-p5-card-1 shadow-[15px_15px_0px_0px_rgba(255,0,0,1)] hover:scale-[1.02] hover:-rotate-1 transition-all duration-200"
          >
            {/* Red strip detail */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-p5-red transform -skew-y-1" />

            <h3 className="font-bebas text-4xl mb-6 mt-2 text-p5-black tracking-wider border-b-4 border-p5-black pb-2 inline-block">
              CONFIDANT DATA
            </h3>

            <div className="space-y-6 font-mono text-base md:text-lg">
              {profileInfo.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-p5-black/20 pb-2">
                  <span className="font-bebas text-p5-red tracking-wide text-xl">{item.label}</span>
                  <span className="font-bold text-p5-black uppercase">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Decorative stamp-like details */}
            <div className="absolute bottom-4 right-4 bg-p5-black text-p5-white px-3 py-1 font-bebas text-xl transform rotate-6 border-2 border-p5-red">
              APPROVED
            </div>
          </motion.div>

          {/* Social Stats Radar Chart Container */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-4 text-center">
              <span className="bg-p5-red text-p5-white font-bebas text-2xl px-4 py-1 inline-block transform -rotate-3 select-none tracking-widest shadow-md">
                SOCIAL STATS
              </span>
            </div>
            
            <RadarChart />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
