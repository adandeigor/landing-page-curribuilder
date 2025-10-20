import { Rocket } from "lucide-react";
import { Button } from "../utils/button";
import Image from "next/image";

export function ClosingCta() {
    return (
        <section className="bg-gradient-to-r from-primary to-dark py-7 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 text-center lg:text-left">
                
                {/* Contenu gauche */}
                <div className="space-y-8">
                    {/* Titre */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Prêt à transformer votre{" "}
                        <span className="text-dark p-1 bg-yellow rounded-bl-lg rounded-tr-lg">
                            candidature
                        </span>{" "}
                        ?
                    </h2>

                    {/* Texte complémentaire */}
                    <p className="text-lg text-white/80 max-w-xl">
                        Donnez à votre profil le niveau qu’il mérite. En quelques clics, construisez un CV professionnel,
                        optimisé et percutant.
                    </p>

                    {/* CTA */}
                    <div>
                        <Button
                            className="flex items-center justify-center lg:justify-start font-semibold tracking-wide"
                            icon={<Rocket className="w-6 h-6 mr-3" />}
                            size="large"
                            variant="filled"
                            color="light"
                        >
                            Je commence maintenant (c’est gratuit)
                        </Button>
                    </div>
                </div>

                {/* Image droite */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/img/girl5.webp"
                        alt="Candidat prêt à lancer sa carrière"
                        width={600}
                        height={600}
                        className="object-cover rounded-2xl shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
