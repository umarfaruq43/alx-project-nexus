import Hero from "@/components/common/Hero";
import MovieCarousel from "@/components/MovieCategories/MovieCarousel";
import { Movie } from "@/interfaces";
import { tmdbAPI } from "@/lib/tmdb";
import { useEffect, useState } from "react";

export default function Home() {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([tmdbAPI.getTrending(), tmdbAPI.getPopular()]).then(
            ([trending, popular]) => {
                setTrending(trending);
                setPopular(popular);
                // setLoading(false);
            }
        );
    }, []);

    return (
        <div>
            <Hero />

            <div className="mt-10 relative z-10">
                <MovieCarousel
                    title="Trending"
                    movies={trending?.slice(0, 10)}
                    autoScroll={true}
                />

                <MovieCarousel
                    title="Recommended"
                    movies={popular?.slice(0, 10)}
                    autoScroll={false}
                />
            </div>
        </div>
    );
}
