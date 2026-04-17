import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BirthdateDialPad from "@/components/BirthdateDialPad";
import CakeScreen from "@/components/CakeScreen";
import FloatingHearts from "@/components/FloatingHearts";
import GiftBoxes from "@/components/GiftBoxes";

const Index: React.FC = () => {
  const [phase, setPhase] = useState<"dialpad" | "cake" | "gifts">("dialpad");

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, hsl(350 60% 95%) 0%, hsl(0 0% 100%) 25%, hsl(20 70% 94%) 50%, hsl(0 0% 100%) 75%, hsl(350 60% 95%) 100%)",
      }}
    >
      <AnimatePresence mode="wait">
        {phase === "dialpad" && (
          <BirthdateDialPad key="dialpad" onSuccess={() => setPhase("cake")} />
        )}

        {phase === "cake" && (
          <CakeScreen key="cake" onComplete={() => setPhase("gifts")} />
        )}

        {phase === "gifts" && (
          <motion.div
            key="gifts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FloatingHearts />
            <GiftBoxes />

            <motion.footer
              className="py-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-muted-foreground text-sm italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Made with love, just for you ❤️
              </p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
