import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curribuilder : CV & LM optimisés pour ATS. Designs modernes par IA.",
  description: "Faites rédiger votre CV par l'IA en 5 min. Passez les systèmes ATS avec des mots-clés ciblés. Templates structurés et lisibilité garantie pour l'emploi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${sourceSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
