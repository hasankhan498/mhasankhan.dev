"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923104278981?text=Hello%20I%20visited%20your%20portfolio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="
        group
        fixed
        bottom-7
        right-7
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-accent
        text-white
        shadow-lg
        shadow-accent/30
        transition-shadow
        duration-300
        hover:shadow-xl
        hover:shadow-accent/40
      "
    >
      {/* Soft ambient pulse — one ring, timed slower than the default animate-ping so it reads as a breathing glow rather than a loading spinner */}
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-accent
          opacity-50
          motion-safe:animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]
        "
      />

      {/* Icon */}
      <MessageCircle
        size={30}
        strokeWidth={2.25}
        aria-hidden="true"
        className="
          relative
          z-10
          transition-transform
          duration-300
          ease-out
          group-hover:rotate-12
        "
      />

      {/* Tooltip */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-20
          whitespace-nowrap
          rounded-full
          bg-foreground
          px-5
          py-2
          text-sm
          font-semibold
          text-background
          opacity-0
          translate-x-3
          shadow-md
          transition-all
          duration-300
          ease-out
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        Let&apos;s chat
      </span>
    </motion.a>
  );
}