import { FileText, Search, Palette, Brush, Zap, Download, Briefcase, Headphones, MessageSquare, BarChart, HardHat, CheckCircle, Sliders } from "lucide-react";

// Les icônes utilisées sont remplacées ou sélectionnées pour leur pertinence
const features = [
    // Core - IA & Efficacité
    { label: "Optimisation ATS", icon: <Search className="w-6 h-6" /> }, // L'essence du produit
    { label: "Rédaction Assistée par IA", icon: <FileText className="w-6 h-6" /> }, // La fonction d'aide
    { label: "Analyse Mots-Clés Ciblés", icon: <Zap className="w-6 h-6" /> }, // Le moteur de l'IA
    
    // Core - UX & Qualité
    { label: "Éditeur WYSIWYG Fluide", icon: <Sliders className="w-6 h-6" /> }, // Le cœur de l'UX (Zone A & B)
    { label: "Templates d'Élite", icon: <CheckCircle className="w-6 h-6" /> }, // La qualité visuelle et professionnelle
    { label: "Export PDF Haute Qualité", icon: <Download className="w-6 h-6" /> }, // Le livrable final (F5)
];

export function FeatureSection() {
    return (
        <section className="bg-light py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header aligné sur la voix de marque */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        L'avantage technique est <span className="text-dark p-1 bg-yellow rounded-lg">désormais votre</span>.
                    </h2>
                    <p className="text-lg font-sans text-gray-600 max-w-3xl mx-auto">
                        Des fonctionnalités conçues pour transformer votre effort en précision stratégique et vous faire gagner le temps des processus inutiles.
                    </p>
                </div>

                {/* Features Grid - Adapté à 6 éléments (3x2 ou 6x1 pour mobile) */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-6 rounded-2xl hover:bg-primary/5 hover:border-primary/20 border border-gray-100 transition-all duration-300 h-full"
                        >
                            <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                                {/* Utilisation de l'icône dans la Feature */}
                                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 text-center leading-tight group-hover:text-primary transition-colors">
                                {feature.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}