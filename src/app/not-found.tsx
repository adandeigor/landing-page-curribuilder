'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Compass, 
  Rocket, 
  MapPin, 
  ArrowLeft,
  Zap 
} from "lucide-react";
import { Button } from "@/components/utils/button";

export default function NotFound() {
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--color-light)] via-white to-[var(--color-yellow)]/10 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-primary)]/10 rounded-full"
          variants={floatVariants as any}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-16 h-16 bg-[var(--color-yellow)]/20 rounded-full"
          variants={floatVariants as any}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full"
          variants={floatVariants as any}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <motion.div 
          className="flex flex-col-reverse md:flex-row justify-between gap-12 lg:gap-20 items-center min-h-[70vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Content */}
          <motion.div variants={itemVariants as any} className="text-center lg:text-left">
            {/* Main Title */}
            <motion.div 
              variants={itemVariants as any}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center">
                <Compass className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <span className="text-[var(--color-primary)] font-semibold text-lg tracking-wide">
                ERREUR 404
              </span>
            </motion.div>

            {/* Hero Text */}
            <motion.h1 
              variants={itemVariants as any}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-[var(--color-dark)]">Erreur de</span>{" "}
              <span className="px-4 py-2 bg-[var(--color-yellow)] text-[var(--color-dark)] rounded-bl-3xl rounded-tr-3xl inline-block">
                Trajectoire
              </span>
              <span className="text-[var(--color-primary)] block mt-2">(404)</span>
            </motion.h1>

            {/* Exact Phrase */}
            <motion.p 
              variants={itemVariants as any}
              className="font-sans text-xl md:text-2xl font-light text-[var(--color-dark)] mb-8 max-w-2xl leading-relaxed"
            >
              Le chemin n'est pas clair,{" "}
              <span className="font-semibold text-[var(--color-primary)]">
                mais votre carrière l'est.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div 
              variants={itemVariants as any}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              
              <Button
                size="large"
                variant="outline"
                color="primary"
                onClick={() => router.push('/')}
                icon={<ArrowLeft className="w-5 h-5" />}
                className="flex items-center gap-2 px-6 flex-row"
              >
                
                Page d'accueil
              </Button>
            </motion.div>            
          </motion.div>

          {/* Right: Illustration */}
          <motion.div 
            variants={itemVariants as any}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated Rocket */}
              <div
                className="relative z-10"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-yellow)]/20 rounded-3xl backdrop-blur-xl border border-[var(--color-primary)]/20 p-8 flex items-center justify-center">
                  <Rocket className="w-32 h-32 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
              </div>

              {/* Orbit Path */}
              <svg 
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 320"
              >
                <motion.circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#orbitGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="880"
                  strokeDashoffset="880"
                  animate={{ 
                    strokeDashoffset: 0 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                <defs>
                  <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-yellow)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Lost Path Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Compass className="w-6 h-6 text-red-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          variants={itemVariants as any}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 pt-12 border-t border-[var(--color-primary)]/10"
        >
          <p className="text-sm text-[var(--color-dark)]/60">
            Besoin d'aide ? Contactez-nous sur{" "}
            <a href="mailto:support@curribuilder.com" className="text-[var(--color-primary)] hover:underline">
              support@curribuilder.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}