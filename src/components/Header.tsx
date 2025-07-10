"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
    activeSection: string;
}

export default function Header({ scrollToSection, activeSection }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark'
            ? 'bg-slate-950/80 border-slate-800/50'
            : 'bg-white/80 border-gray-200/50'
            }`}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('home')}
                        className="flex items-center space-x-2 cursor-pointer group transition-all duration-300 hover:scale-105"
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                            <span className="text-white font-bold text-sm">JL</span>
                        </div>
                        <span className={`font-semibold text-lg transition-colors duration-300 ${theme === 'dark' ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
                            }`}>Justine Liwanag</span>
                    </button>                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNavClick('home')}
                            className={`cursor-pointer nav-button transition-all duration-300 relative group transform hover:scale-105 ${isActive('home')
                                ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
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
                                ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
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
                                ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
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
                                ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
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
                                ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                }`}
                        >
                            Contact
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${isActive('contact')
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></span>
                        </button>
                    </nav>

                    {/* CTA Button and Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${theme === 'dark'
                                ? 'bg-slate-800/50 hover:bg-slate-700/50 text-yellow-400'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                }`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`cursor-pointer md:hidden transition-colors duration-200 ${theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
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
                    <div className={`md:hidden py-4 border-t transition-colors duration-300 ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'
                        }`}>
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('home')
                                    ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                    : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                    }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('about')
                                    ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                    : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                    }`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('projects')
                                    ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                    : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                    }`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('skills')
                                    ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                    : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                    }`}
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`cursor-pointer transition-colors duration-200 px-2 py-1 text-left ${isActive('contact')
                                    ? (theme === 'dark' ? "text-white" : "text-gray-900")
                                    : (theme === 'dark' ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                    }`}
                            >
                                Contact
                            </button>

                            {/* Mobile Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`flex items-center space-x-2 px-2 py-1 transition-colors duration-200 ${theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {theme === 'dark' ? (
                                    <>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                        </svg>
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                        <span>Dark Mode</span>
                                    </>
                                )}
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
