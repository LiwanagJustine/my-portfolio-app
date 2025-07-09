"use client";

import { useState } from "react";

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
    activeSection: string;
}

export default function Header({ scrollToSection, activeSection }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to check if a link is active
    const isActive = (sectionId: string) => {
        return activeSection === sectionId;
    };

    // Enhanced scroll function with visual feedback
    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);

        // Add visual feedback
        const button = document.querySelector(`[data-section="${sectionId}"]`) as HTMLElement;
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">JL</span>
                        </div>
                        <span className="text-white font-semibold text-lg">Justine Liwanag</span>
                    </div>                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNavClick('home')}
                            className={`cursor-pointer nav-button transition-all duration-300 relative group transform hover:scale-105 ${isActive('home')
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            Home
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${isActive('home')
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></span>
                        </button>
                        <button
                            onClick={() => handleNavClick('about')}
                            className={`cursor-pointer nav-button transition-all duration-300 relative group transform hover:scale-105 ${isActive('about')
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            About
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${isActive('about')
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></span>
                        </button>
                        <button
                            onClick={() => handleNavClick('projects')}
                            className={`cursor-pointer nav-button transition-all duration-300 relative group transform hover:scale-105 ${isActive('projects')
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            Projects
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${isActive('projects')
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></span>
                        </button>
                        <button
                            onClick={() => handleNavClick('skills')}
                            className={`cursor-pointer nav-button transition-all duration-300 relative group transform hover:scale-105 ${isActive('skills')
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            Skills
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${isActive('skills')
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></span>
                        </button>
                        <button
                            onClick={() => handleNavClick('contact')}
                            className={`cursor-pointer nav-button transition-all duration-300 relative group transform hover:scale-105 ${isActive('contact')
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            Contact
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${isActive('contact')
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></span>
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="cursor-pointer md:hidden text-slate-300 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-800/50">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('home')
                                    ? "text-white"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('about')
                                    ? "text-white"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('projects')
                                    ? "text-white"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('skills')
                                    ? "text-white"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('contact')
                                    ? "text-white"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                            >
                                Contact
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="cursor-pointer w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300"
                            >
                                Hire Me
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
