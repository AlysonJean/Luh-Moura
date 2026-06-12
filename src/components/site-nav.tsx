"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo";

const NAV_LINKS = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/procedimentos", label: "Procedimentos" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/tecnologia", label: "Tecnologia" },
  { href: "/criolipolise-em-casa", label: "Criolipólise em Casa" },
  { href: "/contato", label: "Contato" },
];

type SiteNavProps = {
  restrictedHref: string;
  restrictedLabel: string;
};

export function SiteNav({ restrictedHref, restrictedLabel }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[min(94%,1200px)] sm:w-[min(90%,1200px)]">
      <div className="glass-card px-4 sm:px-8 py-3 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-between border-primary/10 bg-white/70 dark:bg-black/30">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-9 w-9 md:h-11 md:w-11 transition-transform hover:rotate-6 shrink-0" />
          <div className="hidden md:flex flex-col items-start gap-1.5">
            <span className="relative inline-block aspect-[1400/242] h-6">
              <Image src="/brand/logo-wordmark.png" alt="Luh Moura" fill sizes="240px" className="object-contain object-left logo-shadow" priority />
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-foreground/70">Estética Avançada</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-medium uppercase tracking-[0.2em] opacity-80">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors py-2">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={restrictedHref}
            className="hidden md:inline-flex px-6 py-2.5 rounded-xl bg-foreground text-background font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-muted active:scale-95 shadow-lg shadow-foreground/10"
          >
            {restrictedLabel}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 glass-card rounded-[1.5rem] border-primary/10 bg-white/90 dark:bg-black/50 p-4 flex flex-col gap-1 text-[11px] font-medium uppercase tracking-[0.2em]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-foreground/5 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={restrictedHref}
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-foreground text-background text-center font-bold tracking-widest hover:bg-muted transition-colors"
          >
            {restrictedLabel}
          </Link>
        </div>
      )}
    </nav>
  );
}
