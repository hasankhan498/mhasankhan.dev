"use client"

import Link from "next/link"
import { HomeIcon, ArrowRight } from "lucide-react"

const notFound = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed bg-background/80 inset-0 min-h-screen h-auto z-10 backdrop-blur-xs" />

      <div className="absolute inset-0 text-foreground/5 font-heading font-black text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Error
      </div>

      <div className="content relative z-20 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">

        <div className="flex items-center gap-4 uppercase">
          <span className="h-1.5 w-16 rounded-full bg-accent" />
          <h1 className="font-heading text-8xl sm:text-9xl font-black uppercase tracking-wider text-accent">
            404
          </h1>
          <span className="h-1.5 w-16 rounded-full bg-accent" />
        </div>

        <h2 className="text-foreground font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
          Page Not <span className="text-accent">Found</span>
        </h2>

        <p className="max-w-md text-base leading-8 text-muted-foreground sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="
group
relative
mt-4
flex
items-center
overflow-hidden
rounded-full
border-2
border-accent
"
        >
          {/* Sliding Background */}
          <span
            className="
              absolute
              inset-0
              origin-right
              scale-x-0
              bg-accent
              transition-transform
              duration-500
              ease-in-out
              group-hover:scale-x-100
            "
          />

          {/* Text */}
          <span
            className="
              relative
              z-10
              px-8
              uppercase
              font-semibold
              tracking-[0.18em]
              transition-colors
              duration-500
              group-hover:text-foreground
            "
          >
            Back To Home
          </span>

          {/* Arrow */}
          <span
            className="
              relative
              z-20
              ml-6
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-accent
            "
          >
            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>

      </div>
    </div>
  )
}

export default notFound