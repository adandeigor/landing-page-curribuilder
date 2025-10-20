import { Star } from "lucide-react";

export function TestimonySection() {

    const testimony = [
        {
            name: "Jean-Baptiste G.",
            role: "Développeur Logiciel Senior",
            testimony: "J'ai adapté mon CV pour trois candidatures ciblées en 15 minutes. J'ai reçu deux entretiens en 72 heures. Une efficacité stratégique sans précédent.",
        },
        {
            name: "Marie C.",
            role: "Data Scientist",
            testimony: "Avant Curribuilder, mon CV était invisible. L'optimisation ATS a fait passer mon score de matching de 45% à 91%. Mon CV se démarque enfin.",
        },
        {
            name: "Luc M.",
            role: "Designer UX/UI",
            testimony: "Les templates sont d'une élégance minimaliste parfaite. Le plus important : l'export PDF est impeccable, sans aucune erreur de formatage pour l'impression.",
        },
        {
            name: "Sophie B.",
            role: "Chef de Projet Certifiée",
            testimony: "L'outil m'a forcée à penser en termes de chiffres. J'ai transformé une simple liste de tâches en réalisations chiffrées. C'est le langage des recruteurs.",
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
                
                {/* En-tête */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        De <span className="bg-primary text-white px-2 py-1 rounded-md">l'outil à l'opportunité</span> —  
                        <span className="block mt-2 text-gray-700">ils ont accéléré leur carrière.</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                        Découvrez comment des professionnels de tous horizons ont transformé leur CV en véritable levier de réussite.
                    </p>
                </div>

                {/* Témoignages */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {testimony.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex items-center gap-1 mb-4 text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-gray-800 text-lg leading-relaxed mb-6 italic font-sans">
                                “{item.testimony}”
                            </p>
                            <div>
                                <p className="font-semibold text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
