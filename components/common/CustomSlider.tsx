"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { CustomSliderProps } from "@/interfaces";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

const CustomSlider: React.FC<CustomSliderProps> = ({
    children,
    autoScroll = false,
    delay = 4000,
}) => {
    const plugins = [];
    if (autoScroll) plugins.push(Autoplay({ delay, stopOnInteraction: false }));

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, plugins);

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollState = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateScrollState();
        emblaApi.on("select", updateScrollState);
        emblaApi.on("reInit", updateScrollState);
    }, [emblaApi, updateScrollState]);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    return (
        <div className="relative w-full overflow-hidden embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {React.Children.map(children, (child) => (
                        <div className="embla__slide min-w-full">{child}</div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            {canScrollPrev && (
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 isCentered top-1/2 -translate-y-1/2 bg-black/50 text-white  rounded-full hover:bg-black/70"
                >
                    <ArrowLeft2 />
                </button>
            )}

            {/* Right Arrow */}
            {canScrollNext && (
                <button
                    onClick={scrollNext}
                    className="absolute right-4  isCentered top-1/2 -translate-y-1/2 bg-black/50 text-white size-5.5 rounded-full hover:bg-black/70"
                >
                    <ArrowRight2 size={14} />
                </button>
            )}
        </div>
    );
};

export default CustomSlider;
