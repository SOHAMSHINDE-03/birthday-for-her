import React from "react";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 12 + Math.random() * 24,
  duration: 6 + Math.random() * 14,
  delay: Math.random() * 12,
  opacity: 0.2 + Math.random() * 0.5,
  emoji: ["❤", "💕", "✨", "🌸", "💗", "🩷", "♥"][i % 7],
  drift: (Math.random() - 0.5) * 80,
}));

const FloatingHearts: React.FC = () => (
  <>
    {particles.map((h) => (
      <span
        key={h.id}
        className="floating-heart"
        style={{
          left: h.left,
          fontSize: h.size,
          animationDuration: `${h.duration}s`,
          animationDelay: `${h.delay}s`,
          opacity: h.opacity,
          "--drift": `${h.drift}px`,
          filter: h.emoji === "✨" ? "drop-shadow(0 0 4px gold)" : undefined,
        } as React.CSSProperties}
      >
        {h.emoji}
      </span>
    ))}
  </>
);

export default FloatingHearts;
