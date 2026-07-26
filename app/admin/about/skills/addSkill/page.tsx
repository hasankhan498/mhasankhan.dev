"use client"

import Link from "next/link";
import { Save, ArrowLeft, Code2 } from "lucide-react";
import { useState, useActionState } from "react";
import { toast } from "sonner"
import { createSkill } from "../../aboutActions/createSkill";


const AddSkillPage = () => {
    const [range, setRange] = useState(50)
    const [ state, formAction, pending ] = useActionState(createSkill, {
        success:false,
        message:""
    })
    
  return (
    <form action={formAction} id="add-skill-form" className="flex flex-col gap-6">

      {/* Section actions */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/admin/about/skills"
          className="flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent"
        >
          <ArrowLeft size={16} />
          Back to Skills
        </Link>
        <button
          type="submit"
          className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
        >
          <span className="absolute inset-0 bg-accent" />
          <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground">
            <Save size={16} />
            { pending ? "Saving..." : "Save Skill"}
          </span>
        </button>
      </div>

      <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Code2 size={16} />
          </span>
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Add Skill
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Add a single new skill to the About page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Skill Name
            </label>
            <input
              type="text"
              placeholder="HTML"
              name="name"
              className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Proficiency
            </label>
            <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/40 px-6 py-4">
              <input
                type="range"
                name="percentage"
                min="0"
                max="100"
                value={range}
                onChange={(e)=>setRange(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">
                {range}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddSkillPage;