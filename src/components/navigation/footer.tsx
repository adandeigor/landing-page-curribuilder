import { 
    Facebook, 
    Twitter, 
    Linkedin, 
    Github, 
    Mail, 
    Phone, 
    MapPin,
    ChevronRight,
    ArrowUp 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12">
                    
                    {/* Logo & Description */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="">
                                <Image src={"/svg/logo.svg"} alt="logo" width={50} height={50}/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Curribuilder</h3>
                                <p className="text-sm text-gray-400">Votre CV optimisé par l'IA</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Créez des CV qui passent les filtres ATS et impressionnent les recruteurs. 
                            Simple, rapide, efficace.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-2">
                            <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Produit</h4>
                        <ul className="space-y-3">
                            {[
                                "Fonctionnalités",
                                "Tarifs", 
                                "Templates",
                                "API",
                                "Sécurité"
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Entreprise */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
                        <ul className="space-y-3">
                            {[
                                "À propos",
                                "Blog", 
                                "Carrières",
                                "Presse",
                                "Contact"
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Support</h4>
                        <ul className="space-y-3">
                            {[
                                "Documentation",
                                "Tutoriels", 
                                "FAQ",
                                "Status",
                                "Support"
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>                
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>&copy; 2025 Curribuilder. Tous droits réservés.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Conditions</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <button className="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 opacity-0 invisible group">
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
        </footer>
    );
}