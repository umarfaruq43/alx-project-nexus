import { SearchNormal1 as SearchIcon, CloseCircle } from "iconsax-reactjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MovieCard from "@/components/MovieCategories/MovieCard";

const mockSearchResults = [
    {
        id: 101,
        title: "Insider",
        year: "2022",
        genre: "Comedy horror",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/iiXliKn4B7q5nMo5zgX1dOD2V3C.jpg",
    },
    {
        id: 102,
        title: "Moonfall",
        year: "2022",
        genre: "Sci-fi",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
    },
    {
        id: 103,
        title: "The Batman",
        year: "2022",
        genre: "Action",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
        id: 104,
        title: "Dune",
        year: "2021",
        genre: "Sci-fi",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    },
    {
        id: 105,
        title: "Spider-Man: No Way Home",
        year: "2021",
        genre: "Action",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6kN4g.jpg",
    },
];

export default function Search() {
    const router = useRouter();
    const { q } = router.query;

    const [searchQuery, setSearchQuery] = useState((q as string) || "");
    const [results, setResults] = useState(mockSearchResults);
    const [loading, setLoading] = useState(false);

    // Simulate search on query change
    useEffect(() => {
        if (q) {
            setSearchQuery(q as string);
            setLoading(true);
            const timer = setTimeout(() => {
                // In real app: fetch from API with query
                setResults(
                    mockSearchResults.filter((m) =>
                        m.title
                            .toLowerCase()
                            .includes((q as string).toLowerCase())
                    )
                );
                setLoading(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [q]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
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
                        <SearchIcon
                            size={28}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-purple-400"
                        />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search movies, series, actors..."
                            className="w-full pl-20 pr-16 py-6 bg-gray-900/80 backdrop-blur border border-purple-800 rounded-2xl text-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
                            autoFocus
                        />

                        {searchQuery && (
                            <button
                                type="button"
                                onClick={clearSearch}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                <CloseCircle size={28} />
                            </button>
                        )}
                    </div>
                </form>

                {/* Results Header */}
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
                        {searchQuery ? (
                            <>
                                Results for "
                                <span className="text-purple-400">
                                    {searchQuery}
                                </span>
                                "
                            </>
                        ) : (
                            "Search Movies & Series"
                        )}
                    </h1>

                    {loading ? (
                        // Loading Skeleton
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800 rounded-2xl h-96 animate-pulse"
                                />
                            ))}
                        </div>
                    ) : results.length === 0 ? (
                        // Empty State
                        <div className="text-center py-32">
                            <SearchIcon
                                size={100}
                                className="text-gray-700 mx-auto mb-8"
                            />
                            <h2 className="text-4xl font-bold text-gray-500 mb-4">
                                No results found
                            </h2>
                            <p className="text-xl text-gray-400">
                                Try searching for something else
                            </p>
                        </div>
                    ) : (
                        // Results Grid
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                            {results.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="transform transition-all duration-300 hover:scale-105 cursor-pointer"
                                    onClick={() =>
                                        router.push(`/movies/${movie.id}`)
                                    }
                                >
                                    <MovieCard {...movie} size="large" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
