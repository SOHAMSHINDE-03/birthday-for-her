import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

interface BirthdateDialPadProps {
  onSuccess: () => void;
}

const CORRECT_DATE = "01052005"; // 1st May 2005 → DD/MM/YYYY

const BirthdateDialPad: React.FC<BirthdateDialPadProps> = ({ onSuccess }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const maxLength = 8;

  const handleDigit = (digit: string) => {
    if (input.length < maxLength) {
      setError(false);
      setInput((prev) => prev + digit);
    }
  };

  const handleDelete = () => {
    setError(false);
    setInput((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (input === CORRECT_DATE) {
      setSuccess(true);
      setTimeout(onSuccess, 1200);
    } else {
      setError(true);
      setTimeout(() => {
        setInput("");
        setError(false);
      }, 1000);
    }
  };

  const formatDisplay = (val: string) => {
    const chars = val.split("");
    let display = "";
    chars.forEach((c, i) => {
      display += c;
      if (i === 1 || i === 3) display += " / ";
    });
    // Add placeholders
    const placeholder = "DD / MM / YYYY";
    if (display.length < placeholder.length) {
      display += placeholder.slice(display.length);
    }
    return display;
  };

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];

  return (
    <AnimatePresence>
      {!success ? (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, hsl(350 70% 95%) 0%, hsl(0 0% 100%) 40%, hsl(20 70% 94%) 80%, hsl(350 60% 92%) 100%)",
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <FloatingHearts />

          <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 80% 80%) 0%, transparent 70%)" }} />

          <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-2"
            >
              <span className="text-4xl">🔒</span>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enter Your Birthdate Baccha
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-sm mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Type the special date to unlock your surprise 💕
            </motion.p>

            {/* Date display */}
            <motion.div
              className={`w-full rounded-2xl py-4 px-6 mb-6 text-center text-2xl font-mono tracking-widest backdrop-blur-sm transition-colors duration-300 ${
                error
                  ? "bg-destructive/10 border-2 border-destructive/40 text-destructive"
                  : "bg-background/60 border-2 border-primary/20 text-foreground"
              }`}
              animate={error ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold">
                {input.split("").map((c, i) => (
                  <span key={i}>{c}{(i === 1 || i === 3) ? " / " : ""}</span>
                ))}
              </span>
              <span className="text-muted-foreground/40">
                {input.length <= 1 && (input.length === 0 ? "DD" : "D")}
                {input.length <= 1 && " / "}
                {input.length <= 3 && (input.length <= 2 ? "MM" : "M")}
                {input.length <= 3 && " / "}
                {input.length <= 7 && "YYYY".slice(Math.max(0, input.length - 4))}
              </span>
              {error && (
                <motion.p
                  className="text-destructive text-xs mt-2 font-sans"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Wrong date! Try again 💔
                </motion.p>
              )}
            </motion.div>

            {/* Dial pad */}
            <motion.div
              className="grid grid-cols-3 gap-3 w-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {keys.map((key, i) => {
                if (key === "") return <div key={i} />;
                return (
                  <motion.button
                    key={key}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => key === "⌫" ? handleDelete() : handleDigit(key)}
                    className="h-14 rounded-2xl text-xl font-semibold backdrop-blur-sm transition-all duration-200 bg-background/70 border border-primary/15 text-foreground hover:bg-primary/10 hover:border-primary/30 shadow-sm active:shadow-inner"
                  >
                    {key}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Submit button */}
            <motion.button
              onClick={handleSubmit}
              disabled={input.length !== maxLength}
              className="w-full py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:shadow-2xl hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Check if its Correct 💖
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, hsl(350 70% 95%) 0%, hsl(0 0% 100%) 40%, hsl(20 70% 94%) 80%, hsl(350 60% 92%) 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-center"
          >
            <span className="text-6xl">🎉</span>
            <p className="text-2xl font-bold text-primary mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Time to Blow up the Candles!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BirthdateDialPad;
