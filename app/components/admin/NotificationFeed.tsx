import { Bell, Mail, Layers, Settings, PlusCircle } from "lucide-react";
import PanelCard from "./PanelCard";

const iconMap = {
  message: Mail,
  portfolio: Layers,
  settings: Settings,
  project: PlusCircle,
};

const notifications = [
  { id: 1, type: "message", text: "New contact message from Sarah Lopez", time: "12 min ago", unread: true },
  { id: 2, type: "project", text: "New project \"SaaS Landing Page\" added", time: "2 hrs ago", unread: true },
  { id: 3, type: "portfolio", text: "Portfolio content updated", time: "1 day ago", unread: false },
  { id: 4, type: "settings", text: "Site settings updated", time: "2 days ago", unread: false },
];

const NotificationFeed = () => {
  return (
    <PanelCard title="Notifications" icon={Bell} actionLabel="View All" actionHref="/admin/notifications">
      <div className="flex flex-col gap-3">
        {notifications.map((item) => {
          const Icon = iconMap[item.type] ?? Bell;
          return (
            <div
              key={item.id}
              className={`
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-foreground/10
                px-4
                py-3
                ${item.unread ? "bg-accent/5" : "bg-transparent"}
              `}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon size={16} />
              </span>
              <div className="flex-1">
                <p className="text-sm text-foreground">{item.text}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.time}</p>
              </div>
              {item.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />}
            </div>
          );
        })}
      </div>
    </PanelCard>
  );
};

export default NotificationFeed;