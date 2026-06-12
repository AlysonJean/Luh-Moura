import Image from "next/image";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-10 w-10" }: LogoMarkProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/brand/logo-mark.png"
        alt="Luh Moura"
        fill
        sizes="160px"
        className="object-contain logo-shadow"
        priority
      />
    </span>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  tagline?: boolean;
};

export function Logo({ className = "", markClassName = "h-10 w-10", wordmarkClassName = "h-6", tagline = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      <div className="flex flex-col items-start gap-1.5">
        <span className={`relative inline-block aspect-[1400/242] ${wordmarkClassName}`}>
          <Image
            src="/brand/logo-wordmark.png"
            alt="Luh Moura"
            fill
            sizes="240px"
            className="object-contain object-left logo-shadow"
            priority
          />
        </span>
        {tagline && (
          <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-foreground/70">
            Estética Avançada
          </span>
        )}
      </div>
    </div>
  );
}
