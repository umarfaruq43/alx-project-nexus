"use client";

import React, { useCallback } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { InfoCircle, Play } from "iconsax-reactjs";

const HeroSection = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    ]);

    const onNavButtonClick = useCallback(
        (emblaApi: {
            plugins: () => { (): any; new (): any; autoplay: any };
        }) => {
            const autoplay = emblaApi?.plugins()?.autoplay;
            if (!autoplay) return;

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop;

            resetOrStop();
        },
        []
    );

    return (
        <section className="relative h-[70vh] md:h-[90vh] w-full text-white overflow-hidden">
            <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container flex h-full">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="embla__slide relative min-w-full h-full flex items-end pb-[3.5rem]"
                        >
                            {/* Background */}
                            <div className="absolute inset-0 -z-10">
                                <Image
                                    src={slide.image}
                                    alt="Slide Background"
                                    fill
                                    className="object-cover"
                                    priority={i === 0}
                                />
                                <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="px-8 max-w-2xl">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 line-clamp-4">
                                    {slide.title}
                                </h1>
                                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                                    {slide.desc}
                                </p>

                                <div className="flex md:flex-row flex-col gap-4">
                                    <button className="flex items-center gap-2 bg-green-500 text-black font-semibold px-5 py-2 rounded-xl hover:bg-green-400 transition">
                                        <Play size={18} /> Watch Trailer
                                    </button>
                                    <button className="flex items-center gap-2 bg-gray-700/70 px-5 py-2 rounded-xl hover:bg-gray-600/80 transition text-white">
                                        <InfoCircle size={18} /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
