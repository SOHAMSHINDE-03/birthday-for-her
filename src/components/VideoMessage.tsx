import React from "react";
import { motion } from "framer-motion";

const VideoMessage: React.FC = () => (
  <motion.section
    className="py-20 px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <motion.h2
      className="text-3xl md:text-5xl font-bold text-primary text-center mb-3"
      style={{ fontFamily: "'Playfair Display', serif" }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      A Message Just For You
    </motion.h2>
    <motion.p
      className="text-center text-muted-foreground mb-10 italic text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Press play and listen to my heart 🎥
    </motion.p>

    <motion.div
      className="max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/50"
      style={{ boxShadow: "0 25px 50px -12px hsl(350 60% 70% / 0.2)" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <video
        className="w-full aspect-video bg-muted"
        controls
        poster=""
        preload="metadata"
      >
        <source src="/video.mp4" type="video/mp4" />
        <p className="p-4 text-center text-muted-foreground">Your browser does not support the video tag.</p>
      </video>
      <div className="p-5 text-center">
        <p className="text-muted-foreground text-sm italic">Sorry, I didnt had much to say, but i really tried my best, Hope You Like it...❤️❤️❤️</p>
      </div>
    </motion.div>
  </motion.section>
);

export default VideoMessage;
