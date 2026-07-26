"use client";

import { useState, useEffect } from "react";
import IntroLoader from "@/app/components/animations/IntoLoader";
import Image from "next/image";
import profileimg from "@/public/assets/images/profilePortfolio.png";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "./components/animations/TransitionProvider";
import TabNavigation from "./components/TabNavigation";
import MobileNavMenu from "./components/MobileNavMenu";
import { getHeroData } from "@/actions/getHero";

interface heroData {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePublicId: string;
  buttonText: string;
  buttonLink: string;
  updatedAt: Date;
}

export default function Home() {
  const { navigate } = usePageTransition();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<heroData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const heroData = await getHeroData();
      setData(heroData);
    }
    fetchData();
  }, []);

  return (
    <>
      <IntroLoader />

      <main className="relative min-h-screen overflow-hidden bg-background">
        {/* Yellow Background Strip */}
        <div className="pointer-events-none absolute -left-48 top-0 hidden h-[1000px] w-[28rem] rotate-[-12deg] bg-accent lg:block" />

        <MobileNavMenu
          navigate={navigate}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />

        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[500px_1fr_90px] lg:py-0">
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-start">
            <Image
              src={data?.imageUrl || profileimg}
              alt="Profile"
              priority
              width={500}
              height={500}
              className="h-60 w-60 rounded-full object-cover border-4 border-accent shadow-2xl lg:h-[75vh] lg:w-auto lg:rounded-3xl lg:border-0"
            />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-4 uppercase">
              <span className="h-1.5 w-16 rounded-full bg-accent"></span>

              <h1 className="font-heading text-3xl font-black uppercase tracking-wide text-accent sm:text-4xl md:text-5xl xl:text-6xl">
                I&apos;M {data?.name ? ` ${data.name}` : ""}
              </h1>
            </div>

            <h2 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-4xl">
              {data?.title}
            </h2>

            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {data?.description}
            </p>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                if (data?.buttonLink) navigate(data.buttonLink);
              }}
              className="group relative flex items-center self-center overflow-hidden rounded-full border-2 border-accent lg:self-start"
            >
              {/* Sliding Background */}
              <span className="absolute inset-0 origin-right scale-x-0 bg-accent transition-transform duration-500 ease-in-out group-hover:scale-x-100" />

              {/* Text */}
              <span className="relative z-10 px-8 uppercase font-semibold tracking-[0.18em] transition-colors duration-500 group-hover:text-foreground">
                {data?.buttonText}
              </span>

              {/* Arrow */}
              <span className="relative z-20 ml-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          </div>

          {/* Right Navigation (Desktop only) */}
          <TabNavigation setIsMenuOpen={setIsMenuOpen} navigate={navigate} />
        </div>
      </main>
    </>
  );
}