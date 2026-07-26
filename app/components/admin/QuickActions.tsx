import Link from "next/link";

const QuickAction = ({ icon: Icon, label, href = "#" }) => {
  return (
    <Link
      href={href}
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-foreground/10
        bg-secondary/30
        px-4
        py-6
        text-center
        transition-colors
        duration-300
        hover:border-accent
        hover:bg-accent/10
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-accent/15
          text-accent
          transition-colors
          duration-300
          group-hover:bg-accent
          group-hover:text-foreground
        "
      >
        <Icon size={20} />
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {label}
      </span>
    </Link>
  );
};

export default QuickAction;