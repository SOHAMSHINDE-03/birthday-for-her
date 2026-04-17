import React from "react";
import { motion } from "framer-motion";

const LoveMessage: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-lg mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Decorative glow behind card */}
        <div className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
          style={{ background: "linear-gradient(135deg, hsl(350 70% 85%), hsl(20 60% 85%))" }} />

        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50"
          style={{ boxShadow: "0 25px 50px -12px hsl(350 60% 70% / 0.2)" }}>
          
          <motion.p
            className="text-center text-4xl mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
          >
            💕
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-foreground leading-relaxed text-center text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              From the moment you came into my life, everything became more beautiful.
              Every smile of yours is my favorite view. I made this little surprise
              just to remind you how special you are to me.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-border/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="text-center text-primary text-xl font-semibold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Happy Birthday, my love ❤️
            </p>
          </motion.div>

          <motion.p
            className="text-center text-3xl mt-6"
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.6, delay: 1 }}
          >
            🌹
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;
