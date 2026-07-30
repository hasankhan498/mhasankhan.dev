
import { Save, Eye, User } from "lucide-react";
import { savePersonalInfo } from "../aboutActions/personalInfoAction";
import prisma from "@/lib/prisma";



const PersonalInfoPage = async () => {
  const adminInfo = await prisma.about.findFirst({
    where: {
      id: 1
    }
  })
  return (
    <form action={savePersonalInfo} id="personal-info-form" className="flex flex-col gap-6">

      {/* Section actions */}
      <div className="flex items-center justify-end gap-3">
        {/* <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent"
        >
          <Eye size={16} />
          Preview
        </button> */}
        {/* <button
          type="submit"
          className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent group-hover:scale-95 transition-all transform"
        >
          <span className="absolute inset-0 bg-accent" />
          <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground">
            <Save size={16} />
            Save Changes
          </span>
        </button> */}
        <button
          type="submit"
          className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
        >
          <span className="absolute inset-0 bg-accent transition-transform duration-300 group-hover:scale-105" />

          <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-transform duration-300 group-hover:scale-95">
            <Save size={16} />
            Save Changes
          </span>
        </button>
      </div>

      <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
            <User size={16} />
          </span>
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
            Personal Info
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">First Name</label>
            <input type="text" defaultValue="Steve" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div> */}
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
            <input type="text" defaultValue={adminInfo?.name}
              name="name" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Age</label>
            <input type="text" defaultValue={adminInfo?.age}
              name="age" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nationality</label>
            <input type="text" defaultValue={adminInfo?.nationality}
              name="nationality" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Freelance Status</label>
            <select
              defaultValue={adminInfo?.freelance}
              name="freelance"
              className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
            >
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Address</label>
            <input type="text" name="address" defaultValue={adminInfo?.address} className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</label>
            <input type="text" name="phone" defaultValue={adminInfo?.phone} className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
            <input type="email" name="email" defaultValue={adminInfo?.email} className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
          {/* <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skype</label>
            <input type="text" defaultValue="steve.milner" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div> */}
          <div className="flex flex-col gap-2">
            <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Languages</label>
            <input type="text" name="languages" defaultValue={adminInfo?.languages} className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoPage;
