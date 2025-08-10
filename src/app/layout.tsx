import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: "Justine Liwanag - Frontend Developer",
    description: "Frontend Developer specializing in React, Angular, and Next.js. Creating beautiful, responsive web applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#0f172a" />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
