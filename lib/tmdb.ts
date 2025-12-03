import { Movie } from "@/interfaces";
import axios from "axios";
import { removeFavorite } from "./favorites";

// const tmdb = axios.create({
//     baseURL: "https://api.themoviedb.org/3",
//     params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY },
// });

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
});

export const tmdbAPI = {
    getTrending: async (): Promise<Movie[]> => {
        const res = await tmdb.get("/trending/movie/week");
        return res.data.results.map((m: any) => ({
            id: m.id,
            title: m.title,
            year: m.release_date ? m.release_date.split("-")[0] : "N/A",
            genre: "Action", // You can improve this later with genre mapping
            poster_path: m.poster_path,
            backdrop_path: m.backdrop_path,
            overview: m.overview,
            vote_average: m.vote_average,
        }));
    },

    getPopular: async (): Promise<Movie[]> => {
        const res = await tmdb.get("/movie/popular");
        return res.data.results.map((m: any) => ({
            id: m.id,
            title: m.title,
            year: m.release_date?.split("-")[0] || "N/A",
            genre: "Drama",
            poster_path: m.poster_path,
            backdrop_path: m.backdrop_path,
        }));
    },

    // getById: async (id: string): Promise<Movie> => {
    //     const res = await tmdb.get(`/movie/${id}`);
    //     const m = res.data;
    //     return {
    //         id: m.id,
    //         title: m.title,
    //         year: m.release_date?.split("-")[0] || "N/A",
    //         genre: m.genres?.[0]?.name || "Unknown",
    //         poster_path: m.poster_path,
    //         backdrop_path: m.backdrop_path,
    //         overview: m.overview,
    //         vote_average: m.vote_average,
    //     };
    // },

    getById: async (id: string): Promise<Movie | null> => {
        try {
            const res = await tmdb.get(`/movie/${id}`);
            const m = res.data;

            return {
                id: m.id,
                title: m.title || "Untitled",
                year: m.release_date?.split("-")[0] || "N/A",
                genre: m.genres?.[0]?.name || "Movie",
                poster_path: m.poster_path,
                backdrop_path: m.backdrop_path,
                overview: m.overview || "",
                vote_average: m.vote_average || 0,
            };
        } catch (error: any) {
            if (error.response?.status === 404) {
                console.warn(
                    `Movie ID ${id} not found on TMDB — removing from favorites`
                );
                // Auto-remove invalid ID from favorites
                removeFavorite(Number(id));
                return null;
            }
            console.error("Error fetching movie:", error);
            return null;
        }
    },
    search: async (query: string): Promise<Movie[]> => {
        try {
            const res = await tmdb.get("/search/movie", {
                params: { query: query.trim() },
            });

            // TMDB returns { results: [...] } when successful
            // BUT returns { success: false } when no results or error
            if (!res.data || !res.data.results) {
                return []; // Return empty array safely
            }

            return res.data.results.slice(0, 20).map((m: any) => ({
                id: m.id,
                title: m.title || m.name || "Untitled",
                year:
                    m.release_date?.split("-")[0] ||
                    m.first_air_date?.split("-")[0] ||
                    "N/A",
                genre: "Movie",
                poster_path: m.poster_path,
                overview: m.overview || "",
                vote_average: m.vote_average || 0,
            }));
        } catch (error) {
            console.error("Search failed:", error);
            return []; // Always return array, never crash
        }
    },
};
