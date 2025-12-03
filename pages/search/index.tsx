// pages/search.tsx
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import { tmdbAPI } from "@/lib/tmdb";
import { Movie } from "@/interfaces";
import MovieCard from "@/components/MovieCategories/MovieCard";

export default function SearchPage() {
    const router = useRouter();
    const { q } = router.query;

    const [query, setQuery] = useState((q as string) || "");
    const [results, setResults] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    // Debounced search
    const searchMovies = useCallback(async (searchTerm: string) => {
        if (!searchTerm.trim()) {
            setResults([]);
            setHasSearched(false);
            return;
        }

        setLoading(true);
        setHasSearched(true);

        const movies = await tmdbAPI.search(searchTerm); // ← Now 100% safe
        setResults(movies);
        setLoading(false);
    }, []);
    // Trigger search when URL query changes
    useEffect(() => {
        if (q) {
            setQuery(q as string);
            searchMovies(q as string);
        }
    }, [q, searchMovies]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    const clearSearch = () => {
        setQuery("");
        setResults([]);
        setHasSearched(false);
        router.push("/search");
    };

    return (
        <>
            <div className="min-h-screen pt-32 px-6 lg:px-10 pb-20">
                {/* Search Bar */}
                <form
                    onSubmit={handleSearch}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="relative">
                        <SearchNormal1
                            size={28}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-purple-400"
                        />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search movies, series..."
                            className="w-full pl-20 pr-20 py-6 bg-gray-900/80 backdrop-blur border border-purple-800 rounded-2xl text-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
                            autoFocus
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={clearSearch}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                <CloseCircle size={32} />
                            </button>
                        )}
                    </div>
                </form>

                {/* Results */}
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="text-3xl text-purple-400">
                                Searching...
                            </div>
                        </div>
                    ) : hasSearched && results.length === 0 ? (
                        <div className="text-center py-32">
                            <SearchNormal1
                                size={100}
                                className="text-gray-700 mx-auto mb-8"
                            />
                            <h2 className="text-4xl font-bold text-gray-500 mb-4">
                                No results found
                            </h2>
                            <p className="text-xl text-gray-400">
                                Try searching for "Avengers", "Dune", or
                                "Stranger Things"
                            </p>
                        </div>
                    ) : results.length > 0 ? (
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
                                Results for "
                                <span className="text-purple-400">{query}</span>
                                "
                            </h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                                {results.map((movie) => (
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
                        </>
                    ) : (
                        <div className="text-center py-32">
                            <SearchNormal1
                                size={100}
                                className="text-gray-700 mx-auto mb-8"
                            />
                            <h2 className="text-4xl font-bold text-gray-500">
                                Start searching
                            </h2>
                            <p className="text-xl text-gray-400 mt-4">
                                Type any movie or series name above
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
