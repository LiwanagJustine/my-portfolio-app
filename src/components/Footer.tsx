"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme } = useTheme();

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "💼",
            url: "https://linkedin.com/in/justine-liwanag-b2250b25b",
            color: "hover:text-blue-400"
        },
        {
            name: "Facebook",
            icon: "📘",
            url: "https://www.facebook.com/justine.liwanag.795271",
            color: "hover:text-blue-500"
        },
        {
            name: "Email",
            icon: "📧",
            url: "mailto:justine.liwanag@gmail.com",
            color: "hover:text-pink-400"
        },
        {
            name: "Phone",
            icon: "📱",
            url: "tel:+639207018305",
            color: "hover:text-green-400"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`border-t backdrop-blur-sm transition-colors duration-300 ${theme === 'dark'
                ? 'bg-slate-950/95 border-slate-800/50'
                : 'bg-white/95 border-gray-200/50'
            }`}>
            <div className="container mx-auto px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4 pb-1 leading-tight">
                                    Justine Liwanag
                                </h3>
                                <p className={`text-sm leading-relaxed max-w-md transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                                    }`}>
                                    Frontend Developer passionate about creating beautiful, functional, and user-friendly web applications.
                                    Let's build something amazing together.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : undefined}
                                        rel={social.name !== "Email" && social.name !== "Phone" ? "noopener noreferrer" : undefined}
                                        className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${theme === 'dark'
                                                ? `bg-slate-800/50 border-slate-700/50 text-slate-400 ${social.color} hover:border-slate-600/50 hover:bg-slate-700/50`
                                                : `bg-gray-100/50 border-gray-200/50 text-gray-500 ${social.color} hover:border-gray-300/50 hover:bg-gray-200/50`
                                            }`}
                                        title={social.name}
                                    >
                                        <span className="text-sm">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>Quick Links</h4>
                            <nav className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`block transition-colors duration-300 text-sm ${theme === 'dark'
                                                ? 'text-slate-400 hover:text-white'
                                                : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>Get In Touch</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-pink-400">📧</span>
                                    <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                                        }`}>justine.liwanag@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">📱</span>
                                    <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                                        }`}>+63 920 701 8305</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-blue-400">📍</span>
                                    <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                                        }`}>Longos, Calumpit, Bulacan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className={`border-t pt-8 transition-colors duration-300 ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'
                        }`}>
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                                }`}>
                                © {currentYear} Justine Liwanag. All rights reserved.
                            </div>

                            {/* Back to Top */}
                            <button
                                onClick={scrollToTop}
                                className={`flex items-center space-x-2 transition-colors duration-300 text-sm group ${theme === 'dark'
                                        ? 'text-slate-400 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <span>Back to Top</span>
                                <span className="text-lg transform group-hover:-translate-y-1 transition-transform duration-300">↑</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            </div>
        </footer>
    );
}
