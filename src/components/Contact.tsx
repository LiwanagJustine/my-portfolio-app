"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);
    const [animatedInputs, setAnimatedInputs] = useState<Set<string>>(new Set());
    const formRef = useRef<HTMLFormElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const EMAILJS_SERVICE_ID = 'service_tzg9ieg';
    const EMAILJS_TEMPLATE_ID = 'template_t8l0gvo';
    const EMAILJS_PUBLIC_KEY = 'wq1jftqFOPkZbhtXr';

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

    // Intersection Observer for scroll animations
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

    // Auto-remove success/error messages after 10 seconds
    useEffect(() => {
        if (submitStatus === 'success' || submitStatus === 'error') {
            const timer = setTimeout(() => {
                setSubmitStatus('idle');
                setErrorMessage('');
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleInputFocus = (fieldName: string) => {
        setAnimatedInputs(prev => new Set([...prev, fieldName]));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name === 'title' ? 'subject' : name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Validate form data
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                throw new Error('Please fill in all required fields');
            }

            console.log('Sending email with data:', {
                service: EMAILJS_SERVICE_ID,
                template: EMAILJS_TEMPLATE_ID,
                formData: formData
            });

            // Method 1: Try sending with form reference (more reliable)
            if (formRef.current) {
                console.log('Trying form reference method...');
                const result = await emailjs.sendForm(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    EMAILJS_PUBLIC_KEY
                );
                console.log('Email sent successfully via form:', result);
            } else {
                // Method 2: Fallback to object method
                console.log('Trying object method...');
                const result = await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        title: formData.subject,    // {{title}} in your template
                        name: formData.name,        // {{name}} in your template
                        email: formData.email,      // {{email}} in your template (for reply-to)
                        message: formData.message,  // {{message}} in your template
                        time: new Date().toLocaleString() // {{time}} in your template
                    }
                );
                console.log('Email sent successfully via object:', result);
            }
            setSubmitStatus('success');

            // Reset form on success
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');

            // Set a more descriptive error message
            if (error instanceof Error) {
                setErrorMessage(error.message);
                console.error('Error message:', error.message);
                console.error('Error stack:', error.stack);
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "justine.liwanag@email.com",
            link: "mailto:justine.liwanag@gmail.com"
        },
        {
            icon: "📱",
            title: "Phone",
            value: "+63 920 701 8305",
            link: "tel:+639207018305"
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "linkedin.com/in/justineliwanag",
            link: "https://linkedin.com/in/justine-liwanag-b2250b25b"
        },
        {
            icon: "📘",
            title: "Facebook",
            value: "facebook.com/justine.liwanag",
            link: "https://www.facebook.com/justine.liwanag.795271"
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 transition-opacity duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'animate-slideInDown' : 'opacity-0 -translate-y-10'
                        }`}>
                        <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-8 backdrop-blur-sm animate-pulse-glow">
                            <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                            Get In Touch
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Let's Work
                            <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent pb-2">
                                Together
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                            Let's create something amazing together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Contact Form */}
                        <div className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'
                            }`}>
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:animate-hoverFloat transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 animate-bounce">
                                        <span className="text-white text-sm">✉️</span>
                                    </span>
                                    Send Message
                                </h3>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className={`transition-all duration-500 ${animatedInputs.has('name') ? 'animate-inputFocus' : ''
                                            }`}>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onFocus={() => handleInputFocus('name')}
                                                required
                                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 hover:border-pink-400/30"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className={`transition-all duration-500 ${animatedInputs.has('email') ? 'animate-inputFocus' : ''
                                            }`}>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => handleInputFocus('email')}
                                                required
                                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 hover:border-pink-400/30"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className={`transition-all duration-500 ${animatedInputs.has('subject') ? 'animate-inputFocus' : ''
                                        }`}>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="title"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            onFocus={() => handleInputFocus('subject')}
                                            required
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 hover:border-pink-400/30"
                                            placeholder="Project inquiry, collaboration, etc."
                                        />
                                    </div>

                                    <div className={`transition-all duration-500 ${animatedInputs.has('message') ? 'animate-inputFocus' : ''
                                        }`}>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => handleInputFocus('message')}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 resize-none hover:border-pink-400/30"
                                            placeholder="Tell me about your project or how we can work together..."
                                        />
                                    </div>

                                    {/* Hidden field for timestamp */}
                                    <input
                                        type="hidden"
                                        name="time"
                                        value={new Date().toLocaleString()}
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`cursor-pointer w-full px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed hover:animate-bounceSubtle ${submitStatus === 'success'
                                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-green-500/25 hover:shadow-green-500/40 animate-successPulse'
                                            : submitStatus === 'error'
                                                ? 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-red-500/25 hover:shadow-red-500/40 animate-errorShake'
                                                : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-pink-500/25 hover:shadow-pink-500/40'
                                            } ${isSubmitting ? 'from-slate-600 to-slate-700' : ''} text-white`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending Message...
                                            </span>
                                        ) : submitStatus === 'success' ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Message Sent Successfully!
                                            </span>
                                        ) : submitStatus === 'error' ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Failed to Send - Try Again
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                            <div className="flex items-center space-x-3">
                                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-green-400 text-sm font-medium">
                                                    Thank you! Your message has been sent successfully. I'll get back to you soon!
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                            <div className="flex items-center space-x-3">
                                                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-red-400 text-sm font-medium">
                                                    {errorMessage || 'Sorry, there was an error sending your message. Please try again or contact me directly.'}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        className={`cursor-pointer block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] group hover:animate-hoverFloat hover:shadow-lg hover:shadow-pink-500/20
                                            ${isVisible ? 'animate-staggerFadeIn' : 'opacity-0'}
                                        `}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-bounceSubtle">
                                                <span className="text-xl">{info.icon}</span>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-white font-semibold mb-1 group-hover:text-pink-400 transition-colors duration-300 group-hover:animate-textGlow">
                                                    {info.title}
                                                </h4>
                                                <p className="text-slate-300 text-sm truncate">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Map and Location */}
                        <div className={`space-y-8 transition-all duration-700 delay-600 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-10'
                            }`}>
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:animate-hoverFloat transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 animate-bounce">
                                        <span className="text-white text-sm">📍</span>
                                    </span>
                                    Find Me Here
                                </h3>

                                {/* Map Container */}
                                <div className="relative rounded-2xl overflow-hidden border border-slate-600/50">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7712.208589375982!2d120.77601846708724!3d14.875445442336911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396513f1bf09655%3A0xf5be7b26d11bb5cf!2sLongos%2C%20Calumpit%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1751986120195!5m2!1sen!2sph"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-600/30">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-xs">📍</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-2">Current Location</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                Based in Longos, Calumpit, Bulacan, Philippines. Available for remote work worldwide
                                                and open to discussing project collaborations across different time zones.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Status */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Available for Projects</h4>
                                        <p className="text-slate-300 text-sm">
                                            Currently accepting new opportunities and collaborations
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                                        <span className="text-xl">⚡</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Quick Response</h4>
                                        <p className="text-slate-300 text-sm">
                                            I typically respond within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
