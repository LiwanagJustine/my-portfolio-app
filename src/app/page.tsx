"use client";

import { useState, useEffect } from "react";
import ThreeDBox from "@/components/ThreeDBox";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingPage from "@/components/LoadingPage";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const { theme } = useTheme();

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            setIsScrolling(true);
            setActiveSection(sectionId);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Reset scroll progress after navigation completes
            setTimeout(() => {
                setIsScrolling(false);
                // Recalculate scroll progress after smooth scroll completes
                setTimeout(() => {
                    if (typeof window !== 'undefined') {
                        const scrollTop = window.scrollY;
                        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                        setScrollProgress(Math.min(100, Math.max(0, progress)));
                    }
                }, 100);
            }, 1000);
        }
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const updateScrollProgress = () => {
            if (typeof window !== 'undefined') {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                setScrollProgress(Math.min(100, Math.max(0, progress)));
            }
        };

        const handleScroll = () => {
            if (isScrolling) return;

            // Update scroll progress
            updateScrollProgress();

            // Update active section
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        if (isClient) {
            updateScrollProgress(); // Initial calculation
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', updateScrollProgress);
        }

        return () => {
            if (isClient) {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', updateScrollProgress);
            }
        };
    }, [isScrolling, isClient]);

    return (
        <>
            {/* Loading Page */}
            {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}

            {/* Main Content */}
            <div className={`transition-all duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {/* Scroll Progress Indicator - Only render on client */}
                {isClient && (
                    <div
                        className="scroll-indicator"
                        style={{
                            width: `${scrollProgress}%`
                        }}
                    />
                )}

                {/* Navigation Transition Overlay */}
                <div className={`nav-transition ${isScrolling ? 'active' : ''}`} />

                <div className={`min-h-screen transition-colors duration-500 overflow-hidden ${theme === 'dark'
                    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
                    }`}>
                    <Header scrollToSection={scrollToSection} activeSection={activeSection} />
                    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-0 pt-24">
                            {/* Left Side - Content */}
                            <div className="flex-1 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-2xl mx-auto lg:mx-0">
                                    {/* Hero Badge */}
                                    <div className={`inline-flex items-center px-3 sm:px-4 py-2 border rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm transition-colors duration-300 ${theme === 'dark'
                                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                        : 'bg-blue-50 border-blue-200 text-blue-600'
                                        }`}>
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                        Available for new opportunities
                                    </div>

                                    {/* Main Heading */}
                                    <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        Frontend
                                        <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent pb-2">
                                            Developer
                                        </span>
                                    </h1>

                                    {/* Description */}
                                    <p className={`text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                        }`}>
                                        I craft beautiful, responsive web applications using modern technologies like
                                        <span className="text-blue-400 font-semibold"> Angular</span>,
                                        <span className="text-cyan-400 font-semibold"> React</span>, and
                                        <span className="text-purple-400 font-semibold"> Next.js</span>.
                                    </p>

                                    {/* Key Skills - Mobile optimized */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className={`text-sm sm:text-base transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                                }`}>Clean, Reusable Code</span>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span className={`text-sm sm:text-base transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                                }`}>Modern UI/UX Design</span>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                            <span className={`text-sm sm:text-base transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                                }`}>Fast & Responsive</span>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className={`text-sm sm:text-base transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                                }`}>Cross-Platform Solutions</span>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                        <button
                                            onClick={() => scrollToSection('projects')}
                                            className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                                        >
                                            View My Work
                                        </button>
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className={`cursor-pointer px-6 sm:px-8 py-3 sm:py-4 border-2 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 ${theme === 'dark'
                                                ? 'border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
                                                : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                                }`}
                                        >
                                            Get In Touch
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - 3D Box (Hidden on mobile, visible on lg+) */}
                            <div className="hidden lg:flex flex-1 items-center justify-center lg:pl-12">
                                <div className="relative">
                                    {/* Glow effect behind the cube */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-3xl scale-150"></div>
                                    <ThreeDBox />
                                </div>
                            </div>

                            {/* Mobile-specific decorative elements */}
                            <div className="lg:hidden absolute inset-0 pointer-events-none overflow-hidden">
                                <div className={`absolute top-20 right-4 w-32 h-32 rounded-full blur-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/20'
                                    }`}></div>
                                <div className={`absolute bottom-40 left-4 w-24 h-24 rounded-full blur-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/20'
                                    }`}></div>
                                <div className={`absolute top-1/2 right-1/4 w-16 h-16 rounded-full blur-xl transition-colors duration-500 ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-500/20'
                                    }`}></div>
                            </div>
                        </div>
                    </section>

                    {/* Background decorative elements */}
                    <div className="fixed inset-0 pointer-events-none">
                        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl transition-colors duration-500 ${theme === 'dark' ? 'bg-blue-500/5' : 'bg-blue-500/10'
                            }`}></div>
                        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${theme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-500/10'
                            }`}></div>
                        <div className={`absolute top-3/4 left-1/2 w-48 h-48 rounded-full blur-3xl transition-colors duration-500 ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-500/10'
                            }`}></div>
                    </div>
                    {/* About Section */}
                    <About />

                    {/* Projects Section */}
                    <Projects />

                    {/* Skills Section */}
                    <Skills />

                    {/* Contact Section */}
                    <Contact />

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    );
}
