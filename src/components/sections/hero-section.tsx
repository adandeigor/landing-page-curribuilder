'use client'
import { useRouter } from "next/navigation";
import { Button } from "../utils/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Zap,
  Palette,
  FileText,
  Search,
  Download,
  Briefcase,
  Headphones,
  MessageSquare,
  BarChart,
  Rocket,
  Target,
  Brush
} from "lucide-react";

export function HeroSection() {
  const router = useRouter();

  

  const benefits = [
    { label: "Gagnez du temps avec l'IA", icon: <Clock className="w-6 h-6" /> },
    { label: "Augmentez vos chances d'embauche", icon: <Rocket className="w-6 h-6" /> },
    { label: "Personnalisez facilement vos candidatures", icon: <Target className="w-6 h-6" /> },
  ];

  // Animation variants for features
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Animation variants for benefits
  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section className="relative bg-[var(--color-light)] py-12 md:py-20 my-5">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text, Features, Button */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[var(--color-primary)]">Un CV</span>,{" "}
              <span className="px-2 py-1 bg-[var(--color-yellow)] text-[var(--color-dark)] rounded-bl-xl rounded-tr-xl">
                un emploi
              </span>
              . L'IA rédige votre{" "}
              <span className="px-2 py-1 text-white bg-[var(--color-primary)] rounded-bl-xl rounded-tr-xl">
                succès
              </span>.
            </h1>
            <p className="font-sans text-lg md:text-xl font-light text-[var(--color-dark)]">
              Créez des candidatures percutantes en quelques clics. Impact maximal, effort minimal.
            </p>
          </div>

          {/* Features Grid */}


          {/* Button and Subtext */}
          <div className="flex flex-col gap-3">
            <div>
              <Button
                size="large"
                variant="filled"
                color="primary"
                onClick={() => router.push('/')}
              >
                Créer mon CV Gratuit en 5 min
              </Button>
            </div>
            <span className="text-sm font-sans font-light text-[var(--color-dark)]">
              Pas de carte de crédit requise. Modèles modernes et conformes.
            </span>
          </div>
        </div>

        {/* Right Section: Image and Benefits */}
        <div className="relative flex justify-center items-center">
          {/* Linear Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-yellow)]/10 to-[var(--color-light)]/50 rounded-lg" />

          {/* Image with SVG Clip Path */}
          <div className="relative">
            <svg width="0" height="0">
              <defs>
                <clipPath id="semiCircleClip" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 H1 V0.8 C1,0.8 0.5,1 0,0.8 V0 Z" />
                </clipPath>
              </defs>
            </svg>
            <Image
              src={'/img/girl6.webp'}
              alt="Heroes Girl Photo"
              height={500}
              width={500}
              className="rounded-lg object-cover"
              style={{ clipPath: 'url(#semiCircleClip)' }}
            />
            {/* SVG Decoration for Bottom */}
            <svg
              className="absolute bottom-0 left-0 right-0"
              height="80"
              viewBox="0 0 400 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 80 C100 0, 300 0, 400 80 H0 Z"
                fill="url(#semiCircleGradient)"
              />
              <defs>
                <linearGradient id="semiCircleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Benefits with Glassmorphism */}
          <div className="absolute inset-0 flex flex-col justify-between py-8">
            <motion.div
              className="absolute top-0 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-[200px] flex items-center gap-3 text-[var(--color-dark)] shadow-lg"
              variants={benefitVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {benefits[0].icon}
              <span className="font-sans text-base font-medium">{benefits[0].label}</span>
            </motion.div>
            <motion.div
              className="absolute top-1/3 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-[200px] flex items-center gap-3 text-[var(--color-dark)] shadow-lg"
              variants={benefitVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {benefits[1].icon}
              <span className="font-sans text-base font-medium">{benefits[1].label}</span>
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-[200px] flex items-center gap-3 text-[var(--color-dark)] shadow-lg"
              variants={benefitVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {benefits[2].icon}
              <span className="font-sans text-base font-medium">{benefits[2].label}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}