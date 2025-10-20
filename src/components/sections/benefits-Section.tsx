import { CircleGauge, Clock, Paintbrush, Rocket, ShieldCheck, Target } from "lucide-react";
import { motion } from "framer-motion";
export function BenefitsSection() {
    const benefits = [
    {
        title: "Passage ATS Garanti",
        description: "L'IA cible les mots-clés essentiels et les injecte. Score de matching maximal assuré, votre CV passe les filtres automatiques sans effort.",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
        title: "Rédaction Centrée Résultats",
        description: "Transformez vos tâches en réalisations quantifiables. L'outil vous guide vers des verbes d'action puissants et des métriques de performance chiffrées.",
        icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
        title: "Design Fonctionnel & Épuré",
        description: "Templates modernes testés pour la lisibilité ATS et humaine. Le design minimaliste met votre contenu en lumière. Export PDF haute résolution garanti.",
        icon: <Paintbrush className="w-8 h-8 text-primary" />,
    },
    {
        title: "Vitesse Stratégique",
        description: "Créez et adaptez vos candidatures ciblées en quelques minutes. Accélérez votre rythme de postulation sans sacrifier la qualité ou la mise en page.",
        icon: <CircleGauge className="w-8 h-8 text-primary" />,
    }
];




    return (
        <section className="relative bg-white max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10 shadow-md shadow-gray-200 rounded-lg mt-20">
            <div>
                <div className="flex flex-row item-center justify-center max-w-7xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-regular text-center ">Devenez le <span className="text-light p-1 bg-primary rounded-bl-lg rounded-tr-lg">candidat sélectionné</span>. Votre avantage ne se discute pas, il <span className="text-primary">est automatisé</span>.</h1>
                </div>
                <div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={`p-6 flex flex-col gap-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: index * 0.2, duration: 0.5 }
                                    }
                                }}
                            >
                                <div>
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                <p className="text-gray-600 font-light text-md">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}