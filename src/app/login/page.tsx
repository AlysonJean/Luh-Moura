"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { LogoMark } from '@/components/logo';

function AutoLogin({ token, phone }: { token: string; phone: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    signIn('credentials', { identifier: phone, token, redirect: false }).then((result) => {
      if (cancelled) return;
      if (result?.error) {
        setError('Link inválido ou expirado. Gere um novo link de acesso.');
      } else {
        router.replace('/portal');
      }
    });

    return () => {
      cancelled = true;
    };
  }, [token, phone, router]);

  if (error) {
    return (
      <div className="text-center space-y-4">
        <p className="text-sm font-bold text-red-500">{error}</p>
        <button
          type="button"
          onClick={() => router.replace('/login')}
          className="text-xs font-black uppercase tracking-widest text-primary underline"
        >
          Voltar ao login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <Loader2 className="h-8 w-8 text-primary animate-spin" />
      <p className="text-sm font-bold text-muted">Entrando...</p>
    </div>
  );
}

function PatientLogin() {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'input' | 'verify'>('input');
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/request-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsapp: phone }),
      });
      const data = await res.json();

      if (data.whatsappLink) {
        setWhatsappLink(data.whatsappLink);
      } else {
        setWhatsappLink(null);
      }
      setStep('verify');
    } catch {
      setError('Não foi possível gerar o link. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'input') {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mx-auto mb-2 ring-4 ring-white shadow-lg shadow-primary/10">
            <Image src="/images/dra-login.webp" alt="Dra. Luh Moura" fill sizes="64px" className="object-cover object-top" />
          </div>
          <h2 className="text-xl font-black tracking-tight">Bem-vinda</h2>
          <p className="text-xs text-muted font-medium">
            Insira seu WhatsApp para receber o link de acesso.
          </p>
        </div>

        <form onSubmit={handleGenerateLink} className="space-y-6">
          <div className="relative group">
            <input
              type="tel"
              placeholder="(31) 90000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full rounded-2xl border border-primary/20 bg-white/50 px-4 py-5 text-xl text-center font-black tracking-widest focus:border-primary focus:ring-8 focus:ring-primary/10 outline-none transition-all placeholder:opacity-30"
              required
            />
          </div>

          {error && <p className="text-center text-xs font-bold text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-primary py-5 px-4 text-xs font-black uppercase tracking-[0.3em] text-foreground shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
          >
            {loading ? 'Gerando...' : 'Gerar Link de Acesso'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-black tracking-tighter">
          {whatsappLink ? 'Link Pronto!' : 'Verifique seu WhatsApp'}
        </h2>
        <p className="text-xs text-muted font-medium leading-relaxed">
          {whatsappLink
            ? 'Clique no botão abaixo para abrir seu WhatsApp e enviar o link para **você mesma**. Depois, basta clicar no link na conversa.'
            : 'Se este número estiver cadastrado, você receberá um link de acesso. Verifique seu WhatsApp.'}
        </p>
      </div>

      <div className="space-y-4">
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-5 px-4 text-xs font-black uppercase tracking-[0.3em] text-white shadow-2xl shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Abrir WhatsApp
          </a>
        )}

        <button
          type="button"
          onClick={() => setStep('input')}
          className="w-full py-2 text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary transition-colors"
        >
          Voltar e alterar número
        </button>
      </div>
    </div>
  );
}

function StaffLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn('credentials', {
      identifier: email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError('E-mail ou senha inválidos.');
    } else {
      router.push('/admin');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-black tracking-tight">Acesso da Equipe</h2>
        <p className="text-xs text-muted font-medium">Entre com seu e-mail e senha cadastrados.</p>
      </div>

      <input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full rounded-2xl border border-primary/20 bg-white/50 px-4 py-4 text-sm text-center font-bold focus:border-primary focus:ring-8 focus:ring-primary/10 outline-none transition-all"
        required
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full rounded-2xl border border-primary/20 bg-white/50 px-4 py-4 text-sm text-center font-bold focus:border-primary focus:ring-8 focus:ring-primary/10 outline-none transition-all"
        required
      />

      {error && <p className="text-center text-xs font-bold text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-foreground py-5 px-4 text-xs font-black uppercase tracking-[0.3em] text-background shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const phone = searchParams.get('phone');
  const [tab, setTab] = useState<'patient' | 'staff'>('patient');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 mesh-bg relative overflow-hidden">
      <Image
        src="/images/auth-bg-texture.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-70 dark:opacity-10 -z-10 pointer-events-none"
      />
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="w-full max-w-md space-y-10 rounded-[2.5rem] glass-card p-10 shadow-2xl border-primary/10 animate-in fade-in zoom-in-95 duration-700">
        <div className="flex flex-col items-center text-center space-y-4">
          <LogoMark className="h-16 w-16 sda-float" />
          <div className="flex flex-col items-center gap-2">
            <span className="relative inline-block h-9 aspect-[1400/242]">
              <Image src="/brand/logo-wordmark.png" alt="Luh Moura" fill sizes="240px" className="object-contain logo-shadow" priority />
            </span>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-black">Estética Avançada</p>
          </div>
        </div>

        {token && phone ? (
          <AutoLogin token={token} phone={phone} />
        ) : (
          <>
            <div className="flex rounded-2xl bg-secondary/30 p-1">
              <button
                type="button"
                onClick={() => setTab('patient')}
                className={`flex-1 rounded-xl py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  tab === 'patient' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                }`}
              >
                Paciente
              </button>
              <button
                type="button"
                onClick={() => setTab('staff')}
                className={`flex-1 rounded-xl py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  tab === 'staff' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                }`}
              >
                Equipe
              </button>
            </div>

            {tab === 'patient' ? <PatientLogin /> : <StaffLogin />}
          </>
        )}

        <div className="pt-4 text-center border-t border-primary/5">
          <p className="text-[9px] text-muted opacity-60 uppercase tracking-[0.3em] font-black">
            Privacidade Garantida & LGPD Compliant
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginContent />
    </Suspense>
  );
}
