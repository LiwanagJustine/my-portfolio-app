"use client";

import { useEffect, useState } from "react";

interface LoadingPageProps {
    onLoadingComplete: () => void;
}

export default function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Simple loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // Start exit animation
                    setTimeout(() => {
                        setIsExiting(true);
                        // Call completion callback after exit animation
                        setTimeout(() => {
                            onLoadingComplete();
                        }, 500);
                    }, 300);
                    return 100;
                }
                return prev + Math.random() * 20 + 10; // Faster loading
            });
        }, 150);

        return () => {
            clearInterval(progressInterval);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center transition-all duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'
            }`}>
            <div className="text-center">
                {/* Simple Logo */}
                <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">JL</span>
                    </div>
                    <h1 className="text-xl font-bold text-white">Justine Liwanag</h1>
                </div>

                {/* Simple Progress Bar */}
                <div className="w-64 mx-auto">
                    <div className="w-full bg-slate-800 rounded-full h-1 mb-4">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-slate-400 text-sm">{Math.round(progress)}%</p>
                </div>
            </div>
        </div>
    );
}
