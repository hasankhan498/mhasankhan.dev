// import prisma from "@/lib/prisma";
// import { Code2, Plus, Trash2, Save } from "lucide-react";
// import Link from "next/link";
// import { deleteSkill } from "../aboutActions/deleteSkill";
// import { updateSkill } from "../aboutActions/updateSkill";

// const SkillsPage = async () => {
//   const skills = await prisma.skill.findMany({
//     orderBy: {
//       id: "asc",
//     },
//   });
//   return (
//     <div id="skills-form" className="flex flex-col gap-6">
//       <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
//         <div className="mb-6 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
//               <Code2 size={16} />
//             </span>
//             <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
//               Skills
//             </h3>
//           </div>
//           <Link
//             href="/admin/about/skills/addSkill"
//             className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
//           >
//             <Plus size={14} />
//             Add Skill
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {skills.map((skill) => (
//             <form
//               key={skill.id}
//               className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/40 p-4"
//             >
//               <input type="hidden" name="id" value={skill.id} />

//               <div className="flex items-center justify-between">
//                 <input
//                   type="text"
//                   name="name"
//                   defaultValue={skill.name}
//                   className="w-full rounded-full border border-foreground/10 bg-background/60 px-4 py-2 text-xs uppercase tracking-wide text-foreground outline-none focus:border-accent"
//                 />
//                 <button
//                   type="submit"
//                   formAction={deleteSkill}
//                   className="ml-2 shrink-0 text-muted-foreground transition-colors duration-300 hover:text-red-400"
//                 >
//                   <Trash2 size={14} />
//                 </button>
//               </div>

//               <div className="flex items-center gap-2">
//                 <input
//                   type="range"
//                   name="percentage"
//                   min="0"
//                   max="100"
//                   defaultValue={skill.percentage}
//                   className="w-full accent-accent"
//                 />
//                 <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">
//                   {skill.percentage}%
//                 </span>
//               </div>

//               <button
//                 type="submit"
//                 formAction={updateSkill}
//                 className="mt-1 flex items-center justify-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
//               >
//                 <Save size={14} />
//                 Save
//               </button>
//             </form>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsPage;












import prisma from "@/lib/prisma";
import { Code2, Plus, Trash2, Save } from "lucide-react";
import Link from "next/link";
import { deleteSkill } from "../aboutActions/deleteSkill";
import { updateSkill } from "../aboutActions/updateSkill";

const SkillsPage = async () => {
  const skills = await prisma.skill.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <div id="skills-form" className="flex flex-col gap-6">
      <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Code2 size={16} />
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                Skills
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {skills.length} skill{skills.length !== 1 && "s"} on the About page
              </p>
            </div>
          </div>
          <Link
            href="/admin/about/skills/addSkill"
            className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
          >
            <Plus size={14} />
            Add Skill
          </Link>
        </div>

        {skills.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-foreground/15 bg-background/30 px-6 py-12 text-center text-sm text-muted-foreground">
            No skills yet — add your first one.
          </div>
        ) : (
          <div className="flex flex-col">
            {skills.map((skill, i) => (
              <form
                key={skill.id}
                className="group grid grid-cols-1 items-center gap-x-6 gap-y-3 border-b border-foreground/10 py-5 last:border-b-0 sm:grid-cols-[1fr_2fr_auto]"
              >
                <input type="hidden" name="id" value={skill.id} />

                {/* Index + name */}
                <div className="flex items-center gap-3">
                  <span className="font-heading text-xs tabular-nums text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <input
                    type="text"
                    name="name"
                    defaultValue={skill.name}
                    className="w-full border-b border-transparent bg-transparent py-1 text-sm font-semibold uppercase tracking-wide text-foreground outline-none transition-colors duration-300 focus:border-accent"
                  />
                </div>

                {/* Progress track with real, draggable slider on top */}
                <div className="flex items-center gap-4">
                  <div className="relative flex w-full items-center">
                    <div className="pointer-events-none absolute h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                    <input
                      type="range"
                      name="percentage"
                      min="0"
                      max="100"
                      defaultValue={skill.percentage}
                      className="relative z-10 h-4 w-full cursor-pointer appearance-none bg-transparent
                        [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent
                        [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-md
                        [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent
                        [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent"
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right font-heading text-sm font-bold text-accent tabular-nums">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <button
                    type="submit"
                    formAction={updateSkill}
                    className="flex items-center gap-1.5 rounded-full border border-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
                  >
                    <Save size={12} />
                    Save
                  </button>
                  <button
                    type="submit"
                    formAction={deleteSkill}
                    className="flex items-center justify-center rounded-full p-1.5 text-muted-foreground transition-colors duration-300 hover:text-red-400"
                    aria-label="Remove skill"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </form>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;