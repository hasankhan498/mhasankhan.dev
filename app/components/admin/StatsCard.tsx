const StatCard = ({ icon: Icon, label, value, tone = "default" }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-foreground/10
        bg-secondary/30
        p-5
        transition-colors
        duration-300
        hover:border-accent
      "
    >
      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          ${tone === "accent" ? "bg-accent text-foreground" : "bg-accent/15 text-accent"}
        `}
      >
        <Icon size={20} />
      </div>
      <div>
        <p className="font-heading text-2xl font-black text-foreground">{value}</p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;