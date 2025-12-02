import Hero from "@/components/common/Hero";
import MovieCarousel from "@/components/MovieCategories/MovieCarousel";

export default function Home() {
    const trendingMovies = [
        {
            id: 1,
            title: "Tokyo Train",
            year: "2022",
            genre: "Action comedy",
            posterUrl:
                "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMUBj5.jpg",
        },
        {
            id: 2,
            title: "Moonfall",
            year: "2022",
            genre: "Sci-fi",
            posterUrl:
                "https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
        },
        // Add more...
    ];

    const continueWatching = [
        {
            id: 3,
            title: "Stranger Things",
            year: "2024",
            genre: "Horror",
            posterUrl:
                "https://image.tmdb.org/t/p/w500/x2LSR9Fylg5q2ogxIU0z3gBd2fC.jpg",
        },
        // Add more...
    ];
    return (
        <div>
            <Hero />

            <div className="mt-10 relative z-10">
                <MovieCarousel
                    title="Trending"
                    movies={trendingMovies}
                    size="large"
                    autoScroll={true}
                />

                <MovieCarousel
                    title="Continue watching"
                    movies={continueWatching}
                    size="small"
                    autoScroll={false}
                />
            </div>
        </div>
    );
}
