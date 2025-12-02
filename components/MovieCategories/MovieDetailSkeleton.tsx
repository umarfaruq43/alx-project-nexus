import React from "react";

const MovieDetailSkeleton = () => {
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-48 flex flex-col lg:flex-row gap-12">
                    <div className="w-96 h-96 lg:h-[600px] bg-gray-700 rounded-2xl animate-pulse" />

                    <div className="space-y-6 max-w-3xl">
                        <div className="h-20 bg-gray-700 rounded-2xl w-3/4 animate-pulse" />
                        <div className="h-8 bg-gray-700 rounded-full w-1/2 animate-pulse" />
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="h-6 bg-gray-700 rounded animate-pulse w-full"
                                />
                            ))}
                        </div>
                        <div className="flex gap-6 mt-8">
                            <div className="h-16 w-48 bg-gray-700 rounded-full animate-pulse" />
                            <div className="h-16 w-16 bg-gray-700 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetailSkeleton;
