import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemoryGallery from "./MemoryGallery";
import LoveLetter from "./LoveLetter";
import VideoMessage from "./VideoMessage";

const gifts = [
  { id: 1, emoji: "📸", label: "Our Memories", color: "hsl(350 70% 88%)" },
  { id: 2, emoji: "💌", label: "A Love Letter", color: "hsl(20 70% 88%)" },
  { id: 3, emoji: "🎥", label: "A Special Video", color: "hsl(280 50% 88%)" },
];

const GiftBoxes: React.FC = () => {
  const [openedBox, setOpenedBox] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpenedBox(id);
    window.history.pushState({ giftOpened: id }, "", window.location.href);
  };

  const handleBack = () => {
    setOpenedBox(null);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle mobile back button press
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (openedBox !== null) {
        handleBack();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [openedBox]);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {openedBox === null ? (
          <motion.div
            key="boxes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="py-16 px-4"
          >
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-5xl block mb-3">🎁</span>
              <h2
                className="text-3xl md:text-5xl font-bold text-primary mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Surprise Gifts
              </h2>
              <p className="text-muted-foreground text-sm italic">
                Tap each gift box to unwrap your surprise 💝
              </p>
            </motion.div>

            <div className="max-w-sm mx-auto flex flex-col gap-6 mt-10">
              {gifts.map((gift, i) => (
                <motion.button
                  key={gift.id}
                  onClick={() => handleOpen(gift.id)}
                  className="relative group"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.2,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Glow */}
                  <div
                    className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500"
                    style={{ background: gift.color }}
                  />

                  <div
                    className="relative rounded-3xl p-6 border border-border/50 backdrop-blur-sm overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${gift.color}, hsl(0 0% 100%))`,
                      boxShadow: "0 15px 40px -10px hsl(350 50% 70% / 0.25)",
                    }}
                  >
                    {/* Ribbon */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full opacity-20"
                      style={{ background: "linear-gradient(to bottom, hsl(350 80% 60%), transparent)" }}
                    />
                    <div
                      className="absolute top-0 left-0 w-full h-8 opacity-20"
                      style={{ background: "linear-gradient(to bottom, hsl(350 80% 60%), transparent)" }}
                    />

                    <div className="relative z-10 flex items-center gap-5">
                      <motion.span
                        className="text-5xl block"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                      >
                        {gift.emoji}
                      </motion.span>
                      <div className="text-left flex-1">
                        <p
                          className="text-lg font-bold text-foreground"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Gift #{gift.id}
                        </p>
                        <p className="text-muted-foreground text-sm">{gift.label}</p>
                      </div>
                      <motion.span
                        className="text-2xl"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Decorative sparkles */}
            <motion.div
              className="flex justify-center gap-3 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {["✨", "💖", "✨", "💖", "✨"].map((e, i) => (
                <motion.span
                  key={i}
                  className="text-xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                >
                  {e}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={`gift-${openedBox}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back button */}
            <motion.div
              className="sticky top-4 z-40 flex justify-center pt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={handleBack}
                className="bg-card/80 backdrop-blur-md border border-border/50 text-foreground px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                ← Back to Gifts
              </button>
            </motion.div>

            {openedBox === 1 && <MemoryGallery />}
            {openedBox === 2 && <LoveLetter />}
            {openedBox === 3 && <VideoMessage />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBoxes;
