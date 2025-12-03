// components/MovieCard.tsx
import Image from "next/image";
import { Heart } from "iconsax-reactjs";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utilities";

import { useRouter } from "next/router";
import { Movie } from "@/interfaces";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

export default function MovieCard({
    id,
    title,
    year,
    genre,
    poster_path,
}: Movie) {
    const router = useRouter();

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(isFavorite(id));
    }, [id]);
    const handleHeartClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent going to detail page
        toggleFavorite(id);
        setLiked(!liked);
    };
    return (
        <div
            onClick={() => router.push(`/movies/${id}`)}
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20  w-48 block"
                // size === "small" ? "w-48" : "w-64"
            )}
        >
            <Image
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : "/placeholder.jpg"
                }
                alt={title}
                width={256}
                height={384}
                className="object-cover w-full h-full"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg truncate">{title}</h3>
                <p className="text-sm text-purple-300">
                    {year} | {genre}
                </p>
            </div>

            {/* Heart Button */}
            <button
                onClick={handleHeartClick}
                className="absolute top-3 right-3 p-3 bg-black/70 backdrop-blur rounded-full opacity-100 group-hover:opacity-100 transition-opacity"
            >
                <Heart
                    size={24}
                    variant={liked ? "Bold" : "Outline"}
                    className={
                        liked ? "text-red-500 fill-red-500" : "text-white"
                    }
                />
            </button>
        </div>
    );
}
