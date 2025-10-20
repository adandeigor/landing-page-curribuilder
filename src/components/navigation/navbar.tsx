'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Animation variants for mobile menu
    const menuVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100,
                damping: 20
            }
        },
        exit: { 
            x: "100%", 
            opacity: 0,
            transition: { 
                duration: 0.3 
            }
        }
    };

    // Animation variants for menu items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <nav className="p-2 bg-white text-dark top-0 sticky z-50 shadow-md">
            <div className="max-w-7xl mx-auto">
                <div className="hidden md:flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-1">
                        <Image src={'/svg/logo.svg'} height={50} width={50} alt="Curribuilder-logo" />
                        <Link href={'/'} className="text-lg md:text-2xl font-bold">Curribuilder</Link>
                    </div>
                    <div className="flex flex-row items-center gap-2 font-sans text-lg">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`mx-2 relative group ${
                                    pathname === item.href
                                        ? "text-primary font-semibold"
                                        : "text-dark hover:text-primary"
                                }`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                                    pathname === item.href ? "scale-x-100" : ""
                                }`}></span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex md:hidden flex-row justify-between items-center px-[25px] py-2">
                    <div>
                        <Image src={'/svg/logo.svg'} height={40} width={40} alt="Curribuilder-logo" />
                    </div>
                    <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-dark hover:text-primary transition-colors duration-200" />
                        ) : (
                            <Menu className="w-6 h-6 text-dark hover:text-primary transition-colors duration-200" />
                        )}
                    </button>
                </div>
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden fixed top-[72px] right-0 w-3/4 max-w-[300px] h-screen bg-white shadow-lg"
                            variants={menuVariants as any}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex flex-col p-4 gap-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        variants={itemVariants}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <Link
                                            href={item.href}
                                            className={`block py-2 px-4 text-lg ${
                                                pathname === item.href
                                                    ? "text-primary font-semibold bg-gray-100 rounded"
                                                    : "text-dark hover:text-primary hover:bg-gray-100 rounded"
                                            } transition-colors duration-200`}
                                            onClick={toggleMobileMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}