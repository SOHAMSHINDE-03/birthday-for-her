import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

interface CakeScreenProps {
  onComplete: () => void;
}

const NUM_CANDLES = 5;

const CakeScreen: React.FC<CakeScreenProps> = ({ onComplete }) => {
  const [showCake, setShowCake] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [blown, setBlown] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCake(true), 500);
    const t2 = setTimeout(() => setShowButton(true), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleBlow = () => {
    setBlown(true);
    // Create sparkle particles
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 300,
      y: -(Math.random() * 200 + 50),
    }));
    setSparkles(newSparkles);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1200);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {!fadeOut ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, hsl(350 70% 95%) 0%, hsl(0 0% 100%) 40%, hsl(20 70% 94%) 80%, hsl(350 60% 92%) 100%)",
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <FloatingHearts />

          {/* Glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 80% 80%) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Happy Birthday Text */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-4"
            >
              <motion.p
                className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                ✨ Make a Wish ✨
              </motion.p>
              <h1
                className="text-4xl md:text-7xl font-bold text-primary mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {"Happy Birthday".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                    className="inline-block"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                className="text-xl md:text-3xl text-accent-foreground italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                AASHII 💕
              </motion.p>
            </motion.div>

            {/* Cake */}
            <AnimatePresence>
              {showCake && (
                <motion.div
                  className="relative flex flex-col items-center mt-4"
                  initial={{ opacity: 0, scale: 0.5, y: 60 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                >
                  {/* Sparkle particles on blow */}
                  {sparkles.map((s) => (
                    <motion.div
                      key={s.id}
                      className="absolute text-xl"
                      style={{ top: "20%", left: "50%" }}
                      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      animate={{ opacity: 0, x: s.x, y: s.y, scale: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      {["✨", "🌟", "💫", "⭐"][s.id % 4]}
                    </motion.div>
                  ))}

                  {/* Candles */}
                  <div className="flex gap-5 mb-1 relative z-10">
                    {Array.from({ length: NUM_CANDLES }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 + i * 0.15 }}
                      >
                        {/* Flame */}
                        <AnimatePresence>
                          {!blown && (
                            <motion.div
                              className="relative mb-0.5"
                              exit={{ opacity: 0, scale: 0, y: -10 }}
                              transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                              <motion.div
                                className="w-3 h-5 rounded-full"
                                style={{
                                  background: "linear-gradient(to top, hsl(30 100% 50%), hsl(45 100% 60%), hsl(50 100% 75%))",
                                  filter: "blur(0.5px)",
                                }}
                                animate={{
                                  scaleX: [1, 1.2, 0.9, 1.1, 1],
                                  scaleY: [1, 1.15, 0.95, 1.1, 1],
                                  rotate: [0, 3, -3, 2, 0],
                                }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                              />
                              {/* Glow */}
                              <div
                                className="absolute -inset-2 rounded-full opacity-60 blur-md"
                                style={{ background: "hsl(40 100% 60%)" }}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {/* Candle stick */}
                        <div
                          className="w-2 h-10 rounded-sm"
                          style={{
                            background: `linear-gradient(to bottom, hsl(${340 + i * 10} 70% 70%), hsl(${340 + i * 10} 60% 55%))`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Cake body */}
                  <div className="relative">
                    {/* Top layer */}
                    <motion.div
                      className="w-52 h-14 rounded-t-2xl relative overflow-hidden"
                      style={{
                        background: "linear-gradient(to bottom, hsl(350 60% 82%), hsl(350 50% 75%))",
                        boxShadow: "inset 0 -4px 8px hsl(350 40% 65% / 0.3)",
                      }}
                    >
                      {/* Frosting drips */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="rounded-b-full"
                            style={{
                              width: `${10 + Math.random() * 8}px`,
                              height: `${8 + Math.random() * 12}px`,
                              background: "hsl(0 0% 97%)",
                              opacity: 0.9,
                            }}
                          />
                        ))}
                      </div>
                      {/* Sprinkles */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: "3px",
                            height: "3px",
                            background: ["hsl(45 100% 60%)", "hsl(200 80% 60%)", "hsl(120 60% 50%)", "hsl(300 70% 60%)"][i % 4],
                            top: `${20 + Math.random() * 40}%`,
                            left: `${10 + Math.random() * 80}%`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Middle layer */}
                    <div
                      className="w-60 h-12 -mx-4 relative"
                      style={{
                        background: "linear-gradient(to bottom, hsl(30 80% 80%), hsl(30 70% 72%))",
                        boxShadow: "inset 0 -3px 6px hsl(30 50% 60% / 0.3)",
                      }}
                    />

                    {/* Bottom layer */}
                    <div
                      className="w-64 h-14 -mx-6 rounded-b-2xl relative overflow-hidden"
                      style={{
                        background: "linear-gradient(to bottom, hsl(20 60% 75%), hsl(20 50% 65%))",
                        boxShadow: "0 8px 30px hsl(350 40% 50% / 0.3)",
                      }}
                    >
                      {/* Decorative dots */}
                      <div className="absolute top-3 left-0 right-0 flex justify-around px-4">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ background: "hsl(350 70% 85%)" }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Plate */}
                    <div
                      className="w-72 h-4 -mx-10 rounded-b-xl"
                      style={{
                        background: "linear-gradient(to bottom, hsl(0 0% 92%), hsl(0 0% 85%))",
                        boxShadow: "0 4px 15px hsl(0 0% 50% / 0.2)",
                      }}
                    />
                  </div>

                  {/* Blown message */}
                  <AnimatePresence>
                    {blown && (
                      <motion.p
                        className="mt-6 text-xl text-primary font-semibold italic"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        😊 Thats Like MY GOOD GIRL! 😊
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Blow button */}
            <AnimatePresence>
              {showButton && !blown && (
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <button
                    onClick={handleBlow}
                    className="group relative animate-gentle-pulse bg-primary text-primary-foreground px-12 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">🌬️ Blow the Candles</span>
                    <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, hsl(350 70% 95%) 0%, hsl(0 0% 100%) 50%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-center"
          >
            <motion.span
              className="text-7xl block"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              🎁
            </motion.span>
            <p
              className="text-2xl font-bold text-primary mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Time for your surprises!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CakeScreen;
