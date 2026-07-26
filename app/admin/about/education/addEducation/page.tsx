// app/admin/about/experience/addExperience/page.tsx
import Link from "next/link";
import { Save, ArrowLeft, Briefcase } from "lucide-react";
import { createEducation } from "../../aboutActions/createEducation";


const AddEducationPage = () => {
  return (
    <form action={createEducation} id="add-experience-form" className="flex flex-col gap-6">

      {/* Section actions */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/admin/about/education"
          className="flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent"
        >
          <ArrowLeft size={16} />
          Back to Education
        </Link>
        <button
          type="submit"
          className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
        >
          <span className="absolute inset-0 bg-accent" />
          <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground">
            <Save size={16} />
            Save Entry
          </span>
        </button>
      </div>

      <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Briefcase size={16} />
          </span>
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Add Education
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Add a single new role to the About page.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Degree
              </label>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Institute
              </label>
              <input
                type="text"
                name="institute"
                placeholder="Envato"
                className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Period
              </label>
              <input
                type="text"
                name="duration"
                placeholder="2023 - Present"
                className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Description
            </label>
            <textarea
            name="description"
              rows={4}
              placeholder="A short summary of what you did in this role."
              className="w-full resize-none rounded-2xl border border-foreground/10 bg-background/40 px-5 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEducationPage;