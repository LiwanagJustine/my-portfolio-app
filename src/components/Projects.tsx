"use client";

import { useState, useEffect, useRef } from "react";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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

    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "Modern admin dashboard for e-commerce platform with real-time analytics, inventory management, and order tracking.",
            image: "/api/placeholder/400/300",
            category: "react",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
            image: "/api/placeholder/400/300",
            category: "angular",
            technologies: ["Angular", "TypeScript", "Angular Material", "RxJS"],
            featured: true
        },
        {
            id: 3,
            title: "Restaurant Website",
            description: "Responsive restaurant website with online reservation system, menu showcase, and customer reviews.",
            image: "/api/placeholder/400/300",
            category: "nextjs",
            technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
            featured: false
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Personal portfolio website with interactive animations, project showcase, and contact form integration.",
            image: "/api/placeholder/400/300",
            category: "react",
            technologies: ["React", "GSAP", "Styled Components", "Netlify"],
            featured: false
        },
        {
            id: 5,
            title: "Weather App",
            description: "Real-time weather application with geolocation, 7-day forecast, and beautiful weather animations.",
            image: "/api/placeholder/400/300",
            category: "angular",
            technologies: ["Angular", "TypeScript", "OpenWeather API", "CSS Animations"],
            featured: false
        },
        {
            id: 6,
            title: "Blog Platform",
            description: "Full-stack blog platform with markdown support, comment system, and author management.",
            image: "/api/placeholder/400/300",
            category: "nextjs",
            technologies: ["Next.js", "React", "MongoDB", "Next-Auth"],
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
            className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 transition-opacity duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'animate-slideInDown' : 'opacity-0 -translate-y-10'
                        }`}>
                        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm animate-pulse-glow">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            My Work
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Featured
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent pb-2">
                                Projects
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
                                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
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
                                className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300
                                    ${project.featured ? 'ring-2 ring-cyan-500/20' : ''} 
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
                                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                    <div className="flex items-center justify-center h-full text-slate-400">
                                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 group-hover:animate-textGlow">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

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
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto hover:animate-hoverFloat transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Interested in working together?
                            </h3>
                            <p className="text-slate-300 mb-6">
                                I'm always open to discussing new opportunities and exciting projects.
                                Let's create something amazing together!
                            </p>
                            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:animate-bounceSubtle">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
