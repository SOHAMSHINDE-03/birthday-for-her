import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

interface IntroScreenProps {
  onOpen: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen }) => {
  const [showButton, setShowButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(onOpen, 900);
  };

  const titleText = "Happy Birthday";

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, hsl(350 70% 95%) 0%, hsl(0 0% 100%) 40%, hsl(20 70% 94%) 80%, hsl(350 60% 92%) 100%)",
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <FloatingHearts />

          {/* Decorative glow rings */}
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 80% 80%) 0%, transparent 70%)" }} />
          <div className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-2xl animate-pulse"
            style={{ background: "radial-gradient(circle, hsl(20 80% 80%) 0%, transparent 70%)", top: "30%", left: "60%" }} />

          <div className="relative z-10 text-center px-6">
            <motion.p
              className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ✨ A Special Day ✨
            </motion.p>

            <h1 className="text-5xl md:text-8xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {titleText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.06, ease: "easeOut" }}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-2xl md:text-4xl text-accent-foreground italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
              My Love 💕
            </motion.p>

            <AnimatePresence>
              {showButton && (
                <motion.div
                  className="mt-14"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <button
                    onClick={handleClick}
                    className="group relative animate-gentle-pulse bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Tap to Open Your Surprise ❤️</span>
                    <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
