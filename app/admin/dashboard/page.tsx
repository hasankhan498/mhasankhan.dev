import Link from "next/link";
import Image from "next/image";
import {
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Home,
  User,
  PlusCircle,
  ShieldCheck,
  Clock,
  Rocket,
  Pencil,
  LogOut,
  LucideIcon
} from "lucide-react";
import { signOut } from "@/lib/auth";
import prisma from "@/lib/prisma";


interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}




const adminName = "M Hasan Khan";


const quickActions = [
  { icon: Home, label: "Edit Home Page", href: "/admin/home" },
  { icon: User, label: "Edit About Page", href: "/admin/about" },
  { icon: PlusCircle, label: "Add New Project", href: "/admin/portfolio/new" },
  { icon: FolderKanban, label: "Manage Portfolio", href: "/admin/portfolio" },
  { icon: Code2, label: "Manage Skills", href: "/admin/about/skills" },
  { icon: Briefcase, label: "Manage Experience", href: "/admin/about/experience" },
  { icon: GraduationCap, label: "Manage Education", href: "/admin/about/education" },
  { icon: MessageSquare, label: "View Messages", href: "/admin/messages" },
];


const currentDateTime = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

// Only reused component — used 8 times below, so it earns its keep.
const StatCard = ({ icon: Icon, label, value }:StatCardProps) => (
  <div className="flex items-center gap-4 rounded-2xl border border-foreground/10 bg-secondary/30 p-5 transition-colors duration-300 hover:border-accent">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
      <Icon size={20} />
    </div>
    <div>
      <p className="font-heading text-2xl font-black text-foreground">{value}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  </div>
);

const page = async () => {
  const totalProjects = await prisma.project.count()
  const totalSkills = await prisma.skill.count()
  const totalMessages = await prisma.contactMessage.count()
  const totalexper = await prisma.experience.count()
  const totaleduc = await prisma.education.count()
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc"
    },
    take: 3
  })
  const UnreadMessages = await prisma.contactMessage.findMany({
    where:{
      isRead:false
    }
  })
  const totalUnreadMessages = UnreadMessages?.length

  const lastMessage = await prisma.contactMessage.findFirst({
    orderBy:{
      createdAt:"desc"
    }
  })

  const stats = [
    { icon: FolderKanban, label: "Total Projects", value: totalProjects },
    { icon: Code2, label: "Total Skills", value: totalSkills },
    { icon: Briefcase, label: "Experience Entries", value: totalexper },
    { icon: GraduationCap, label: "Education Entries", value: totaleduc },
    { icon: MessageSquare, label: "Contact Messages", value: totalMessages },
  ];


  return (
    <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">

        {/* Welcome Section */}
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-foreground/10 bg-secondary/30 p-8 lg:flex-row lg:items-center">

          {/* Left */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <ShieldCheck size={15} className="text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Admin Dashboard
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Welcome Back
              </p>

              <h1 className="mt-2 font-heading text-4xl font-black uppercase leading-none tracking-wide text-foreground lg:text-5xl">
                Hey, <span className="text-accent">{adminName}</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                Manage your portfolio, projects, skills and client messages from one place.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-4 lg:items-end">

            <div className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/40 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                <Clock size={18} className="text-accent" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Current Time
                </p>
                <p className="text-sm font-medium text-foreground">
                  {currentDateTime}
                </p>
              </div>
            </div>

            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full border border-red-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                <LogOut size={16} />
                Logout
              </button>
            </form>

          </div>
        </div>

        {/* Portfolio Statistics */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} icon={stat.icon} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Rocket size={16} />
            </span>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Quick Actions
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-foreground/10 px-4 py-6 text-center transition-colors duration-300 hover:border-accent hover:bg-accent/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-foreground">
                  <action.icon size={20} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>
        </div>


        {/* Latest Projects Table */}
        <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Latest Portfolio Projects
            </h3>
            <Link href="/admin/portfolio" className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-foreground">
              Manage All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-foreground/10 text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="py-3 pr-4 font-semibold">Thumbnail</th>
                  <th className="py-3 pr-4 font-semibold">Title</th>
                  <th className="py-3 pr-4 font-semibold">Category</th>
                  <th className="py-3 pr-4 font-semibold">Status</th>
                  <th className="py-3 pr-4 font-semibold">Updated</th>
                  <th className="py-3 pr-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-foreground/10 last:border-0">
                    <td className="py-4 pr-4">
                      <div className="relative h-12 w-16 overflow-hidden rounded-lg">
                        <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                      </div>
                    </td>
                    <td className="py-4 pr-4 text-sm font-medium text-foreground">{project.title}</td>
                    <td className="py-4 pr-4 text-sm text-muted-foreground">{project.category}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest ${project
                          ? "bg-accent/15 text-accent"
                          : "bg-foreground/10 text-muted-foreground"
                          }`}
                      >
                        Published
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-sm text-muted-foreground">{new Date(project.updatedAt).toLocaleString() ?? new Date(project.createdAt).toLocaleString()}</td>
                    <td className="py-4 pr-4 text-right">
                      <Link
                        href={`/admin/portfolio`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
                      >
                        <Pencil size={15} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact + Portfolio Overview */}
        <div className="grid grid-cols-1 gap-6">

          <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                Contact Overview
              </h3>
              <Link href="/admin/messages" className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-foreground">
                View All Messages
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-foreground/10 p-4">
                  <p className="font-heading text-2xl font-black text-foreground">{totalMessages}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Total Messages</p>
                </div>
                <div className="rounded-2xl border border-foreground/10 p-4">
                  <p className="font-heading text-2xl font-black text-accent">{totalUnreadMessages}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Unread</p>
                </div>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-background/40 p-4">
                <p className="mb-1 text-xs uppercase tracking-widest text-accent">Latest Message</p>
                <p className="text-sm font-semibold text-foreground">{lastMessage?.name}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {lastMessage?.message}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Dashboard Footer */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-6 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row">
          <span>Portfolio Admin</span>
          <span>© {new Date().getFullYear()} {adminName}. All rights reserved.</span>
          <span>
            Last Updated:{" "}
            {new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

      </div>
    </div>
  );
};

export default page;