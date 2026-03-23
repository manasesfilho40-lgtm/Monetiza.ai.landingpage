import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CriadorPro - Plataforma All-in-One para Criadores",
  description: "Crie. Cresça. Monetize. A plataforma completa para criadores de conteúdo com ferramentas de IA, estratégias de crescimento e comunidade.",
  keywords: ["CriadorPro", "criadores", "conteúdo", "monetização", "crescimento", "IA"],
  authors: [{ name: "CriadorPro" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CriadorPro - Plataforma All-in-One para Criadores",
    description: "Crie. Cresça. Monetize.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#0D0A08" />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased light`}
        style={{ colorScheme: 'light' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
