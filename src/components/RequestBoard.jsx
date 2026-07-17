import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, X, ExternalLink } from './Icons';
import RansomNoteHeader from './RansomNoteHeader';

export default function RequestBoard() {
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = [
    {
      id: 1,
      title: 'TARGET: THE VULNERABLE SERVER',
      category: 'Web Exploitation',
      status: 'UNDER INVESTIGATION',
      difficulty: '★★★☆☆',
      icon: Terminal,
      bg: 'bg-p5-black text-p5-white',
      accent: 'border-p5-red',
      summary: 'Penetration testing and exploit execution on high-security targets.',
      details: 'Conducted authorized security assessments identifying SQL injections, local file inclusions, and privilege escalation vulnerabilities. Designed proof-of-concept exploits to secure target assets.',
      tools: ['Burp Suite', 'Metasploit', 'Nmap', 'SQLmap', 'Kali Linux'],
      github: 'https://github.com/GideonBPanjaitan',
    },
    {
      id: 2,
      title: 'TARGET: TRACES OF THE INTRUDER',
      category: 'Digital Forensic',
      status: 'RESOLVED & SECURED',
      difficulty: '★★★★☆',
      icon: Shield,
      bg: 'bg-p5-white text-p5-black',
      accent: 'border-p5-black',
      summary: 'Post-incident trace analysis, logs recovery, and evidence gathering.',
      details: 'Investigated simulated advanced threat activities. Carried out full memory forensics, analyzed registry structures, extracted logs, and rebuilt attack timelines to document the threat behavior.',
      tools: ['Volatility', 'Autopsy', 'FTK Imager', 'Wireshark', 'Registry Explorer'],
      github: 'https://github.com/GideonBPanjaitan',
    },
    {
      id: 3,
      title: 'TARGET: OBFUSCATED PAYLOADS',
      category: 'Reverse Engineering',
      status: 'ANALYZING CODE',
      difficulty: '★★☆☆☆',
      icon: Cpu,
      bg: 'bg-p5-red text-p5-white',
      accent: 'border-p5-black',
      summary: 'Decompiling binary payloads and understanding malware internals.',
      details: 'Analyzed compiled binaries to map instructions and control flow. Bypassed simple anti-debugging loops and reverse-engineered encryption routines to decode hidden flag constants.',
      tools: ['IDA Pro', 'Ghidra', 'x64dbg', 'PEview', 'GDB'],
      github: 'https://github.com/GideonBPanjaitan',
    },
  ];

  return (
    <section id="missions" className="relative py-24 px-4 bg-p5-black-card text-p5-white overflow-hidden">
      {/* Halftone wallpaper overlay */}
      <div className="absolute inset-0 p5-halftone-white opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-right flex flex-col items-end">
          <RansomNoteHeader text="MISSIONS BOARD" className="justify-end mb-6" />
          <p className="text-p5-red font-mono text-sm border-r-4 border-p5-red pr-4">
            // SHUJIN ACADEMY BULLETIN: SUBMITTED REQUESTS TO THE PHANTOM THIEVES
          </p>
        </div>

        {/* The Bulletin Board Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            // Alternate card tilts for ransom-board look
            const rot = index % 3 === 0 ? '-rotate-3 hover:-rotate-1' : index % 3 === 1 ? 'rotate-3 hover:rotate-1' : '-rotate-1 hover:rotate-2';
            
            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 80, rotate: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -8 }}
                onClick={() => setSelectedMission(mission)}
                className={`cursor-pointer p-6 border-4 flex flex-col justify-between transition-all duration-200 shadow-[10px_10px_0px_0px_rgba(255,0,0,0.85)] active:translate-x-1 active:translate-y-1 ${mission.bg} ${mission.accent} ${rot}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4 border-b border-current pb-2">
                    <span className="font-bebas text-lg tracking-wider bg-p5-red text-p5-white px-2 py-0.5 transform -skew-x-6">
                      {mission.category.toUpperCase()}
                    </span>
                    <Icon className="w-5 h-5 text-p5-red animate-pulse" />
                  </div>

                  <h3 className="font-marker text-2xl md:text-3xl mb-4 leading-tight">
                    {mission.title}
                  </h3>

                  <p className="font-mono text-sm font-bold leading-relaxed line-clamp-3">
                    {mission.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-dashed border-current flex justify-between items-center font-bebas">
                  <span className="text-base">DIFF: <span className={mission.bg.includes('text-p5-black') ? 'text-p5-red font-sans font-bold' : 'text-p5-yellow font-sans font-bold'}>{mission.difficulty}</span></span>
                  <span className="text-sm bg-p5-red text-p5-white px-2 py-1 font-mono font-bold">{mission.status}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty Request board visual detail */}
        <div className="mt-16 bg-p5-black border-2 border-p5-red/30 p-8 text-center font-mono text-p5-white/50 text-base transform -rotate-1 clip-p5-card-2 font-bold">
          [ NO NEW FORUM REQUESTS SUBMITTED. STAND BY FOR TARGET LISTINGS. ]
        </div>
      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {selectedMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-p5-black/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: -2, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 8, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="bg-p5-red text-p5-white max-w-2xl w-full p-8 border-4 border-p5-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] relative clip-p5-card-1"
            >
              {/* Halftone texture */}
              <div className="absolute inset-0 p5-halftone-black opacity-20 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedMission(null)}
                className="absolute top-4 right-4 bg-p5-black hover:bg-p5-yellow text-p5-white hover:text-p5-black p-2 border-2 border-p5-white font-bebas text-sm transition duration-150 flex items-center gap-1 z-20"
              >
                <X className="w-4 h-4" /> CLOSE
              </button>

              <div className="relative z-10">
                <div className="bg-p5-black text-p5-white font-bebas text-xl px-4 py-1.5 inline-block transform -skew-x-12 mb-4">
                  MISSION CONFIRMED: {selectedMission.category.toUpperCase()}
                </div>

                <h2 className="font-marker text-3xl md:text-4xl mb-6 text-p5-black drop-shadow-[2px_2px_0px_#ffffff]">
                  {selectedMission.title}
                </h2>

                <div className="bg-p5-black text-p5-white p-6 mb-6 font-mono text-base leading-relaxed border-l-4 border-p5-yellow transform rotate-1">
                  <p className="mb-4 text-p5-yellow font-bold uppercase tracking-wider">// BRIEFING:</p>
                  <p className="font-bold">{selectedMission.details}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bebas text-2xl text-p5-black mb-2 tracking-wide font-bold">REQUIRED GEAR & TOOLS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMission.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-p5-white text-p5-black font-mono text-sm font-bold px-3.5 py-1.5 border border-p5-black shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center border-t-2 border-p5-black pt-4">
                  <div className="font-mono text-sm text-p5-black font-bold">
                    STATUS: <span className="font-bold underline">{selectedMission.status}</span>
                  </div>
                  
                  <a
                    href={selectedMission.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-p5-black hover:bg-p5-yellow text-p5-white hover:text-p5-black px-4 py-2 font-bebas text-lg transition flex items-center gap-2 border border-p5-white shadow-md"
                  >
                    INVESTIGATE CODE <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
