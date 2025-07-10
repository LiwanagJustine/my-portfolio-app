"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
    const [isClient, setIsClient] = useState(false);
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

    // Fix hydration by ensuring client-side only rendering of dynamic content
    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleDescription = (projectId: number) => {
        setExpandedDescriptions(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectId)) {
                newSet.delete(projectId);
            } else {
                newSet.add(projectId);
            }
            return newSet;
        });
    };

    const truncateDescription = (description: string, maxLength: number = 150) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength).trim() + '...';
    };

    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "Modern admin dashboard for e-commerce platform with real-time analytics, inventory management, and order tracking.",
            image: "/api/placeholder/400/300",
            category: "nextjs",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
            featured: true
        },
        {
            id: 2,
            title: "Risk Management App",
            description: "A clean, responsive Risk Management App built to help users track, assess, and manage risks with ease. Designed with a user-first approach, smooth UI, and real-time data visualization for better decision-making.",
            image: "/api/placeholder/400/300",
            category: "angular",
            technologies: ["Angular", "TypeScript", "Angular Material", "CSS", "HTML", "C#.Net", "PostgreSQL"],
            featured: true
        },
        {
            id: 3,
            title: "Equity Management Tool",
            description: "Built intuitive and responsive user interfaces for a web-based equity management platform, enabling HR and finance teams to track, manage, and visualize employee equity plans with clarity and efficiency. Focused on clean UI design, seamless data interaction, and optimized user experience using modern frontend technologies.",
            image: "/api/placeholder/400/300",
            category: "angular",
            technologies: ["Angular", "TypeScript", "Angular Material", "HTML", "CSS", "Node.js", "PostgreSQL"],
            featured: false
        },
        {
            id: 4,
            title: "Personal Web Portfolio - React Version",
            description: "A fully responsive personal portfolio built to showcase my skills, projects, and professional background as a frontend developer. Designed with a clean and modern UI using TailwindCSS, this site introduces who I am, what I do, and how to contact me. Integrated EmailJS to allow seamless form submissions without a backend. Focused on accessibility, smooth user interactions, and mobile-first responsiveness.",
            image: "/api/placeholder/400/300",
            category: "react",
            technologies: ["React", "Tailwind CSS", "TypeScript", "EmailJS"],
            featured: false
        },
        {
            id: 5,
            title: "Personal Web Portfolio - Next.js Version",
            description: "An upgraded version of my personal portfolio using Next.js for improved performance and SEO optimization. Highlights my journey, skillset, and selected works through dynamic routing and a smooth scroll experience. The contact form is powered by EmailJS, enabling direct communication. Built with scalability and maintainability in mind, using TypeScript for type safety and Tailwind for design consistency.",
            image: "/api/placeholder/400/300",
            category: "nextjs",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "CSS Animations", "EmailJS"],
            featured: true
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects', count: projects.length },
        { id: 'react', name: 'React', count: projects.filter(p => p.category === 'react').length },
        { id: 'angular', name: 'Angular', count: projects.filter(p => p.category === 'angular').length },
        { id: 'nextjs', name: 'Next.js', count: projects.filter(p => p.category === 'nextjs').length }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const getTechColor = (tech: string) => {
        const colors: { [key: string]: string } = {
            'React': 'bg-blue-500',
            'Angular': 'bg-red-500',
            'Next.js': 'bg-black',
            'TypeScript': 'bg-blue-400',
            'Tailwind CSS': 'bg-cyan-400',
            'JavaScript': 'bg-yellow-400',
            'CSS': 'bg-blue-600',
            'HTML': 'bg-orange-500',
            'Node.js': 'bg-green-500',
            'MongoDB': 'bg-green-600',
            'Chart.js': 'bg-pink-500',
            'Angular Material': 'bg-indigo-500',
            'RxJS': 'bg-purple-500',
            'Framer Motion': 'bg-violet-500',
            'GSAP': 'bg-green-400',
            'Styled Components': 'bg-pink-400',
            'Netlify': 'bg-teal-500',
            'OpenWeather API': 'bg-blue-300',
            'CSS Animations': 'bg-gradient-to-r from-blue-500 to-purple-500',
            'Next-Auth': 'bg-slate-600'
        };
        return colors[tech] || 'bg-gray-500';
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className={`min-h-screen py-20 transition-all duration-1000 ${theme === 'dark'
                ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
                } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'animate-slideInDown' : 'opacity-0 -translate-y-10'
                        }`}>
                        <div className={`inline-flex items-center px-4 py-2 border rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-pulse-glow ${theme === 'dark'
                            ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                            : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                            }`}>
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            My Work
                        </div>
                        <h2 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Featured
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent pb-2">
                                Projects
                            </span>
                        </h2>
                        <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                            }`}>
                            A collection of projects I've built using modern technologies like React, Angular, and Next.js.
                            Each project demonstrates my skills in creating user-friendly, responsive web applications.
                        </p>
                    </div>

                    {/* Filter Categories */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'
                        }`}>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 hover:animate-bounceSubtle ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 animate-glow'
                                    : (theme === 'dark'
                                        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
                                        : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 hover:text-gray-900 border border-gray-200/50'
                                    )
                                    }`}
                            >
                                {category.name}
                                <span className="ml-2 text-sm opacity-75">({category.count})</span>
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-600 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'
                        }`}>
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                style={{ animationDelay: `${index * 100}ms` }}
                                className={`group relative backdrop-blur-sm border rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-slate-800/50 border-slate-700/50'
                                    : 'bg-white/80 border-gray-200/50'
                                    } ${project.featured ? 'ring-2 ring-cyan-500/20' : ''} 
                                    ${isVisible ? 'animate-staggerFadeIn' : 'opacity-0'}
                                    hover:animate-hoverFloat hover:shadow-2xl hover:shadow-cyan-500/20
                                `}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-glow">
                                        Featured
                                    </div>
                                )}                                {/* Project Image */}
                                <div className={`relative h-48 overflow-hidden ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-slate-700 to-slate-800'
                                    : 'bg-gradient-to-br from-gray-200 to-gray-300'
                                    }`}>
                                    <div className={`absolute inset-0 ${theme === 'dark'
                                        ? 'bg-gradient-to-t from-slate-900/50 to-transparent'
                                        : 'bg-gradient-to-t from-gray-100/50 to-transparent'
                                        }`}></div>
                                    <div className={`flex items-center justify-center h-full ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                                        }`}>
                                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 group-hover:animate-textGlow ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {project.title}
                                    </h3>
                                    <div className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                        }`}>
                                        <p className="mb-2">
                                            {/* Always show truncated version on server, expand only on client */}
                                            {isClient && expandedDescriptions.has(project.id)
                                                ? project.description
                                                : truncateDescription(project.description)
                                            }
                                        </p>
                                        {/* Only show read more button on client side and if description is long */}
                                        {isClient && project.description.length > 150 && (
                                            <button
                                                onClick={() => toggleDescription(project.id)}
                                                className={`cursor-pointer text-xs font-medium transition-colors duration-300 hover:underline ${theme === 'dark'
                                                    ? 'text-cyan-400 hover:text-cyan-300'
                                                    : 'text-cyan-600 hover:text-cyan-700'
                                                    }`}
                                            >
                                                {expandedDescriptions.has(project.id) ? 'Read less' : 'Read more'}
                                            </button>
                                        )}
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={tech}
                                                style={{ animationDelay: `${techIndex * 50}ms` }}
                                                className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getTechColor(tech)} 
                                                    group-hover:animate-staggerBounce transition-transform duration-200 hover:scale-110`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className={`text-center mt-16 transition-all duration-700 delay-800 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className={`backdrop-blur-sm border rounded-2xl p-8 max-w-2xl mx-auto hover:animate-hoverFloat transition-all duration-300 ${theme === 'dark'
                            ? 'bg-slate-800/50 border-slate-700/50'
                            : 'bg-white/80 border-gray-200/50 shadow-lg shadow-gray-200/20'
                            }`}>
                            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                Interested in working together?
                            </h3>
                            <p className={`mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                }`}>
                                I&apos;m always open to discussing new opportunities and exciting projects.
                                Let&apos;s create something amazing together!
                            </p>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }}
                                className="cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:animate-bounceSubtle"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
