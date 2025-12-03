// lib/favorites.ts
export const getFavorites = (): number[] => {
    if (typeof window === "undefined") return [];
    const favs = localStorage.getItem("favorites");
    return favs ? JSON.parse(favs) : [];
};

export const addFavorite = (movieId: number) => {
    const favs = getFavorites();
    if (!favs.includes(movieId)) {
        localStorage.setItem("favorites", JSON.stringify([...favs, movieId]));
    }
};

export const removeFavorite = (movieId: number) => {
    const favs = getFavorites();
    localStorage.setItem(
        "favorites",
        JSON.stringify(favs.filter((id) => id !== movieId))
    );
};

export const isFavorite = (movieId: number): boolean => {
    return getFavorites().includes(movieId);
};

export const toggleFavorite = (movieId: number) => {
    if (isFavorite(movieId)) {
        removeFavorite(movieId);
    } else {
        addFavorite(movieId);
    }
};
