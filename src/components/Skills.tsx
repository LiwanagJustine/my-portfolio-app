"use client";

import { useState, useEffect, useRef } from "react";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<'frontend' | 'tools' | 'concepts'>('frontend');
    const [isVisible, setIsVisible] = useState(false);
    const [progressAnimated, setProgressAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Trigger progress bar animations after section becomes visible
                    setTimeout(() => setProgressAnimated(true), 800);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = {
        frontend: {
            title: "Frontend Development",
            icon: "🎨",
            skills: [
                { name: "React", level: 80, color: "from-blue-400 to-blue-600", years: "2+" },
                { name: "Angular", level: 85, color: "from-red-400 to-red-600", years: "2+" },
                { name: "Next.js", level: 80, color: "from-gray-700 to-gray-900", years: "1+" },
                { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700", years: "2+" },
                { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600", years: "2+" },
                { name: "HTML5", level: 95, color: "from-orange-400 to-orange-600", years: "2+" },
                { name: "CSS3", level: 90, color: "from-blue-400 to-blue-600", years: "2+" },
                { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-cyan-600", years: "1+" }
            ]
        },
        tools: {
            title: "Tools & Technologies",
            icon: "🛠️",
            skills: [
                { name: "Git & GitHub", level: 85, color: "from-gray-600 to-gray-800", years: "2+" },
                { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700", years: "2+" },
                { name: "Figma", level: 75, color: "from-purple-400 to-purple-600", years: "1+" },
                { name: "Webpack", level: 70, color: "from-blue-600 to-blue-800", years: "1+" },
                { name: "Vite", level: 80, color: "from-purple-500 to-purple-700", years: "1+" },
                { name: "npm/yarn", level: 85, color: "from-red-500 to-red-700", years: "2+" },
                { name: "Chrome DevTools", level: 90, color: "from-green-400 to-green-600", years: "2+" },
                { name: "Postman", level: 75, color: "from-orange-400 to-orange-600", years: "1+" }
            ]
        },
        concepts: {
            title: "Core Concepts",
            icon: "💡",
            skills: [
                { name: "Responsive Design", level: 95, color: "from-emerald-400 to-emerald-600", years: "2+" },
                { name: "Component Architecture", level: 90, color: "from-blue-400 to-blue-600", years: "2+" },
                { name: "State Management", level: 85, color: "from-purple-400 to-purple-600", years: "1+" },
                { name: "API Integration", level: 80, color: "from-cyan-400 to-cyan-600", years: "1+" },
                { name: "Performance Optimization", level: 75, color: "from-green-400 to-green-600", years: "1+" },
                { name: "Cross-browser Compatibility", level: 85, color: "from-orange-400 to-orange-600", years: "2+" },
                { name: "Accessibility (a11y)", level: 78, color: "from-indigo-400 to-indigo-600", years: "1+" },
                { name: "Version Control", level: 88, color: "from-gray-500 to-gray-700", years: "2+" }
            ]
        }
    };

    const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

    const getSkillDescription = (level: number) => {
        if (level >= 90) return "Expert";
        if (level >= 80) return "Advanced";
        if (level >= 70) return "Intermediate";
        return "Beginner";
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 transition-opacity duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'animate-slideInDown' : 'opacity-0 -translate-y-10'
                        }`}>
                        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8 backdrop-blur-sm animate-pulse-glow">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            Technical Expertise
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            My
                            <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent pb-2">
                                Skills & Expertise
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive overview of my technical skills, tools, and expertise in modern web development.
                            I'm constantly learning and staying up-to-date with the latest technologies.
                        </p>
                    </div>

                    {/* Skill Categories */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'
                        }`}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 hover:animate-bounceSubtle ${activeCategory === category
                                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/25 animate-glow'
                                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
                                    }`}
                            >
                                <span className="text-lg">{skillCategories[category].icon}</span>
                                <span>{skillCategories[category].title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 transition-all duration-700 delay-600 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2 flex items-center">
                                <span className="text-3xl mr-3 animate-bounce">{skillCategories[activeCategory].icon}</span>
                                {skillCategories[activeCategory].title}
                            </h3>
                            <p className="text-slate-400">
                                Click on any skill below to see more details about my experience and proficiency level.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillCategories[activeCategory].skills.map((skill: any, index: number) => (
                                <div
                                    key={skill.name}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    className={`group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]
                                        ${isVisible ? 'animate-staggerFadeIn' : 'opacity-0'}
                                        hover:animate-hoverFloat hover:shadow-lg hover:shadow-green-500/20
                                    `}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300 group-hover:animate-textGlow">
                                                {skill.name}
                                            </h4>
                                            <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full group-hover:animate-bounceSubtle">
                                                {skill.years}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium text-green-400 group-hover:animate-pulse">
                                                {skill.level}%
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                {getSkillDescription(skill.level)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="relative">
                                        <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${progressAnimated ? '' : 'w-0'
                                                    }`}
                                                style={{ width: progressAnimated ? `${skill.level}%` : '0%' }}
                                            >
                                                {/* Shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Summary */}
                    <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-800 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:animate-hoverFloat transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 hover:animate-textGlow">Fast Learner</h3>
                            <p className="text-slate-300 text-sm">
                                Quickly adapt to new technologies and frameworks with a strong foundation in core web development principles.
                            </p>
                        </div>

                        <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:animate-hoverFloat transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-green-500/20">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '200ms' }}>
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 hover:animate-textGlow">Detail Oriented</h3>
                            <p className="text-slate-300 text-sm">
                                Focus on writing clean, maintainable code with attention to performance, accessibility, and user experience.
                            </p>
                        </div>

                        <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:animate-hoverFloat transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '400ms' }}>
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 hover:animate-textGlow">Always Growing</h3>
                            <p className="text-slate-300 text-sm">
                                Continuously learning new technologies and best practices to stay current with industry trends and standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
