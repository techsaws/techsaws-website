interface TransparentVideoProps {
  src: string;
  className?: string;
  videoClassName?: string;
}

export function TransparentVideo({
  src,
  className,
  videoClassName,
}: TransparentVideoProps) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <video
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-screen ${videoClassName ?? ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="TechSaws"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
