import Link from "next/link";
import { Save, ImagePlus, Type, Tag, Link2, ArrowLeft } from "lucide-react";
import { saveProject } from "../portfolioActions/saveProject";

const page = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Portfolio</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wide text-foreground">
              Add New <span className="text-accent">Project</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the details below to add a new project to your portfolio.
            </p>
          </div>

          <Link
            href="/admin/portfolio"
            className="flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        <form action={saveProject} id="project-form" className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_260px]">

          {/* Left Column — fields */}
          <div className="flex flex-col gap-8">

            {/* Basic Info */}
            <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Type size={16} />
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                  Basic Info
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. E-commerce Dashboard"
                    className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <Tag size={13} />
                    Category
                  </label>
                  <select
                    name="category"
                    className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                  >
                    <option value="Web App">Web App</option>
                    <option value="Frontend Designing">Frontend Designing</option>
                    <option value="Landing Page">Landing Page</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Link2 size={16} />
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                  Project Link
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Live URL
                </label>
                <input
                  type="text"
                  name="link"
                  placeholder="https://example.com"
                  className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent"
                />
              </div>
            </div>

          </div>

          {/* Right Column — thumbnail */}
          <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                <ImagePlus size={16} />
              </span>
              <h3 className="font-heading text-base font-bold uppercase tracking-wide text-foreground">
                Thumbnail
              </h3>
            </div>

            <label className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-foreground/15 bg-background/40 px-6 text-center transition-colors duration-300 hover:border-accent">
              <ImagePlus size={24} className="text-accent" />
              <span className="text-sm text-foreground">Click or drag image</span>
              <span className="text-xs text-muted-foreground">Recommended 1200×900px</span>
              <input type="file" name="image" accept="image/*" className="hidden" />
            </label>
          </div>

        </form>

        {/* Bottom Save Bar */}
        <div className="flex items-center justify-end gap-3 border-t border-foreground/10 pt-6">
          <button
            type="submit"
            form="project-form"
            className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
          >
            <span className="absolute inset-0 bg-accent" />
            <span className="relative z-10 flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground">
              <Save size={16} />
              Publish Project
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default page;