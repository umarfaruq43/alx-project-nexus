import MovieCard from "./MovieCard";
import CustomSlider from "../common/CustomSlider";
import { Movie } from "@/interfaces";
interface MovieCarouselProps {
    title: string;
    movies: Movie[];

    autoScroll?: boolean;
}

export default function MovieCarousel({
    title,
    movies,
    autoScroll = true,
}: MovieCarouselProps) {
    return (
        <section className="px-6 lg:px-10 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">{title}</h2>

            <div className="flex gap-4 flex-wrap justify-between">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </div>
        </section>
    );
}
