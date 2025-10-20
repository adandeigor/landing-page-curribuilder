import { Rocket } from "lucide-react";
import { Button } from "../utils/button";
import Image from "next/image";

export function FirstCta() {
    return (
        <section className="bg-primary py-5 lg:py-10 my-6">
            <div className="max-w-[90rem] mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    
                    {/* Image à gauche */}
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/img/girl3.webp"
                            alt="Candidat optimisant son CV"
                            width={400}
                            height={400}
                            className="object-cover rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Contenu à droite */}
                    <div className="text-center lg:text-left space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                            Ne laissez plus votre avenir au hasard.
                            <span className="block text-primary-light mt-3">
                                Prenez le contrôle dès aujourd’hui.
                            </span>
                        </h2>

                        <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                            Transformez votre profil en un CV percutant et professionnel — conçu pour attirer l’attention des recruteurs dès les premières secondes.
                        </p>

                        <Button 
                            className="flex items-center justify-center mx-auto lg:mx-0 font-semibold tracking-wide" 
                            icon={<Rocket className="w-6 h-6 mr-3" />} 
                            size="large" 
                            variant="outline" 
                            color="light"
                        >
                            Commencez votre CV gratuit maintenant
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
