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

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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

            setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling) return;

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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolling]);

    return (
        <>
            {/* Loading Page */}
            {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}

            {/* Main Content */}
            <div className={`transition-all duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {/* Scroll Progress Indicator */}
                <div
                    className="scroll-indicator"
                    style={{
                        width: `${typeof window !== 'undefined' ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0}%`
                    }}
                />

                {/* Navigation Transition Overlay */}
                <div className={`nav-transition ${isScrolling ? 'active' : ''}`} />

                <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
                    <Header scrollToSection={scrollToSection} activeSection={activeSection} />
                    <section id="home" className="container mx-auto px-6 lg:px-8 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-0 pt-24">
                            {/* Left Side - Content */}
                            <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
                                <div className="max-w-2xl">
                                    {/* Hero Badge */}
                                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                        Available for new opportunities
                                    </div>

                                    {/* Main Heading */}
                                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                        Frontend
                                        <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent pb-2">
                                            Developer
                                        </span>
                                    </h1>

                                    {/* Description */}
                                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                        I craft beautiful, responsive web applications using modern technologies like
                                        <span className="text-blue-400 font-semibold"> Angular</span>,
                                        <span className="text-cyan-400 font-semibold"> React</span>, and
                                        <span className="text-purple-400 font-semibold"> Next.js</span>.
                                    </p>

                                    {/* Key Skills */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="text-slate-300">Clean, Reusable Code</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span className="text-slate-300">Modern UI/UX Design</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                            <span className="text-slate-300">Fast & Responsive</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-slate-300">Cross-Platform Solutions</span>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => scrollToSection('projects')}
                                            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                                        >
                                            View My Work
                                        </button>
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="cursor-pointer px-8 py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50"
                                        >
                                            Get In Touch
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - 3D Box */}
                            <div className="flex-1 flex items-center justify-center lg:pl-12">
                                <div className="relative">
                                    {/* Glow effect behind the cube */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-3xl scale-150"></div>
                                    <ThreeDBox />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Background decorative elements */}
                    <div className="fixed inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
