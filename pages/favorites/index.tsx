import MovieCard from "@/components/MovieCategories/MovieCard";
import { Heart } from "iconsax-reactjs";
import { useState, useEffect } from "react";

// Mock favorites — later this will come from API or localStorage
const mockFavorites = [
    {
        id: 5,
        title: "Moonfall",
        year: "2022",
        genre: "Sci-fi",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
    },
    {
        id: 6,
        title: "House of Gucci",
        year: "2021",
        genre: "Drama",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/vWtVXWykc8y4qW9ihN3lvW4Ng3.jpg",
    },
    {
        id: 7,
        title: "Life in Paris",
        year: "2023",
        genre: "Documentary series",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/6ke5q2zL3W3Tj0x5dMxin3w8Q2X.jpg",
    },
    {
        id: 8,
        title: "Tokyo Train",
        year: "2022",
        genre: "Action comedy",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMUBj5.jpg",
    },
];

export default function Favorites() {
    const [favorites, setFavorites] = useState(mockFavorites || []);
    const [loading, setLoading] = useState(true);

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <>
                <div className="min-h-screen pt-32 px-6 lg:px-10">
                    <div className="h-16 bg-gray-700 rounded-2xl w-80 animate-pulse mb-12" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="bg-gray-800 rounded-2xl h-96 animate-pulse"
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="min-h-screen pt-5 px-6 lg:px-10 pb-20">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12">
                    <Heart
                        size={48}
                        className="text-purple-500"
                        variant="Bold"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        My Favorites
                    </h1>
                    <span className="text-2xl text-purple-400 font-medium">
                        ({favorites.length})
                    </span>
                </div>

                {/* Empty State */}
                {favorites.length === 0 ? (
                    <div className="text-center py-32">
                        <Heart
                            size={100}
                            className="text-gray-700 mx-auto mb-8"
                            variant="Outline"
                        />
                        <h2 className="text-4xl font-bold text-gray-500 mb-4">
                            No favorites yet
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md mx-auto">
                            Start adding movies you love by clicking the heart
                            button
                        </p>
                    </div>
                ) : (
                    /* Grid of Favorites */
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {favorites?.map((movie, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 relative"
                            >
                                <MovieCard {...movie} size="large" />
                                {/* Optional: Remove button on hover */}
                                {/* <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                                    <button className="px-8 py-4 bg-red-600 hover:bg-red-500 rounded-full font-bold text-lg">
                                        Remove
                                    </button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
