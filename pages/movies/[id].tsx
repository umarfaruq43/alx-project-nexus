import Image from "next/image";
import { Play, Heart, Star, Clock, Calendar } from "iconsax-reactjs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MovieCarousel from "@/components/MovieCategories/MovieCarousel";
import MovieDetailSkeleton from "@/components/MovieCategories/MovieDetailSkeleton";
import { tmdbAPI } from "@/lib/tmdb";
import { Movie } from "@/interfaces";

// Mock data (to be replace with real API later)
// const mockMovie = {
//     id: 1,
//     title: "Insider",
//     year: "2022",
//     genre: "Comedy horror",
//     duration: "2h 15min",
//     rating: 8.7,
//     overview:
//         "A group of friends discover a mysterious tunnel that leads to another dimension filled with terrifying creatures and mind-bending horrors. What starts as curiosity quickly turns into a fight for survival in this thrilling comedy-horror series.",
//     posterUrl:
//         "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=800&h=1200&fit=crop",
//     backdropUrl:
//         "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1920&h=1080&fit=crop",
//     cast: ["Tetiana Smith", "John Doe", "Sarah Connor", "Mike Tyson"],
//     director: "Christopher Nolan",
// };

const relatedMovies = [
    {
        id: 10,
        title: "The Void",
        year: "2023",
        genre: "Horror",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/iiXliKn4B7q5nMo5zgX1dOD2V3C.jpg",
    },
    {
        id: 11,
        title: "Portal",
        year: "2024",
        genre: "Sci-fi",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/8Gxv8gSFCQRp8r6dlLlNG7F4n4.jpg",
    },
    {
        id: 12,
        title: "Dark Tunnel",
        year: "2022",
        genre: "Thriller",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO6eZFygLZB4Lw6Db.jpg",
    },
    {
        id: 13,
        title: "Beyond",
        year: "2025",
        genre: "Horror",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8SU1206xQ33.jpg",
    },
    {
        id: 14,
        title: "The Gate",
        year: "2023",
        genre: "Mystery",
        posterUrl:
            "https://image.tmdb.org/t/p/w500/4t0oBnlWQKOa3ND7fPFG6d8GLS.jpg",
    },
];

export default function MovieDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [error, setError] = useState<string | null>(null);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [related, setRelated] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (!id) return;

        const fetchMovie = async () => {
            try {
                const [movieRes, relatedRes] = await Promise.all([
                    tmdbAPI.getById(id as string),
                    fetch(
                        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
                    ).then((r) => r.json()),
                ]);

                setMovie(movieRes);
                setRelated(
                    relatedRes.results.slice(0, 10).map((m: any) => ({
                        id: m.id,
                        title: m.title,
                        year: m.release_date?.split("-")[0] || "N/A",
                        genre: "Movie",
                        poster_path: m.poster_path,
                    }))
                );
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return <MovieDetailSkeleton />;
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-red-500 mb-4">
                        Oops!
                    </h2>
                    <p className="text-xl text-gray-400">{error}</p>
                    <button
                        onClick={() => router.back()}
                        className="mt-8 px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-500 transition"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Backdrop */}
            <section className="relative   flex items-start py-24 overflow-hidden">
                {/* <Image
                    src={movie.backdropUrl}
                    alt=""
                    fill
                    className="object-cover"
                /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" /> */}

                <div className="relative z-10   px-6 lg:px-10 flex flex-col lg:flex-row gap-12">
                    <div className="flex-  shadow-2xl rounded-2xl overflow-hidden border-4 border-purple-600/30">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                            alt={movie?.title || ""}
                            width={500}
                            height={750}
                            className="object-cover"
                        />
                    </div>

                    <div className="text-white max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            {movie?.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-purple-300 mb-8 text-lg">
                            <span className="flex items-center gap-2">
                                <Calendar size={22} /> {movie?.year}
                            </span>
                            <span className="mx-4">•</span>

                            <span className="px-4 py-2 bg-purple-600/30 rounded-full">
                                {movie?.genre}
                            </span>
                            <span className="mx-4">•</span>
                            <span className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full">
                                <Star
                                    size={22}
                                    className="text-yellow-400 fill-yellow-400"
                                />
                                <span className="font-bold">
                                    {movie?.vote_average}
                                </span>
                            </span>
                        </div>

                        <p className="text-lg leading-relaxed mb-10 text-gray-200 max-w-2xl">
                            {movie?.overview}
                        </p>

                        {/* <div className="flex items-center gap-8 mb-12">
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`p-5 rounded-full border-4 transition-all hover:scale-110 ${
                                    isFavorite
                                        ? "bg-purple-600 border-purple-600"
                                        : "border-white/40 hover:border-white"
                                }`}
                            >
                                <Heart
                                    size={40}
                                    variant={isFavorite ? "Bold" : "Outline"}
                                    className={isFavorite ? "fill-white" : ""}
                                />
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Related Movies Carousel */}

            <section className="px-6 lg:px-10  pb-20">
                <h2 className="text-4xl font-bold mb-10 text-white">
                    Related Movies
                </h2>
                <MovieCarousel title="" movies={related} autoScroll={true} />
            </section>
        </>
    );
}
