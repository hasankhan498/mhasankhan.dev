"use client"

import { useEffect, useState } from "react"
import { usePageTransition } from "../components/animations/TransitionProvider"
import MobileNavMenu from "../components/MobileNavMenu"
import TabNavigation from "../components/TabNavigation"
import {
  BriefcaseBusiness,
  GraduationCap
} from "lucide-react";
import { getPersonalInfo } from "@/actions/getPersonalInfo"
import { getStats } from "@/actions/getStats"
import { getSkills } from "@/actions/getSkills"
import { getExper } from "@/actions/getExperience"
import { getEducate } from "@/actions/getEducation"


interface PersonalInfo {
  name: string;
  age: string;
  nationality: string;
  freelance: string;
  address: string;
  phone: string;
  email: string;
  languages: string;
}

interface StatsType {
  id:number
  number:string
  text:string
}

interface SkillItem {
  id: number;
  name: string;
  percentage: number;
}


interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
}


interface Education {
  id: number;
  degree: string;
  institute: string;
  duration: string;
  description: string;
}




const page = () => {

  const { navigate } = usePageTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [aboutStats, setAboutStats] = useState<StatsType[] | null>(null);
  const [skillsCircle, setSkillsCircle] = useState<SkillItem[] | null>(null);
  const [exper, setExper] = useState<Experience[] | null>(null);
  const [educ, setEduc] = useState<Education[] | null>(null);

  useEffect(() => {
    async function fetchPersonalInfoData() {
      const infoData = await getPersonalInfo()
      setPersonalInfo(infoData);
    }
    async function fetchStatsData() {
      const statsData = await getStats()
      setAboutStats(statsData)
    }
    async function fetchSkillsData() {
      const skillsData = await getSkills()
      setSkillsCircle(skillsData)
    }
    async function fetchExperData() {
      const experData = await getExper()
      setExper(experData)
    }
    async function fetchEducData() {
      const educData = await getEducate()
      setEduc(educData)
    }
    fetchPersonalInfoData();
    fetchStatsData();
    fetchSkillsData();
    fetchExperData();
    fetchEducData();
  }, []);

  return (
    <div className="relative">
      <div className="fixed bg-background/10 inset-0 min-h-screen h-auto z-10 backdrop-blur-xs" />

      {/* <div className="absolute inset-0 text-foreground/5 font-heading font-black text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Resume
      </div> */}
      <div className="absolute inset-0 overflow-hidden text-foreground/10 font-heading font-black text-5xl sm:text-7xl md:text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Resume
      </div>

      <div className="content relative z-20 pb-24">

        <h1 className="text-foreground font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center pt-16 uppercase tracking-wider">
          ABOUT <span className="text-accent">ME</span>
        </h1>

        <MobileNavMenu navigate={navigate} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

        <div className="flex flex-col gap-20 mt-16 px-6 sm:px-8 max-w-6xl mx-auto">

          {/* Personal Info + Stats */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Personal Info */}
            <div className="personalinfo flex-1 rounded-3xl border border-foreground/10 bg-secondary/30 p-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-1.5 w-12 rounded-full bg-accent" />
                <h3 className="uppercase text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-wide">
                  Personal Info
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                <div className="flex flex-col gap-4">
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Name:</span> {personalInfo?.name}
                  </p>
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Age:</span> {personalInfo?.age}
                  </p>
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Nationality:</span> {personalInfo?.nationality}
                  </p>
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Freelance:</span> {personalInfo?.freelance}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Phone:</span> {personalInfo?.phone}
                  </p>
                  <p className="text-muted-foreground font-light lowercase">
                    <span className="text-accent font-semibold capitalize">Email:</span> {personalInfo?.email}
                  </p>
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Language:</span> {personalInfo?.languages}
                  </p>
                  <p className="capitalize text-muted-foreground font-light">
                    <span className="text-accent font-semibold">Address:</span> {personalInfo?.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {aboutStats?.map((box) => (
                <div
                  key={box.id}
                  className="flex flex-col justify-center gap-3 rounded-3xl border border-foreground/10 bg-secondary/30 p-6 transition-colors duration-300 hover:border-accent"
                >
                  <h2 className="text-accent font-heading text-4xl font-black">
                    {box.number}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-accent shrink-0" />
                    <h3 className="text-foreground text-sm sm:text-base uppercase tracking-wide">
                      {box.text}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-foreground/20 rounded-3xl w-1/3 h-[1px] mx-auto" />

          {/* Skills */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-1.5 w-12 rounded-full bg-accent" />
              <h1 className="uppercase text-foreground font-heading font-bold text-3xl sm:text-4xl tracking-wide">
                My Skills
              </h1>
              <span className="h-1.5 w-12 rounded-full bg-accent" />
            </div>

            <div className="skillboxn grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              {skillsCircle?.map((circle, index) => {
                const radius = 42;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (circle.percentage / 100) * circumference;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="relative h-28 w-28">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          strokeWidth="8"
                          className="stroke-foreground/10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          className="stroke-accent transition-all duration-700 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground font-heading font-bold text-lg">
                          {circle.percentage}%
                        </span>
                      </div>
                    </div>
                    <p className="uppercase text-sm tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      {circle.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-foreground/20 rounded-3xl w-1/3 h-[1px] mx-auto" />

          {/* Experience & Education */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="h-1.5 w-12 rounded-full bg-accent" />
              <h1 className="uppercase text-foreground font-heading font-bold text-3xl sm:text-4xl tracking-wide text-center">
                Experience &amp; Education
              </h1>
              <span className="h-1.5 w-12 rounded-full bg-accent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Experience */}
              <div className="exper flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <h3 className="uppercase text-foreground font-heading font-bold text-xl tracking-wide">
                    Experience
                  </h3>
                </div>

                {exper?.map((box) => (
                  <div
                    key={box.id}
                    className="relative pl-6 border-l-2 border-foreground/10 hover:border-accent transition-colors duration-300"
                  >
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
                    <div className="rounded-2xl border border-foreground/10 bg-secondary/30 p-6">
                      <span className="inline-block rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1 mb-3">
                        {box.duration}
                      </span>
                      <h4 className="text-foreground font-heading font-bold text-lg capitalize">
                        {box.title}
                      </h4>
                      <p className="text-accent text-sm font-medium capitalize mb-2">
                        {box.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {box.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="educ flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="uppercase text-foreground font-heading font-bold text-xl tracking-wide">
                    Education
                  </h3>
                </div>

                {educ?.map((box) => (
                  <div
                    key={box.id}
                    className="relative pl-6 border-l-2 border-foreground/10 hover:border-accent transition-colors duration-300"
                  >
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
                    <div className="rounded-2xl border border-foreground/10 bg-secondary/30 p-6">
                      <span className="inline-block rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1 mb-3">
                        {box.duration}
                      </span>
                      <h4 className="text-foreground font-heading font-bold text-lg capitalize">
                        {box.degree}
                      </h4>
                      <p className="text-accent text-sm font-medium capitalize mb-2">
                        {box.institute}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {box.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Right Navigation (Desktop only) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100]">
        <TabNavigation setIsMenuOpen={setIsMenuOpen} navigate={navigate} />
      </div>

    </div>
  )
}

export default page