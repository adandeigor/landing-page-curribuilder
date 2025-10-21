'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  FileText,
  Search,
  Download,
  Briefcase,
  BarChart,
  Target,
  CheckCircle,
  Brain,
  Shield
} from "lucide-react";
import { Button } from "@/components/utils/button";

export function FeaturesHeroSection() {
  const router = useRouter();

  const featuresBenefits = [
    { 
      label: "100% ATS Compatible", 
      icon: <Shield className="w-5 h-5" />,
      description: "Passe tous les filtres automatiques"
    },
    { 
      label: "Export HD", 
      icon: <Download className="w-5 h-5" />,
      description: "PDF et Word haute fidélité"
    },
    { 
      label: "Optimisation IA", 
      icon: <Brain className="w-5 h-5" />,
      description: "Mots-clés intelligents"
    },
  ];

  // Animation variants for benefits
  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-[var(--color-light)] py-12 md:py-20 my-5">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text + CTA */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[var(--color-primary)]">La Technologie</span>{" "}
              qui vous fait{" "}
              <span className="px-2 py-1 bg-[var(--color-yellow)] text-[var(--color-dark)] rounded-bl-xl rounded-tr-xl">
                gagner.
              </span>
            </motion.h1>
            <motion.p 
              className="font-sans text-lg md:text-xl font-light text-[var(--color-dark)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Découvrez l'ensemble des fonctionnalités stratégiques de Curribuilder : 
              de l'<span className="font-semibold">optimisation ATS</span> à l'<span className="font-semibold">export haute fidélité</span>.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div 
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              size="large"
              variant="filled"
              color="primary"
              onClick={() => router.push('/features')}
            >
              Explorer Toutes les Fonctionnalités
            </Button>
          </motion.div>
        </div>

        {/* Right Section: Image and Benefits */}
        <div className="relative flex justify-center items-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-yellow)]/5 to-[var(--color-light)]/20 rounded-xl" />

          {/* Image Container */}
          <div className="relative z-10">
            <svg width="0" height="0">
              <defs>
                <clipPath id="semiCircleClip" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 H1 V0.8 C1,0.8 0.5,1 0,0.8 V0 Z" />
                </clipPath>
              </defs>
            </svg>
            <Image
              src={'/img/girl1.webp'}
              alt="Features Hero Illustration"
              height={500}
              width={500}
              className="rounded-xl object-cover shadow-2xl"
              style={{ clipPath: 'url(#semiCircleClip)' }}
            />
            {/* SVG Wave Decoration */}
            <svg
              className="absolute bottom-0 left-0 right-0"
              height="80"
              viewBox="0 0 400 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="semiCircleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0 80 C100 0, 300 0, 400 80 H0 Z"
                fill="url(#semiCircleGradient)"
              />
            </svg>
          </div>

          {/* Animated Benefits Cards */}
          <div className="absolute inset-0 flex flex-col justify-between py-8 px-4">
            {featuresBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-md border border-[var(--color-primary)]/20 rounded-xl p-4 max-w-[220px] flex items-start gap-3 shadow-lg"
                variants={benefitVariants as any}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="flex-shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <span className="font-sans text-sm font-semibold text-[var(--color-dark)] block">
                    {benefit.label}
                  </span>
                  <span className="font-sans text-xs text-[var(--color-dark)]/70">
                    {benefit.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}