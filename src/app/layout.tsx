import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORTEX - Soluções Tecnológicas para Sua Empresa",
  description: "Transformamos sua empresa com automação de processos, integração de sistemas e inteligência artificial. Aumente eficiência e economize recursos com nossas soluções tecnológicas.",
  keywords: ["CORTEX", "automação", "integração de sistemas", "inteligência artificial", "desenvolvimento de software", "chatbots", "tecnologia", "eficiência"],
  authors: [{ name: "CORTEX" }],
  openGraph: {
    title: "CORTEX - Soluções Tecnológicas",
    description: "Soluções tecnológicas inteligentes para transformar sua empresa",
    url: "https://CORTEX.com.br",
    siteName: "CORTEX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CORTEX - Soluções Tecnológicas",
    description: "Soluções tecnológicas inteligentes para transformar sua empresa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
