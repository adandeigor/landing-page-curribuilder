'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Search,
    FileText,
    Zap,
    Edit3,
    Palette,
    Download,
    Rocket
} from "lucide-react";
import { Button } from "@/components/utils/button";

const features = [
    {
        title: "Moteur d'Optimisation ATS",
        subtitle: "Le Passeport Automatique",
        description: "N'ayez plus peur des filtres de tri. Notre algorithme analyse en temps réel les exigences de l'offre d'emploi. Il vous suggère d'inclure les mots-clés de compétences indispensables.",
        icon: Search,
        color: "bg-primary",
        stats: "95%+ de matching"
    },
    {
        title: "Rédaction Assistée par IA",
        subtitle: "Le Copywriter Ciselé",
        description: "L'IA optimise votre impact avec des formulations basées sur l'industrie et le poste ciblé. Verbes d'action puissants garantis.",
        icon: FileText,
        color: "bg-primary",
        stats: "3x plus impactant"
    },
    {
        title: "Analyse Mots-Clés Ciblés",
        subtitle: "Focus laser",
        description: "Collez l'URL de l'offre. Curribuilder isole les termes critiques que l'ATS et le recruteur recherchent instantanément.",
        icon: Zap,
        color: "bg-primary",
        stats: "100% pertinent"
    },
    {
        title: "Éditeur WYSIWYG Fluide",
        subtitle: "Le Contrôle Total",
        description: "Visualisez en temps réel chaque modification. L'expérience What You See Is What You Get élimine toutes les frustrations.",
        icon: Edit3,
        color: "bg-primary",
        stats: "0s de latence"
    },
    {
        title: "Templates d'Élite",
        subtitle: "Le Design qui délivre",
        description: "Designs professionnels testés pour la lisibilité humaine et la conformité ATS. Options Premium pour vous démarquer.",
        icon: Palette,
        color: "bg-primary",
        stats: "50+ templates"
    },
    {
        title: "Export PDF Haute Qualité",
        subtitle: "L'Intégrité du Document",
        description: "PDF haute résolution optimisé pour l'impression et les plateformes. Zéro défaut de formatage garanti.",
        icon: Download,
        color: "bg-primary",
        stats: "4K Résolution"
    }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const featureVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const comparisonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export function ModernFeaturesSection() {
    return (
        <div className="overflow-hidden">
            {/* Features Grid */}
            <section className="relative bg-gradient-to-b from-[var(--color-light)] to-gray-50 py-20">
                <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-dark)] bg-clip-text text-transparent mb-6">
                            Nos Fonctionnalités
                        </h2>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={featureVariants as any}
                                className="group"
                            >
                                <div className="relative bg-white rounded-xl p-4 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col gap-6">
                                    {/* Icon */}
                                    <div className="relative">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative flex flex-col gap-4 flex-grow justify-between">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                            <p className="text-[var(--color-primary)] font-semibold">{feature.subtitle}</p>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-sm font-bold bg-white px-3 py-1 rounded-full text-${feature.color.split('-')[0]}-600 shadow-sm`}>
                                                {feature.stats}
                                            </span>
                                            <Rocket className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="text-center mt-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button size="large" variant="filled" color="primary" className="px-12">
                            Commencer Gratuitement
                        </Button>
                    </motion.div>
                </div>
            </section>          
        </div>
    );
}