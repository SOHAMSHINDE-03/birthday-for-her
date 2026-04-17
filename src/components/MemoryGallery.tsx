import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all images
import img1 from "../images/IMG-20251020-WA0042.jpg";
import img2 from "../images/IMG_20250827_152553.jpg";
import img3 from "../images/IMG_20251021_003352.jpg";
import img4 from "../images/IMG_20260214_090317.jpg";
import img5 from "../images/Screenshot_20260204_095921.jpg";
import img6 from "../images/Screenshot_20260303_232907.jpg";
import img7 from "../images/Snapchat-1395699017.jpg";
import img8 from "../images/Snapchat-1437017950.jpg";
import img9 from "../images/Snapchat-1639997117.jpg";
import img10 from "../images/Snapchat-2031560014.jpg";
import img11 from "../images/Snapchat-2039840182.jpg";
import img12 from "../images/Snapchat-2093058229.jpg";
import img13 from "../images/Snapchat-398660130.jpg";
import img14 from "../images/Snapchat-48777563.jpg";
import img15 from "../images/Snapchat-664461343.jpg";

const photos = [
  { src: img1, caption: "Every Moment 💕" },
  { src: img2, caption: "Spent with youu ❤️" },
  { src: img3, caption: "Was Always Special for Me 💑" },
  { src: img4, caption: "Eveyday I Loved YOUU😊" },
  { src: img5, caption: "Moree and Moree 🎉" },
  { src: img6, caption: "I Love Being With You 💗" },
  { src: img7, caption: "Time is a Bitch to me📸" },
  { src: img8, caption: "It runs too fast 🌹" },
  { src: img9, caption: "Whenever we are together 💕" },
  { src: img10, caption: "Thats why✨" },
  { src: img11, caption: "I want you for Life 🌟" },
  { src: img12, caption: "Soo Time wont be a Issue to me 💑" },
  { src: img13, caption: "And I could spend my whole time  💖" },
  { src: img14, caption: "With YOUU ❤️" },
  { src: img15, caption: "And ONLY YOUUU💕" },
];

const MemoryGallery: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
        Our Beautiful Memories
      </h2>

      <p className="text-center text-muted-foreground mb-16 italic text-sm">
        Every moment with you is a treasure ✨
      </p>

      {/* STRING LINE */}
      <div className="absolute left-0 right-0 top-32 h-[2px] bg-gray-300" />

      {/* PHOTOS */}
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto relative z-10">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer"
            style={{
              rotate: `${Math.random() * 10 - 5}deg`,
            }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            onClick={() => setOpenIndex(i)}
          >
            {/* CLIP */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-pink-400 rounded-full shadow-md" />

            {/* STRING CONNECTOR */}
            <div className="absolute -top-8 left-1/2 w-[2px] h-8 bg-gray-300 -translate-x-1/2" />

            {/* PHOTO CARD */}
            <div className="bg-white p-3 rounded-xl shadow-xl w-40 md:w-48">
              <img
                src={photo.src}
                alt=""
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="text-center text-xs mt-2 italic">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN VIEW */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.img
              src={photos[openIndex].src}
              className="max-w-full max-h-full rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />

            <button
              className="absolute top-5 right-6 text-white text-4xl"
              onClick={() => setOpenIndex(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;