import React from "react";
import { motion } from "framer-motion";

const GiftSection: React.FC = () => (
  <motion.section
    className="py-24 px-4 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="text-7xl mb-8"
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      🎁
    </motion.div>
    <motion.h2
      className="text-3xl md:text-5xl font-bold text-primary"
      style={{ fontFamily: "'Playfair Display', serif" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Now open your gift box ❤️
    </motion.h2>
    <motion.div
      className="mt-6 flex justify-center gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      {["✨", "💖", "✨"].map((e, i) => (
        <motion.span
          key={i}
          className="text-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        >
          {e}
        </motion.span>
      ))}
    </motion.div>
  </motion.section>
);

export default GiftSection;
