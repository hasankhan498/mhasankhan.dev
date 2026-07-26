import prisma from "@/lib/prisma";
import { Briefcase, Plus, Trash2, Save } from "lucide-react";
import Link from "next/link";
import { deleteExperience } from "../aboutActions/deleteExperience";
import { updateExperience } from "../aboutActions/updateExperience";

const ExperiencePage = async () => {
  const experienceData = await prisma.experience.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div id="experience-form" className="flex flex-col gap-6">
      <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Briefcase size={16} />
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                Experience
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {experienceData.length} entr{experienceData.length !== 1 ? "ies" : "y"} on the About page
              </p>
            </div>
          </div>
          <Link
            href="/admin/about/experience/addExperience"
            className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
          >
            <Plus size={14} />
            Add Entry
          </Link>
        </div>

        {experienceData.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-foreground/15 bg-background/30 px-6 py-12 text-center text-sm text-muted-foreground">
            No experience listed yet — add your first role.
          </div>
        ) : (
          <div className="relative flex flex-col gap-10 pl-8 sm:pl-10">
            {/* Timeline rail */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/10 sm:left-[11px]" />

            {experienceData.map((entity) => (
              <form key={entity.id} className="group relative">
                {/* Timeline dot */}
                <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background sm:-left-10 sm:h-4 sm:w-4" />

                <input type="hidden" name="id" value={entity.id} />

                <div className="flex flex-col gap-4 rounded-2xl transition-colors duration-300">
                  {/* Period, as a clearly visible pill */}
                  <div className="flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
                    <input
                      type="text"
                      name="duration"
                      defaultValue={entity.duration}
                      placeholder="2023 — Present"
                      size={Math.max((entity.duration || "2023 — Present").length, 8)}
                      className="bg-transparent font-heading text-xs font-bold uppercase tracking-widest text-accent outline-none"
                    />
                  </div>

                  {/* Title + company */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                    <input
                      type="text"
                      name="title"
                      defaultValue={entity.title}
                      placeholder="Job Title"
                      className="border-b border-transparent bg-transparent font-heading text-xl font-bold text-foreground outline-none transition-colors duration-300 focus:border-accent sm:text-2xl"
                    />
                    <span className="hidden text-muted-foreground/40 sm:inline">·</span>
                    <input
                      type="text"
                      name="company"
                      defaultValue={entity.company}
                      placeholder="Company"
                      className="w-full border-b border-transparent bg-transparent text-sm font-medium text-muted-foreground outline-none transition-colors duration-300 focus:border-accent focus:text-foreground sm:w-auto"
                    />
                  </div>

                  {/* Description */}
                  <textarea
                    name="description"
                    rows={3}
                    defaultValue={entity.description}
                    placeholder="What did you do in this role?"
                    className="w-full resize-none rounded-2xl border border-foreground/10 bg-background/60 px-5 py-4 text-sm leading-relaxed text-foreground outline-none transition-colors duration-300 focus:border-accent"
                  />

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <button
                      type="submit"
                      formAction={updateExperience}
                      className="flex items-center gap-1.5 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
                    >
                      <Save size={13} />
                      Save
                    </button>
                    <button
                      type="submit"
                      formAction={deleteExperience}
                      className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-red-400"
                    >
                      <Trash2 size={13} />
                      Remove
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

export default ExperiencePage;