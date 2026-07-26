"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "./PageTransitions";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [transitioning, setTransitioning] = useState(false);

  const navigate = async (href: string) => {
    setTransitioning(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    router.push(href);

    setTimeout(() => {
      setTransitioning(false);
    }, 800);
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <PageTransition isVisible={transitioning} />
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("usePageTransition must be used inside TransitionProvider");
  }

  return context;
}