import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../lib/fonts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeFitnessON - Sua evolução começa agora",
  description: "Treinos e alimentação personalizada. Disciplina é o que transforma. Treine com propósito. Viva com resultado.",
  keywords: "fitness, treino, alimentação, saúde, academia, exercícios, LifeFitnessON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="/lasy-bridge.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}