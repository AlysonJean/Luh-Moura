import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LogoMark } from "@/components/logo";

type MarketingNavProps = {
  label: string;
  ctaHref: string;
  ctaLabel: string;
};

export function MarketingNav({ label, ctaHref, ctaLabel }: MarketingNavProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(90%,1200px)]">
      <div className="glass-card px-8 py-4 rounded-[2rem] flex items-center justify-between border-primary/10 bg-white/70">
        <Link href="/" className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <div className="flex items-center gap-3">
          <LogoMark className="h-9 w-9" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground">{label}</span>
        </div>
        <Link href={ctaHref} className="px-5 py-2 rounded-xl bg-foreground text-background font-medium text-[9px] uppercase tracking-widest transition-all hover:bg-muted shadow-lg shadow-foreground/10">
          {ctaLabel}
        </Link>
      </div>
    </nav>
  );
}
