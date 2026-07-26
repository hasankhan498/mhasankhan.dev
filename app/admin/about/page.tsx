// import {
//   Save,
//   Eye,
//   User,
//   BarChart3,
//   Code2,
//   Briefcase,
//   GraduationCap,
//   Plus,
//   Trash2,
//   GripVertical,
// } from "lucide-react";

// const page = () => {
//   return (
//     <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
//       <div className="mx-auto flex max-w-5xl flex-col gap-8">

//         {/* Header */}
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//           <div>
//             <p className="text-sm uppercase tracking-widest text-accent">Edit Page</p>
//             <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wide text-foreground">
//               About <span className="text-accent">Page</span>
//             </h1>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Manage your personal info, stats, skills, experience and education.
//             </p>
//           </div>

//           {/* <div className="flex items-center gap-3">
//             <button
//               type="button"
//               className="flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent"
//             >
//               <Eye size={16} />
//               Preview
//             </button>

//             <button
//               type="submit"
//               form="about-edit-form"
//               className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
//             >
//               <span className="absolute inset-0 bg-accent" />
//               <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground">
//                 <Save size={16} />
//                 Save Changes
//               </span>
//             </button>
//           </div> */}
//         </div>

//         <form id="about-edit-form" className="flex flex-col gap-8">

//           {/* Personal Info */}
//           <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
//             <div className="mb-6 flex items-center gap-3">
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
//                 <User size={16} />
//               </span>
//               <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
//                 Personal Info
//               </h3>
//             </div>

//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">First Name</label>
//                 <input type="text" defaultValue="Steve" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Last Name</label>
//                 <input type="text" defaultValue="Milner" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Age</label>
//                 <input type="text" defaultValue="27 Years" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nationality</label>
//                 <input type="text" defaultValue="Tunisian" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Freelance Status</label>
//                 <select
//                   defaultValue="Available"
//                   className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent"
//                 >
//                   <option>Available</option>
//                   <option>Not Available</option>
//                 </select>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Address</label>
//                 <input type="text" defaultValue="Tunis" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</label>
//                 <input type="text" defaultValue="+216 21 184 010" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
//                 <input type="email" defaultValue="you@mail.com" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skype</label>
//                 <input type="text" defaultValue="steve.milner" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Languages</label>
//                 <input type="text" defaultValue="French, English" className="rounded-full border border-foreground/10 bg-background/40 px-6 py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent" />
//               </div>
//             </div>
//           </div>

//           {/* About Stats */}
//           <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
//                   <BarChart3 size={16} />
//                 </span>
//                 <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
//                   About Stats
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
//               >
//                 <Plus size={14} />
//                 Add Stat
//               </button>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               {[1, 2, 3, 4].map((id) => (
//                 <div key={id} className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/40 p-4">
//                   <GripVertical size={16} className="shrink-0 text-muted-foreground" />
//                   <input
//                     type="number"
//                     defaultValue={50}
//                     className="w-20 shrink-0 rounded-full border border-foreground/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
//                   />
//                   <input
//                     type="text"
//                     defaultValue="Completed Projects"
//                     className="flex-1 rounded-full border border-foreground/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
//                   />
//                   <button type="button" className="shrink-0 text-muted-foreground transition-colors duration-300 hover:text-red-400">
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
//                   <Code2 size={16} />
//                 </span>
//                 <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
//                   Skills
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
//               >
//                 <Plus size={14} />
//                 Add Skill
//               </button>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <div key={i} className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/40 p-4">
//                   <div className="flex items-center justify-between">
//                     <input
//                       type="text"
//                       defaultValue="HTML"
//                       className="w-full rounded-full border border-foreground/10 bg-background/60 px-4 py-2 text-xs uppercase tracking-wide text-foreground outline-none focus:border-accent"
//                     />
//                     <button type="button" className="ml-2 shrink-0 text-muted-foreground transition-colors duration-300 hover:text-red-400">
//                       <Trash2 size={14} />
//                     </button>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="range"
//                       min="0"
//                       max="100"
//                       defaultValue={70}
//                       className="w-full accent-accent"
//                     />
//                     <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">70%</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
//                   <Briefcase size={16} />
//                 </span>
//                 <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
//                   Experience
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
//               >
//                 <Plus size={14} />
//                 Add Entry
//               </button>
//             </div>

//             <div className="flex flex-col gap-4">
//               {[1, 2, 3].map((id) => (
//                 <div key={id} className="rounded-2xl border border-foreground/10 bg-background/40 p-5">
//                   <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//                     <input type="text" defaultValue="Web Developer" placeholder="Job Title" className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none focus:border-accent" />
//                     <input type="text" defaultValue="Envato" placeholder="Company" className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none focus:border-accent" />
//                     <input type="text" defaultValue="2023 - Present" placeholder="Period" className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none focus:border-accent" />
//                   </div>
//                   <textarea
//                     rows={3}
//                     defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat sapiente debitis harum deserunt."
//                     className="w-full resize-none rounded-2xl border border-foreground/10 bg-background/60 px-5 py-4 text-sm text-foreground outline-none focus:border-accent"
//                   />
//                   <div className="mt-3 flex justify-end">
//                     <button type="button" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-red-400">
//                       <Trash2 size={14} />
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div className="rounded-3xl border border-foreground/10 bg-secondary/30 p-6 sm:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
//                   <GraduationCap size={16} />
//                 </span>
//                 <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
//                   Education
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
//               >
//                 <Plus size={14} />
//                 Add Entry
//               </button>
//             </div>

//             <div className="flex flex-col gap-4">
//               {[1, 2, 3].map((id) => (
//                 <div key={id} className="rounded-2xl border border-foreground/10 bg-background/40 p-5">
//                   <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//                     <input type="text" defaultValue="Web Developer" placeholder="Degree" className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none focus:border-accent" />
//                     <input type="text" defaultValue="Envato" placeholder="Institute" className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none focus:border-accent" />
//                     <input type="text" defaultValue="2023 - Present" placeholder="Period" className="rounded-full border border-foreground/10 bg-background/60 px-5 py-3 text-sm text-foreground outline-none focus:border-accent" />
//                   </div>
//                   <textarea
//                     rows={3}
//                     defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat sapiente debitis harum deserunt."
//                     className="w-full resize-none rounded-2xl border border-foreground/10 bg-background/60 px-5 py-4 text-sm text-foreground outline-none focus:border-accent"
//                   />
//                   <div className="mt-3 flex justify-end">
//                     <button type="button" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-red-400">
//                       <Trash2 size={14} />
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Save Bar */}
//           <div className="flex items-center justify-end gap-3 border-t border-foreground/10 pt-6">
//             <button
//               type="button"
//               className="rounded-full border border-foreground/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-foreground"
//             >
//               Discard Changes
//             </button>

//             <button
//               type="submit"
//               className="group relative flex items-center overflow-hidden rounded-full border-2 border-accent"
//             >
//               <span className="absolute inset-0 bg-accent" />
//               <span className="relative z-10 flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground">
//                 <Save size={16} />
//                 Save Changes
//               </span>
//             </button>
//           </div>

//         </form>

//       </div>
//     </div>
//   );
// };

// export default page;













































































import { redirect } from "next/navigation";


const AboutIndexPage = () => {
  redirect("/admin/about/personal-info");
};

export default AboutIndexPage;