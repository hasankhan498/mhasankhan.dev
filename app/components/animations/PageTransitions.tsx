"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-1000 origin-top bg-accent pointer-events-none"
    />
  );
}