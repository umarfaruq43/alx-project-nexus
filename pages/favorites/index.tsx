import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "@/lib/favorites";
import { tmdbAPI } from "@/lib/tmdb";

import { Heart } from "iconsax-reactjs";
import { Movie } from "@/interfaces";
import MovieCard from "@/components/MovieCategories/MovieCard";

export default function FavoritesPage() {
    const router = useRouter();
    const [favorites, setFavorites] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFavorites = async () => {
            const favoriteIds = getFavorites();

            if (favoriteIds.length === 0) {
                setFavorites([]);
                setLoading(false);
                return;
            }

            try {
                // Fetch all movies — getById now returns null on 404
                const moviesPromises = favoriteIds.map((id) =>
                    tmdbAPI.getById(id?.toString())
                );
                const moviesResults = await Promise.all(moviesPromises);

                // Filter out null values (404 or error) and type guard
                const validMovies = moviesResults.filter(
                    (movie): movie is Movie => movie !== null
                );

                // Optional: Clean up invalid IDs from localStorage
                const validIds = validMovies.map((m) => m.id);
                const invalidIds = favoriteIds.filter(
                    (id) => !validIds.includes(id)
                );
                if (invalidIds.length > 0) {
                    invalidIds.forEach((id) => removeFavorite(id));
                    console.log(
                        `Cleaned ${invalidIds.length} invalid favorite(s)`
                    );
                }

                setFavorites(validMovies);
            } catch (err) {
                console.error("Failed to load favorites:", err);
                setFavorites([]);
            } finally {
                setLoading(false);
            }
        };

        loadFavorites();

        // Re-load if favorites change in another tab
        const handleStorageChange = () => loadFavorites();
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    if (loading) {
        return (
            <>
                <div className="min-h-screen pt-32 flex items-center justify-center">
                    <div className="text-3xl text-purple-400">
                        Loading your favorites...
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
                    <Heart size={54} className="text-red-500" variant="Bold" />
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
                            size={120}
                            className="text-gray-700 mx-auto mb-10"
                            variant="Outline"
                        />
                        <h2 className="text-5xl font-bold text-gray-500 mb-6">
                            No favorites yet
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md mx-auto">
                            Click the heart icon on any movie to save it here
                        </p>
                    </div>
                ) : (
                    /* Favorites Grid */
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {favorites.map((movie) => (
                            <div
                                key={movie.id}
                                onClick={() =>
                                    router.push(`/movies/${movie.id}`)
                                }
                                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                            >
                                <MovieCard
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    genre={movie.genre}
                                    poster_path={movie.poster_path}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
