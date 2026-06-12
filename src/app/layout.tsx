import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "Luh Moura | Estética Avançada",
  description: "Sistema de gestão e acompanhamento estético.",
  openGraph: {
    title: "Luh Moura | Estética Avançada",
    description: "Sistema de gestão e acompanhamento estético.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Luh Moura Estética Avançada" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
