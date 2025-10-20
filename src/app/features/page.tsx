import { Button } from "@/components/utils/button";
import { FileText, Search, Zap, Edit3, Palette, Download, Rocket } from "lucide-react";

export default function FeaturesPage() {
    const features = [
        {
            title: "Moteur d'Optimisation ATS",
            subtitle: "Le Passeport Automatique",
            description: "N'ayez plus peur des filtres de tri. Notre algorithme analyse en temps réel les exigences de l'offre d'emploi. Il vous suggère d'inclure les mots-clés de compétences (hard & soft skills) indispensables pour garantir un taux de matching maximal.",
            icon: <Search className="w-12 h-12 text-primary" />
        },
        {
            title: "Rédaction Assistée par IA",
            subtitle: "Le Copywriter Ciselé",
            description: "L'IA n'écrit pas à votre place, elle optimise votre impact. Pour chaque section, l'assistant propose des formulations basées sur l'industrie et le poste ciblé avec des verbes d'action puissants.",
            icon: <FileText className="w-12 h-12 text-primary" />
        },
        {
            title: "Analyse Mots-Clés Ciblés",
            subtitle: "Focus laser",
            description: "Collez l'URL ou la description de l'offre d'emploi. Curribuilder isole les termes critiques que l'ATS et le recruteur recherchent, vous assurant de n'omettre aucune information vitale.",
            icon: <Zap className="w-12 h-12 text-primary" />
        },
        {
            title: "Éditeur WYSIWYG Fluide",
            subtitle: "Le Contrôle Total",
            description: "Visualisez en temps réel l'impact de chaque modification sur votre document final pendant que vous saisissez vos informations. L'expérience What You See Is What You Get élimine les frustrations.",
            icon: <Edit3 className="w-12 h-12 text-primary" />
        },
        {
            title: "Templates d'Élite & Structurés",
            subtitle: "Le Design qui délivre",
            description: "Galerie de designs professionnels, modernes et minimalistes. Chaque template est testé pour la lisibilité humaine et la conformité ATS. Options Premium pour vous démarquer.",
            icon: <Palette className="w-12 h-12 text-primary" />
        },
        {
            title: "Export PDF Haute Qualité",
            subtitle: "L'Intégrité du Document",
            description: "Générez un fichier PDF haute résolution optimisé pour l'impression et les plateformes en ligne. Garantie zéro défaut de formatage, quelle que soit la liseuse.",
            icon: <Download className="w-12 h-12 text-primary" />
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-primary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        La Technologie qui vous fait <span className="text-dark p-1 bg-yellow rounded-lg">gagner.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-0">
                        Découvrez l'ensemble des fonctionnalités stratégiques de Curribuilder : de l'optimisation ATS à l'export haute fidélité. 
                        <strong className="block mt-4">Chaque outil est conçu pour l'efficacité, pas l'effort.</strong>
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="w-24 h-24 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <h4 className="text-lg font-semibold text-primary mb-4">{feature.subtitle}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Stop aux Processus <span className="text-primary">Inefficaces.</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Adoptez la <strong className="text-primary">Stratégie Curribuilder</strong>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                Avant Curribuilder
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-semibold">•</span>
                                    J'écris en décrivant mes tâches
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-semibold">•</span>
                                    Mon CV est rejeté par un filtre ATS
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-semibold">•</span>
                                    La mise en page prend des heures
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary text-white rounded-3xl p-8 lg:p-12 shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                Après Curribuilder
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-light font-semibold">•</span>
                                    J'optimise mes résultats
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-light font-semibold">•</span>
                                    Je passe les filtres avec un score de 90%+
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-light font-semibold">•</span>
                                    L'édition est instantanée
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Prêt à activer votre <span className="text-primary">avantage compétitif</span> ?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-2xl mx-auto">
                        <Button 
                            size="large" 
                            className="w-full sm:w-auto"
                            icon={<Rocket className="w-5 h-5 mr-2" />}
                        >
                            Démarrer l'Optimisation Gratuite
                        </Button>
                        <Button variant="outline" size="large">
                            Voir la démo
                        </Button>
                    </div>
                    <p className="text-lg text-gray-600 italic">
                        <em>Découvrez notre technologie sans engagement. Vous avez tout à gagner.</em>
                    </p>
                </div>
            </section>
        </div>
    );
}