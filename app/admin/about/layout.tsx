"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, BarChart3, Code2, Briefcase, GraduationCap } from "lucide-react";

const TABS = [
  { href: "/admin/about/personal-info", label: "Personal Info", icon: User },
  { href: "/admin/about/stats", label: "About Stats", icon: BarChart3 },
  { href: "/admin/about/skills", label: "Skills", icon: Code2 },
  { href: "/admin/about/experience", label: "Experience", icon: Briefcase },
  { href: "/admin/about/education", label: "Education", icon: GraduationCap },
];

const AboutLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        {/* Page title */}
        <div>
          <p className="text-sm uppercase tracking-widest text-accent">Edit Page</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wide text-foreground">
            About <span className="text-accent">Page</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your personal info, stats, skills, experience and education.
          </p>
        </div>

        {/* Tab nav between the 5 section pages */}
        <div className="flex flex-wrap gap-2 border-b border-foreground/10 pb-2">
          {TABS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={14} />
                {label}
              </Link>
            );
          })}
        </div>
          <Toaster position="top-right" richColors />
        {children}
      </div>
    </div>
  );
};

export default AboutLayout;
