"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  variant?: "full" | "icon";
}

export function LogoutButton({ variant = "full" }: LogoutButtonProps) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary border border-border transition-colors"
        title="Sair"
        aria-label="Encerrar sessão"
      >
        <LogOut className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-2 py-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors sda-reveal"
    >
      <LogOut className="h-4 w-4" />
      Encerrar Sessão
    </button>
  );
}
