// components/MovieCarousel.tsx
import { cn } from "@/lib/utilities";

import MovieCard from "./MovieCard";
import CustomSlider from "../common/CustomSlider";

interface Movie {
    id: number;
    title: string;
    year: string;
    genre: string;
    posterUrl: string;
}

interface MovieCarouselProps {
    title: string;
    movies: Movie[];
    size?: "small" | "large";
    autoScroll?: boolean;
}

export default function MovieCarousel({
    title,
    movies,
    size = "large",
    autoScroll = true,
}: MovieCarouselProps) {
    return (
        <section className="px-6 lg:px-10 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">{title}</h2>

            {/* <CustomSlider autoScroll={autoScroll} delay={5000}>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className={cn(
                            "px-3",
                            size === "small"
                                ? "embla__slide min-w-[200px]"
                                : "embla__slide min-w-[280px]"
                        )}
                    >
                        <MovieCard {...movie} size={size} />
                    </div>
                ))}
            </CustomSlider> */}

            <CustomSlider
                autoScroll={autoScroll}
                delay={5000}
                slidesToShow={size === "small" ? 6 : 5}
                gap={24}
            >
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} size={size} />
                ))}
            </CustomSlider>
        </section>
    );
}
