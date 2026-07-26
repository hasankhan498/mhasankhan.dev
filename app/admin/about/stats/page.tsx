import prisma from "@/lib/prisma";
import { BarChart3, Plus, Trash2, Save } from "lucide-react";
import { updateStat } from "../aboutActions/updateStat";
import { deleteStat } from "../aboutActions/deleteStat";
import Link from "next/link"



const StatsPage = async () => {
  const stats = await prisma.aboutStat.findMany()
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <BarChart3 size={16} />
            </span>

            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              About Stats
            </h3>
          </div>

          <Link
          href="/admin/about/stats/addStat"
            className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
          >
            <Plus size={14} />
            Add Stat
          </Link>
        </div>

        <div className="space-y-4">
          {stats.map((stat) => (
            <form
              key={stat.id}
              className="rounded-2xl border border-foreground/10 bg-background/40 p-5"
            >
              <input
                type="hidden"
                name="id"
                value={stat.id}
              />

              <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                <input
                  name="number"
                  type="text"
                  defaultValue={stat.number}
                  className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-center text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />

                <input
                  name="text"
                  type="text"
                  defaultValue={stat.text}
                  className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />
              </div>

              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="submit"
                  formAction={updateStat}
                  className="flex items-center gap-2 rounded-full border border-accent px-5 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
                >
                  <Save size={14} />
                  Update
                </button>

                <button
                  type="submit"
                  formAction={deleteStat}
                  className="flex items-center gap-2 rounded-full border border-red-500 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-red-500 transition-colors duration-300 hover:bg-red-500 hover:text-white"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;