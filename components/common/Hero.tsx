// import Image from "next/image";
// import { Play, Heart } from "iconsax-reactjs";
// import { useState } from "react";

// export default function HeroSection() {
//     const [isFavorite, setIsFavorite] = useState(false);

//     return (
//         <section className="relative  h-[60vh] flex items-end pb-20 overflow-hidden">
//             {/* Background Image with dark overlay */}
//             <Image
//                 src="https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1920&h=1080&fit=crop"
//                 alt="Insider hero background"
//                 fill
//                 className="object-cover"
//                 priority
//             />

//             {/* Content */}
//             <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
//                 <div className="max-w-3xl">
//                     {/* Title */}
//                     <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
//                         Insider
//                     </h1>

//                     {/* Meta info */}
//                     <div className="flex items-center gap-4 text-purple-300 mb-8 text-lg">
//                         <span>2022</span>
//                         <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
//                             Comedy horror
//                         </span>
//                         <span>1 Season</span>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex items-center gap-6">
//                         <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition-all px-10 py-5 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105">
//                             <Play size={28} variant="Bold" />
//                             Watch now
//                         </button>

//                         <button
//                             onClick={() => setIsFavorite(!isFavorite)}
//                             className={`p-4 rounded-full border-2 transition-all transform hover:scale-110 ${
//                                 isFavorite
//                                     ? "bg-purple-600 border-purple-600"
//                                     : "border-white/50 hover:border-white"
//                             }`}
//                         >
//                             <Heart
//                                 size={32}
//                                 variant={isFavorite ? "Bold" : "Outline"}
//                                 className={
//                                     isFavorite
//                                         ? "text-white fill-white"
//                                         : "text-white"
//                                 }
//                             />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom fade */}
//             <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-gray-950 to-transparent" />
//         </section>
//     );
// }

// components/HeroSection.tsx   ← Keep the same file
"use client";

import Image from "next/image";
import { Play, Heart } from "iconsax-reactjs";
import { useState, useEffect } from "react";

const featuredMovies = [
    {
        id: 1,
        title: "Insider",
        year: "2022",
        genre: "Comedy horror",
        seasons: "1 Season",
        image: "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1920&h=1080&fit=crop",
    },
    {
        id: 2,
        title: "Moonfall",
        year: "2022",
        genre: "Sci-fi Action",
        seasons: "Movie",
        image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&h=1080&fit=crop",
    },
    {
        id: 3,
        title: "The Void",
        year: "2024",
        genre: "Horror Thriller",
        seasons: "1 Season",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
    },
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const currentMovie = featuredMovies[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[600px] flex items-end pb-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {featuredMovies.map((movie, index) => (
                    <Image
                        key={movie.id}
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                        priority
                    />
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content  */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="max-w-3xl">
                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                        {currentMovie.title}
                    </h1>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-purple-300 mb-8 text-lg">
                        <span>{currentMovie.year}</span>
                        <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                            {currentMovie.genre}
                        </span>
                        <span>{currentMovie.seasons}</span>
                    </div>

                    {/* Buttons — exactly as you had */}
                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition-all px-10 py-5 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105">
                            <Play size={28} variant="Bold" />
                            Watch now
                        </button>

                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={`p-4 rounded-full border-2 transition-all transform hover:scale-110 ${
                                isFavorite
                                    ? "bg-purple-600 border-purple-600"
                                    : "border-white/50 hover:border-white"
                            }`}
                        >
                            <Heart
                                size={32}
                                variant={isFavorite ? "Bold" : "Outline"}
                                className={
                                    isFavorite
                                        ? "text-white fill-white"
                                        : "text-white"
                                }
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom fade*/}
            {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" /> */}

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {featuredMovies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 ${
                            index === currentIndex
                                ? "w-10 h-2 bg-purple-500 rounded-full"
                                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
