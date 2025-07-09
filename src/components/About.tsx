"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className={`min-h-screen py-20 transition-all duration-1000 ${theme === 'dark'
                    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
                } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'animate-slideInDown' : 'opacity-0 -translate-y-10'
                        }`}>
                        <div className={`inline-flex items-center px-4 py-2 border rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-pulse-glow ${theme === 'dark'
                                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                                : 'bg-purple-50 border-purple-200 text-purple-600'
                            }`}>
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            About Me
                        </div>
                        <h2 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Passionate About
                            <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent pb-2">
                                Creating Excellence
                            </span>
                        </h2>
                        <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                            }`}>
                            I'm Justine Liwanag, a dedicated frontend developer who transforms ideas into engaging digital experiences
                            using cutting-edge technologies and agile methodologies.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Personal Info */}
                        <div className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'
                            }`}>
                            <div className={`backdrop-blur-sm border rounded-2xl p-8 hover:animate-hoverFloat transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/20'
                                    : 'bg-white/80 border-gray-200/50 hover:shadow-lg hover:shadow-purple-500/10'
                                }`}>
                                <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 animate-bounce">
                                        <span className="text-white text-sm">👨‍💻</span>
                                    </span>
                                    My Journey
                                </h3>
                                <p className={`leading-relaxed mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                    }`}>
                                    As a frontend developer, I specialize in creating intuitive, responsive, and performant web applications.
                                    My passion lies in bridging the gap between design and functionality, ensuring every user interaction
                                    is meaningful and delightful.
                                </p>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { name: 'Angular', color: 'bg-red-500' },
                                        { name: 'React', color: 'bg-blue-500' },
                                        { name: 'Next.js', color: 'bg-black' },
                                        { name: 'TypeScript', color: 'bg-blue-400' },
                                        { name: 'Tailwind CSS', color: 'bg-cyan-400' },
                                        { name: 'Node.js', color: 'bg-green-500' }
                                    ].map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                            className={`flex items-center space-x-3 hover:animate-bounceSubtle transition-all duration-200 ${isVisible ? 'animate-staggerFadeIn' : 'opacity-0'
                                                }`}
                                        >
                                            <div className={`w-3 h-3 ${skill.color} rounded-full animate-pulse`}></div>
                                            <span className={`font-medium transition-colors duration-200 ${theme === 'dark'
                                                    ? 'text-slate-300 hover:text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                                }`}>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Agile Methodology */}
                        <div className={`space-y-8 transition-all duration-700 delay-600 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-10'
                            }`}>
                            <div className={`backdrop-blur-sm border rounded-2xl p-8 hover:animate-hoverFloat transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-green-500/20'
                                    : 'bg-white/80 border-gray-200/50 hover:shadow-lg hover:shadow-green-500/10'
                                }`}>
                                <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 animate-bounce" style={{ animationDelay: '200ms' }}>
                                        <span className="text-white text-sm">⚡</span>
                                    </span>
                                    Agile Frontend Development
                                </h3>
                                <p className={`leading-relaxed mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                    }`}>
                                    As a frontend developer, I leverage agile methodologies to deliver user-centric interfaces efficiently.
                                    My approach emphasizes rapid prototyping, iterative UI development, and continuous user feedback integration.
                                </p>

                                {/* Agile Process */}
                                <div className="space-y-4">
                                    {[
                                        {
                                            number: 1,
                                            title: 'Sprint Planning & UI Design',
                                            description: 'Breaking UI features into user stories and creating component mockups',
                                            gradient: 'from-blue-500 to-purple-500'
                                        },
                                        {
                                            number: 2,
                                            title: 'Component-Driven Development',
                                            description: 'Building reusable components in short sprints using React/Angular',
                                            gradient: 'from-purple-500 to-pink-500'
                                        },
                                        {
                                            number: 3,
                                            title: 'Iterative Development & Refinement',
                                            description: 'Continuous code improvement, feature enhancement, and UI polish in each sprint',
                                            gradient: 'from-pink-500 to-cyan-500'
                                        },
                                        {
                                            number: 4,
                                            title: 'Review & Launch',
                                            description: 'Final code review, cross-browser testing, and project delivery',
                                            gradient: 'from-cyan-500 to-green-500'
                                        }
                                    ].map((step, index) => (
                                        <div
                                            key={step.number}
                                            style={{ animationDelay: `${index * 150}ms` }}
                                            className={`flex items-start space-x-4 hover:animate-bounceSubtle transition-all duration-200 ${isVisible ? 'animate-staggerFadeIn' : 'opacity-0'
                                                }`}
                                        >
                                            <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse`}>
                                                <span className="text-white text-xs font-bold">{step.number}</span>
                                            </div>
                                            <div>
                                                <h4 className={`font-semibold mb-1 hover:animate-textGlow transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                    }`}>{step.title}</h4>
                                                <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                                                    }`}>{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-800 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'
                        }`}>
                        {[
                            { number: '2+', label: 'Years Experience', gradient: 'from-blue-400 to-purple-500' },
                            { number: '10+', label: 'Projects Completed', gradient: 'from-purple-400 to-pink-500' },
                            { number: '10+', label: 'Technologies', gradient: 'from-pink-400 to-cyan-500' },
                            { number: '100%', label: 'Client Satisfaction', gradient: 'from-cyan-400 to-green-500' }
                        ].map((stat, index) => (
                            <div
                                key={stat.label}
                                style={{ animationDelay: `${index * 100}ms` }}
                                className={`text-center hover:animate-hoverFloat transition-all duration-300 ${isVisible ? 'animate-staggerFadeIn' : 'opacity-0'
                                    }`}
                            >
                                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 pb-1 leading-tight hover:animate-textGlow`}>
                                    {stat.number}
                                </div>
                                <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                                    }`}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
