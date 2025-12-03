"use client";

import Image from "next/image";
import { Play, Heart } from "iconsax-reactjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const featuredMovies = [
    {
        adult: false,
        backdrop_path: "/hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg",
        id: 1062722,
        title: "Frankenstein",
        original_title: "Frankenstein",
        overview:
            "Dr. Victor Frankenstein, a brilliant but egotistical scientist, brings a creature to life in a monstrous experiment that ultimately leads to the undoing of both the creator and his tragic creation.",
        poster_path: "/g4JtvGlQO7DByTI6frUobqvSL3R.jpg",
        media_type: "movie",
        original_language: "en",
        genre_ids: [18, 14, 27],
        popularity: 149.7549,
        release_date: "2025-10-17",
        video: false,
        vote_average: 7.771,
        vote_count: 2034,
    },
    {
        adult: false,
        backdrop_path: "/oIJjO1CvEdTMFNkWfHaV0RB584G.jpg",
        id: 628847,
        title: "Trap House",
        original_title: "Trap House",
        overview:
            "An undercover DEA agent and his partner embark on a game of cat and mouse with an audacious, and surprising group of thieves - their own rebellious teenagers, who have begun robbing from a dangerous cartel, using their parents' tactics and top-secret intel to do it.",
        poster_path: "/ctU9S47MoJDN9CB7SCaitcfyyIu.jpg",
        media_type: "movie",
        original_language: "en",
        genre_ids: [28, 80, 53],
        popularity: 18.2455,
        release_date: "2025-11-14",
        video: false,
        vote_average: 5.5,
        vote_count: 4,
    },
    {
        adult: false,
        backdrop_path: "/m3WlBJJRbFPaut1QS0PbOG8Wezy.jpg",
        id: 1327862,
        title: "Regretting You",
        original_title: "Regretting You",
        overview:
            "Morgan Grant and her daughter Clara explore what's left behind after a devastating accident reveals a shocking betrayal and forces them to confront family secrets, redefine love, and rediscover each other.",
        poster_path: "/z4gVnxTaks3anTycwKjDmvQSuWt.jpg",
        media_type: "movie",
        original_language: "en",
        genre_ids: [10749, 18],
        popularity: 88.774,
        release_date: "2025-10-22",
        video: false,
        vote_average: 7.1,
        vote_count: 121,
    },
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const currentMovie = featuredMovies[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const router = useRouter();

    return (
        <section className="relative h-[600px] flex items-end pb-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {featuredMovies.map((movie, index) => (
                    <Image
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
            <div className="absolute inset-0 bg-black/60" />

            {/* Content  */}
            <div className="relative z-10 max-w-7xl  px-6 lg:px-10">
                <div className="max-w-3xl">
                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                        {currentMovie.title}
                    </h1>

                    <div className="text-purple-300 ">
                        {currentMovie.overview}
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-purple-300 mb-8 text-lg">
                        <span>
                            {currentMovie.release_date?.split("-")?.[0]}
                        </span>
                        {/* <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                            {currentMovie.overview}
                        </span> */}
                    </div>

                    {/* Buttons — exactly as you had */}
                    <div className="flex items-center gap-6">
                        <button
                            className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition-all px-10 py-5 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105"
                            onClick={() =>
                                router.push(`/movies/${currentMovie?.id}`)
                            }
                        >
                            View Details
                        </button>

                        {/* <button
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
                        </button> */}
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
