
"use client"


import { useState, useEffect } from "react"
import Image from "next/image"
import { usePageTransition } from "../components/animations/TransitionProvider"
import MobileNavMenu from "../components/MobileNavMenu"
import TabNavigation from "../components/TabNavigation"
import { ArrowUpRight } from "lucide-react"
import { getProject } from "../admin/portfolio/portfolioActions/getProjects"


export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}



const portfolioCategories = ["All", "Web App", "Frontend Designing", "Landing Page"]


const PortfolioClient = () => {

  const { navigate } = usePageTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[] | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      const proj = await getProject()
      setPortfolioItems(proj)
    }
    fetchProjects();
  }, [])



  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems?.filter((item) => item.category === activeCategory);

  return (
    <div className="relative">
      <div className="fixed bg-background/10 inset-0 min-h-screen h-auto z-10 backdrop-blur-xs" />

      {/* <div className="absolute inset-0 text-foreground/10 font-heading font-black text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Works
      </div> */}
      <div className="absolute inset-0 overflow-hidden text-foreground/10 font-heading font-black text-5xl sm:text-7xl md:text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Works
      </div>

      <div className="content relative z-20 pb-24">

        <h1 className="text-foreground font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center pt-16 uppercase tracking-wider">
          MY <span className="text-accent">PORTFOLIO</span>
        </h1>

        <MobileNavMenu navigate={navigate} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 px-6">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full
                border-2
                border-accent
                px-6
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-widest
                transition-colors
                duration-300
                ${activeCategory === category
                  ? "bg-accent text-foreground"
                  : "bg-transparent text-foreground hover:bg-accent/10"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {/* Portfolio Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems?.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="group relative block overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                />

                {/* Accent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Floating Category */}
                <span
                  className="
            absolute
            left-6
            top-6
            rounded-full
            bg-accent
            px-4
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-black
            translate-y-[-20px]
            opacity-0
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
                >
                  {item.category}
                </span>

                {/* Arrow */}
                <div
                  className="
            absolute
            right-6
            top-6
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-accent
            text-black
            scale-0
            rotate-180
            transition-all
            duration-500
            group-hover:scale-100
            group-hover:rotate-0
          "
                >
                  <ArrowUpRight size={22} />
                </div>

                {/* Bottom Content */}
                <div
                  className="
            absolute
            bottom-0
            left-0
            w-full
            p-6
            translate-y-8
            opacity-0
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
                >
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm tracking-wide text-white/70">
                    View Project →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredItems?.length === 0 && (
          <p className="text-center text-muted-foreground mt-14">
            No projects found in this category.
          </p>
        )}

      </div>

      {/* Right Navigation (Desktop only) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100]">
        <TabNavigation setIsMenuOpen={setIsMenuOpen} navigate={navigate} />
      </div>

    </div>
  )
}

export default PortfolioClient