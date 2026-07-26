import { PlusCircle, Pencil, Home, User, Settings } from "lucide-react";
import PanelCard from "./PanelCard";

const iconMap = {
  added: PlusCircle,
  updated: Pencil,
  home: Home,
  about: User,
  settings: Settings,
};

const activities = [
  { id: 1, type: "added", action: "New project added — \"E-commerce Dashboard\"", date: "Jul 21, 2026", time: "10:42 AM" },
  { id: 2, type: "updated", action: "Project updated — \"Portfolio Redesign\"", date: "Jul 20, 2026", time: "6:15 PM" },
  { id: 3, type: "home", action: "Home page content edited", date: "Jul 19, 2026", time: "2:03 PM" },
  { id: 4, type: "about", action: "About information updated", date: "Jul 18, 2026", time: "11:27 AM" },
  { id: 5, type: "settings", action: "Site settings changed", date: "Jul 17, 2026", time: "4:50 PM" },
];

const ActivityFeed = () => {
  return (
    <PanelCard title="Recent Activity">
      <div className="flex flex-col gap-4">
        {activities.map((item) => {
          const Icon = iconMap[item.type] ?? Pencil;
          return (
            <div key={item.id} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon size={16} />
              </span>
              <div className="flex flex-1 flex-col gap-1 border-b border-foreground/10 pb-4 last:border-0 last:pb-0">
                <p className="text-sm text-foreground">{item.action}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.date} · {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </PanelCard>
  );
};

export default ActivityFeed;