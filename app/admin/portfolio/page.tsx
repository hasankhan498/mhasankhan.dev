// app/admin/portfolio/page.tsx
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Save, Trash2, ExternalLink, Tag, Briefcase, Plus, ImagePlus } from "lucide-react";
import { deleteProject } from "./portfolioActions/deleteProject";
import { updateProject } from "./portfolioActions/updateProject";

const CATEGORIES = ["Web App", "Frontend Designing", "Landing Page"];

const page = async () => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Portfolio</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wide text-foreground">
              Your <span className="text-accent">Projects</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {projects.length} project{projects.length !== 1 && "s"} in your portfolio.
            </p>
          </div>

          <Link
            href="/admin/portfolio/new"
            className="flex items-center gap-2 rounded-full border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-opacity duration-300 hover:opacity-90"
          >
            <Plus size={16} />
            Add Project
          </Link>
        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-foreground/15 py-20 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Briefcase size={24} />
            </span>
            <p className="font-semibold text-foreground">No projects yet</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Add your first project to start building your portfolio.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <form
                key={project.id}
                className="group flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-secondary/30 p-5 transition-colors duration-300 hover:border-accent/40"
              >
                <input type="hidden" name="id" value={project.id} />
                <input type="hidden" name="imageUrl" value={project.imageUrl} />
                <input type="hidden" name="imagePublicId" value={project.imagePublicId} />

                {/* Thumbnail — click or drop to replace */}
                <label className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl bg-background/40">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-40"
                  />

                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
                    <Tag size={11} />
                    {project.category}
                  </span>

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ImagePlus size={20} className="text-foreground" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
                      Change Image
                    </span>
                  </div>

                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="hidden"
                  />
                </label>

                {/* Title */}
                <input
                  type="text"
                  name="title"
                  defaultValue={project.title}
                  className="w-full border-b border-transparent bg-transparent font-heading text-lg font-bold text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />

                {/* Category + Link */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <select
                    name="category"
                    defaultValue={project.category}
                    className="w-full rounded-full border border-foreground/10 bg-background/40 px-5 py-3 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent sm:w-1/2"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    name="link"
                    defaultValue={project.link}
                    placeholder="https://example.com"
                    className="w-full rounded-full border border-foreground/10 bg-background/40 px-5 py-3 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent sm:w-1/2"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-accent"
                  >
                    <ExternalLink size={13} />
                    Visit Live
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      formAction={updateProject}
                      className="flex items-center gap-1.5 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
                    >
                      <Save size={13} />
                      Save
                    </button>
                    <button
                      type="submit"
                      formAction={deleteProject}
                      className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-red-400"
                    >
                      <Trash2 size={13} />
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default page;