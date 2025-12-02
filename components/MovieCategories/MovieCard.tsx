// components/MovieCard.tsx
import Image from "next/image";
import { Heart } from "iconsax-reactjs";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utilities";

import { useRouter } from "next/router";

interface MovieCardProps {
    id: number;
    title: string;
    year: string;
    genre: string;
    posterUrl: string;
    size?: "small" | "large";
}

export default function MovieCard({
    id,
    title,
    year,
    genre,
    posterUrl,
    size = "large",
}: MovieCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();
    // Check localStorage on mount
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(id));
    }, [id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (isFavorite) {
            const newFavorites = favorites.filter(
                (favId: number) => favId !== id
            );
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
        } else {
            localStorage.setItem(
                "favorites",
                JSON.stringify([...favorites, id])
            );
        }
        setIsFavorite(!isFavorite);
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
                src={posterUrl || "/placeholder.jpg"}
                alt={title}
                width={size === "small" ? 192 : 256}
                height={size === "small" ? 288 : 384}
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
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite();
                }}
                className={cn(
                    "absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all",
                    isFavorite
                        ? "bg-purple-600 text-white"
                        : "bg-black/50 text-white hover:bg-white/20"
                )}
            >
                <Heart
                    size={20}
                    variant={isFavorite ? "Bold" : "Outline"}
                    className={isFavorite ? "fill-white" : ""}
                />
            </button>
        </div>
    );
}
