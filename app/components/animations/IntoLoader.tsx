"use client";

import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

interface IntroLoaderProps {
    onComplete?: () => void;
}

export default function IntroLoader({
    onComplete,
}: IntroLoaderProps) {

    const [scope, animate] = useAnimate();

    const [isFinished, setIsFinished] = useState(false);


    useEffect(() => {
        let mounted = true;

        const startAnimation = async () => {
            // Wait until DOM is ready
            await new Promise((resolve) => setTimeout(resolve, 100));

            // -------------------------------
            // STEP 1
            // Line grows to 80vh
            // -------------------------------

            await animate(
                "#loader-line",
                {
                    height: "50vh",
                },
                {
                    duration: 1,
                    ease: "easeInOut",
                }
            );


            await new Promise((resolve) => setTimeout(resolve, 250));

            // -------------------------------
            // STEP 3
            // Grow to full screen
            // -------------------------------

            await animate(
                "#loader-line",
                {
                    height: "100vh",
                },
                {
                    duration: 0.35,
                    ease: "easeInOut",
                }
            );

            await Promise.all([
                animate(
                    "#left-panel",
                    {
                        width: "50vw",
                    },
                    {
                        duration: 0.35,
                        ease: "easeInOut",
                    }
                ),

                animate(
                    "#right-panel",
                    {
                        width: "50vw",
                    },
                    {
                        duration: 0.35,
                        ease: "easeInOut",
                    }
                ),
            ]);

            // Next steps will come here...

            if (!mounted) return;

            setIsFinished(true);

            onComplete?.();
        };

        startAnimation();

        return () => {
            mounted = false;
        };
    }, [animate, onComplete]);

    if (isFinished) return null;

    return (
        <motion.div ref={scope} className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background">

            <motion.div
                id="left-panel"
                className="absolute left-1/2 top-0 h-screen w-0 -translate-x-full bg-accent"
            />

            <motion.div
                id="right-panel"
                className="absolute left-1/2 top-0 h-screen w-0 bg-accent"
            />

            <motion.div
                id="loader-line"
                className="absolute left-1/2 top-1/2 w-[2px] h-0 -translate-x-1/2 -translate-y-1/2 bg-accent"
            />

        </motion.div>
    );
}