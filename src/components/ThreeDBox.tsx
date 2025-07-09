export default function ThreeDBox() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div style={{ perspective: "1200px" }}>
                <div
                    className="relative w-[300px] h-[300px]"
                    style={{
                        transformStyle: "preserve-3d",
                        animation: "spin3d 10s linear infinite",
                        transform: "rotateX(-24deg) rotateY(-32deg)"
                    }}
                >
                    {/* Front */}
                    <div
                        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-2 border-blue-400/50 flex items-center justify-center text-white text-3xl font-bold text-center p-4 shadow-2xl shadow-blue-500/20 backdrop-blur-sm"
                        style={{
                            transform: "rotateY(0deg) translateZ(150px)",
                            boxSizing: "border-box"
                        }}
                    >
                        <span className="drop-shadow-lg">Frontend Developer</span>
                    </div>
                    {/* Back */}
                    <div
                        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 border-2 border-purple-400/50 flex items-center justify-center text-white text-3xl font-bold text-center p-4 shadow-2xl shadow-purple-500/20 backdrop-blur-sm"
                        style={{
                            transform: "rotateY(180deg) translateZ(150px)",
                            boxSizing: "border-box"
                        }}
                    >
                        <span className="drop-shadow-lg">Clean, Reusable Code</span>
                    </div>
                    {/* Right */}
                    <div
                        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 border-2 border-cyan-400/50 flex items-center justify-center text-white text-3xl font-bold text-center p-4 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm"
                        style={{
                            transform: "rotateY(90deg) translateZ(150px)",
                            boxSizing: "border-box"
                        }}
                    >
                        <span className="drop-shadow-lg">From Design to Code</span>
                    </div>
                    {/* Left */}
                    <div
                        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 border-2 border-pink-400/50 flex items-center justify-center text-white text-3xl font-bold text-center p-4 shadow-2xl shadow-pink-500/20 backdrop-blur-sm"
                        style={{
                            transform: "rotateY(-90deg) translateZ(150px)",
                            boxSizing: "border-box"
                        }}
                    >
                        <span className="drop-shadow-lg">Build with ReactJS / NextJS</span>
                    </div>
                    {/* Top */}
                    <div
                        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-green-600 via-green-700 to-green-800 border-2 border-green-400/50 flex items-center justify-center text-white text-3xl font-bold text-center p-4 shadow-2xl shadow-green-500/20 backdrop-blur-sm"
                        style={{
                            transform: "rotateX(90deg) translateZ(150px)",
                            boxSizing: "border-box"
                        }}
                    >
                        <span className="drop-shadow-lg">Fast & Responsive</span>
                    </div>
                    {/* Bottom */}
                    <div
                        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 border-2 border-orange-400/50 flex items-center justify-center text-white text-3xl font-bold text-center p-4 shadow-2xl shadow-orange-500/20 backdrop-blur-sm"
                        style={{
                            transform: "rotateX(-90deg) translateZ(150px)",
                            boxSizing: "border-box"
                        }}
                    >
                        <span className="drop-shadow-lg">Build Modern Websites</span>
                    </div>
                </div>
            </div>
            <style>
                {`
                @keyframes spin3d {
                    0% { transform: rotateX(-24deg) rotateY(-32deg); }
                    100% { transform: rotateX(336deg) rotateY(328deg); }
                }
                `}
            </style>
        </div>
    );
}