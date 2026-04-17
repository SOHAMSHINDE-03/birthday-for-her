import React from "react";
import { motion } from "framer-motion";

// Import images
import img2 from "../images/IMG_20250827_152553.jpg";
import img11 from "../images/Snapchat-2039840182.jpg";

const photos = [
  { src: img2, alt: "Us together" },
  { src: img11, alt: "Our special moment" },
];

const letterLines = [
  "Happy Birthday, AASHUU❤️",

  "Today is not just about celebrating your birthday, it’s about celebrating the day the most beautiful part of my life came into this world. I don’t think I can ever fully express how grateful I am to have you, but I’ll try.",

  "I still remember the very first time we went out together with friends to Xerbia… and that bike ride with you. Somewhere in those moments, without even realizing it, I started falling for you. And then that walk to R9 sector… I don’t know what it was, but something felt different. I had this quiet feeling that maybe… just maybe… you felt something too.",
  "And then came the most special day of my life — 4th May 2025. That late-night call, where we finally confessed everything we felt… I can never forget that moment. It changed everything for me. It was the beginning of something so real, so beautiful, and so important to me.",
  "Our first proper date to Pawna Lake... that day is something I’ll always hold close to my heart. Every laugh, every moment, every second with you felt perfect. And honestly, these past 11 months with you have been nothing less than amazing. Every memory we’ve created, every small moment, every smile — they all mean so much to me.",

  "I LOVED YOUU THEN,",
  "I LOVEE YOUU NOWW,",
  "I WILL ALWAYS LOVEE YOUU",

  "You’ve made my life happier, softer, and more meaningful in ways I never imagined. And on your birthday, I just want you to know that you are the most special person in my life.",

  "Happy Birthday once again, my love.",
  "I'M SO LUCKY TO HAVE YOU SWEETHEART ❤️"
];

const LoveLetter: React.FC = () => {
  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-primary text-center mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        A Letter From My Heart
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-10 italic text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Words I've been keeping just for you 💌
      </motion.p>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Decorative glow */}
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-25 blur-2xl"
            style={{
              background: "linear-gradient(135deg, hsl(350 70% 85%), hsl(20 60% 85%))",
            }}
          />

          <div
            className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 overflow-hidden"
            style={{
              boxShadow: "0 25px 50px -12px hsl(350 60% 70% / 0.2)",
            }}
          >
            {/* Paper texture lines */}
            <div className="absolute inset-0 opacity-[0.03]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full border-b border-foreground"
                  style={{ height: "32px" }}
                />
              ))}
            </div>

            {/* Photos side by side */}
            <motion.div
              className="flex gap-4 mb-8 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: i === 0 ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 shadow-lg"
                    style={{
                      borderColor: "hsl(0 0% 100%)",
                      boxShadow: "0 8px 25px hsl(350 50% 60% / 0.25)",
                      transform: `rotate(${i === 0 ? "-3deg" : "3deg"})`,
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Heart between photos */}
                  {i === 0 && (
                    <motion.span
                      className="absolute -right-5 top-1/2 -translate-y-1/2 text-2xl z-10"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ❤️
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Letter content */}
            <div className="relative z-10 space-y-1">
              {letterLines.map((line, i) => (
                <motion.p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? "text-xl font-bold text-primary"
                      : i >= letterLines.length - 2
                      ? "text-primary font-semibold italic"
                      : "text-foreground"
                  } ${line === "" ? "h-4" : ""}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 text-3xl opacity-30">🌹</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-30">💕</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LoveLetter;
