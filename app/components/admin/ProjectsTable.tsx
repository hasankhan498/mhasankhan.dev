import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import PanelCard from "./PanelCard";
import placeholderImg from "@/public/assets/images/h9.jpg";

const projects = [
  { id: 1, title: "E-commerce Dashboard", category: "Web App", status: "Published", updated: "Jul 21, 2026", image: placeholderImg },
  { id: 2, title: "Banking Mobile UI", category: "UI Design", status: "Draft", updated: "Jul 20, 2026", image: placeholderImg },
  { id: 3, title: "SaaS Landing Page", category: "Landing Page", status: "Published", updated: "Jul 19, 2026", image: placeholderImg },
  { id: 4, title: "Portfolio Redesign", category: "UI Design", status: "Draft", updated: "Jul 18, 2026", image: placeholderImg },
];

const StatusBadge = ({ status }) => (
  <span
    className={`
      inline-block
      rounded-full
      px-4
      py-1
      text-xs
      font-semibold
      uppercase
      tracking-widest
      ${status === "Published"
        ? "bg-accent/15 text-accent"
        : "bg-foreground/10 text-muted-foreground"
      }
    `}
  >
    {status}
  </span>
);

const ProjectsTable = () => {
  return (
    <PanelCard title="Latest Portfolio Projects" actionLabel="Manage All" actionHref="/admin/portfolio">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="border-b border-foreground/10 text-left text-xs uppercase tracking-widest text-muted-foreground">
              <th className="py-3 pr-4 font-semibold">Thumbnail</th>
              <th className="py-3 pr-4 font-semibold">Title</th>
              <th className="py-3 pr-4 font-semibold">Category</th>
              <th className="py-3 pr-4 font-semibold">Status</th>
              <th className="py-3 pr-4 font-semibold">Updated</th>
              <th className="py-3 pr-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-foreground/10 last:border-0">
                <td className="py-4 pr-4">
                  <div className="relative h-12 w-16 overflow-hidden rounded-lg">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                </td>
                <td className="py-4 pr-4 text-sm font-medium text-foreground">{project.title}</td>
                <td className="py-4 pr-4 text-sm text-muted-foreground">{project.category}</td>
                <td className="py-4 pr-4">
                  <StatusBadge status={project.status} />
                </td>
                <td className="py-4 pr-4 text-sm text-muted-foreground">{project.updated}</td>
                <td className="py-4 pr-4 text-right">
                  <Link
                    href={`/admin/portfolio/${project.id}/edit`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 hover:bg-accent hover:text-foreground"
                  >
                    <Pencil size={15} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelCard>
  );
};

export default ProjectsTable;