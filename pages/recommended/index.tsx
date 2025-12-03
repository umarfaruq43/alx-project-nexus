import MovieCard from "@/components/MovieCategories/MovieCard";
import { Movie } from "@/interfaces";
import { tmdbAPI } from "@/lib/tmdb";
import { Heart } from "iconsax-reactjs";
import { useState, useEffect } from "react";

export default function Trending() {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([tmdbAPI.getTrending(), tmdbAPI.getPopular()]).then(
            ([trending, popular]) => {
                setTrending(trending);
                setPopular(popular);
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return (
            <>
                <div className="min-h-screen pt-32 px-6 lg:px-10">
                    <div className="flex items-center gap-4 mb-12">
                        <h1 className="text-5xl font-bold text-white">
                            Trending
                        </h1>
                    </div>

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
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        Recommended
                    </h1>
                </div>

                {/* Empty State */}
                {trending.length === 0 ? (
                    <div className="text-center py-32">
                        <Heart
                            size={100}
                            className="text-gray-700 mx-auto mb-8"
                            variant="Outline"
                        />
                        <h2 className="text-4xl font-bold text-gray-500 mb-4">
                            No Recommended Movies
                        </h2>
                    </div>
                ) : (
                    /* Grid of Favorites */
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {trending?.map((movie, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 relative"
                            >
                                <MovieCard {...movie} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
