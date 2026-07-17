import { motion } from 'framer-motion';
import { Instagram, MessageSquare, PhoneCall } from './Icons';

export default function CallingCardContact() {
  const contacts = [
    {
      name: 'WHATSAPP',
      url: 'https://wa.me/6281534260965',
      icon: PhoneCall,
      color: 'bg-green-600 hover:bg-p5-yellow hover:text-p5-black text-p5-white',
    },
    {
      name: 'INSTAGRAM',
      url: 'https://instagram.com/gideonbpanjaitan', // fallback placeholder
      icon: Instagram,
      color: 'bg-p5-black hover:bg-p5-yellow hover:text-p5-black text-p5-white',
    },
    {
      name: 'DISCORD',
      url: 'https://discord.com', // placeholder
      icon: MessageSquare,
      color: 'bg-blue-600 hover:bg-p5-yellow hover:text-p5-black text-p5-white',
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden bg-p5-black text-p5-white flex justify-center items-center">
      {/* Background shards and graphic accents */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-p5-red/10 clip-p5-shard-1 transform rotate-45 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-p5-red/15 clip-p5-shard-2 transform -rotate-12 pointer-events-none" />
      
      <motion.div
        initial={{ scale: 0.8, rotate: 10, opacity: 0 }}
        whileInView={{ scale: 1, rotate: -2, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="bg-p5-red p-8 md:p-12 max-w-2xl w-full border-4 border-p5-white clip-p5-card-1 shadow-[25px_25px_0px_0px_rgba(0,0,0,0.9)] hover:rotate-1 hover:scale-[1.01] transition-all duration-300 relative z-10"
      >
        {/* Halftone dot pattern */}
        <div className="absolute inset-0 p5-halftone-black opacity-30 pointer-events-none" />

        {/* Card Header */}
        <div className="text-center mb-8 relative">
          <div className="bg-p5-black text-p5-white font-marker text-4xl md:text-5xl py-2 px-6 transform -rotate-2 inline-block shadow-lg border-2 border-p5-white select-none">
            IT'S TIME TO CONTACT!
          </div>
          <p className="font-bebas text-p5-black text-2xl tracking-widest mt-4">
            TAKE GIDEON'S HEART FOR YOUR TEAM
          </p>
        </div>

        {/* Card Message Body */}
        <div className="bg-p5-black text-p5-white p-6 rounded-none border-2 border-p5-white font-mono text-sm leading-relaxed mb-8 transform rotate-1">
          <span className="text-p5-yellow font-bold uppercase tracking-wider block mb-2">// TO THE CONTRACTOR:</span>
          We have identified a brilliant Phantom Thief with peak digital forensic capabilities. 
          Should you wish to recruit him or launch a heist, send your calling card immediately. 
          His coordinates are listed below.
        </div>

        {/* Buttons List */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            // Alternating spring configurations for entrance
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? -4 : 4 }}
                className={`font-bebas text-2xl py-3 px-6 text-center border-2 border-p5-white flex items-center justify-center gap-3 transition-colors duration-100 shadow-md ${contact.color}`}
              >
                <Icon className="w-5 h-5" />
                {contact.name}
              </motion.a>
            );
          })}
        </div>

        {/* Footer Emblem */}
        <div className="text-center mt-8 font-marker text-p5-black opacity-80 text-lg md:text-xl select-none">
          - The Phantom Thieves of Hearts -
        </div>
      </motion.div>
    </section>
  );
}
