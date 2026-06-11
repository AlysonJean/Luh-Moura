import type { Metadata } from "next";
import { Inter, Jost, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
      <body className={`${jost.variable} ${inter.variable} ${playfair.variable} font-sans`}>
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
