// app/loading.tsx
const Loading = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">

      {/* Ghost watermark, consistent with the rest of the site */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading font-black text-9xl uppercase text-foreground/5">
          Loading
        </span>
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-foreground/10" />
          <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin" />
          <span className="h-2 w-2 rounded-full bg-accent" />
        </div>

        {/* Label */}
        <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Please Wait
        </p>
      </div>
    </div>
  );
};

export default Loading;