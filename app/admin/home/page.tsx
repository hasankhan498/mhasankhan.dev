import prisma from "@/lib/prisma";
import Image from "next/image";
import {
  Save,
  ImagePlus,
  Type,
  AlignLeft,
} from "lucide-react";
import profileimg from "@/public/assets/images/h9.jpg";
import { saveHero } from "@/actions/hero";

const page = async () => {

  const hero = await prisma.hero.findUnique({
    where: {
      id: 1,
    },
  });

  return (
    <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Edit Page</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wide text-foreground">
              Home <span className="text-accent">Page</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Update the content visitors see first on your portfolio.
            </p>
          </div>

          {/* <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent"
            >
              <Eye size={16} />
              Preview
            </button>

            <button
              type="submit"
              form="home-edit-form"
              className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
            >
              <span className="absolute inset-0 bg-accent" />
              <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground">
                <Save size={16} />
                Save Changes
              </span>
            </button>
          </div> */}
        </div>

        <form action={saveHero} id="home-edit-form" className="flex flex-col gap-8">

          {/* Profile Image */}
          <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                <ImagePlus size={16} />
              </span>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                Profile Image
              </h3>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-accent">
                <Image priority sizes="128px" src={hero?.imageUrl || profileimg} alt="Profile" fill className="object-cover" />
              </div>

              <div className="flex w-full flex-col gap-3">
                <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-foreground/15 bg-background/40 px-6 py-8 text-center transition-colors duration-300 hover:border-accent">
                  <ImagePlus size={22} className="text-accent" />
                  <span className="text-sm text-foreground">
                    Click or drag a new image to upload
                  </span>
                  <span className="text-xs text-muted-foreground">
                    PNG or JPG, recommended 800×1000px
                  </span>
                  <input name="image" type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Type size={16} />
              </span>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                Hero Content
              </h3>
            </div>

            <div className="flex flex-col gap-5">

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    defaultValue={hero?.name}
                    className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                  />
                </div>

                {/* <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Khan"
                    className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                  />
                </div> */}
              </div>

              <div className="flex flex-col gap-2">
                <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Job Title / Role
                </label>
                <input
                  type="text"
                  name='title'
                  defaultValue={hero?.title}
                  className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <AlignLeft size={13} />
                  Bio / Description
                </label>
                <textarea
                  name='description'
                  rows={5}
                  defaultValue={hero?.description}
                  className="resize-none rounded-3xl border border-foreground/10 bg-background/40 px-6 py-5 text-sm leading-relaxed text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />
                <p className="px-1 text-xs text-muted-foreground">
                  Recommended length: 200–300 characters
                </p>
              </div>

            </div>
          </div>

          {/* CTA Button */}
          <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
            <h3 className="mb-6 font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Call-To-Action Button
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Button Text
                </label>
                <input
                  type="text"
                  name='buttonText'
                  defaultValue={hero?.buttonText}
                  className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Button Link
                </label>
                <input
                  type="text"
                  name='buttonLink'
                  defaultValue={hero?.buttonLink}
                  className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
                />
              </div>
            </div>
          </div>

          {/* Bottom Save Bar */}
          <div className="flex items-center justify-end gap-3 border-t border-foreground/10 pt-6">
            {/* <button
              type="button"
              className="rounded-full border border-foreground/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Discard Changes
            </button> */}

            <button
              type="submit"
              className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
            >
              <span className="absolute inset-0 bg-accent" />
              <span className="relative z-10 flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground">
                <Save size={16} />
                Save Changes
              </span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default page;