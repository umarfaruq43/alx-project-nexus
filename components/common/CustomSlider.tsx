// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// import { CustomSliderProps } from "@/interfaces";
// import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

// const CustomSlider: React.FC<CustomSliderProps> = ({
//     children,
//     autoScroll = false,
//     delay = 4000,
// }) => {
//     const plugins = [];
//     if (autoScroll) plugins.push(Autoplay({ delay, stopOnInteraction: false }));

//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, plugins);

//     const [canScrollPrev, setCanScrollPrev] = useState(false);
//     const [canScrollNext, setCanScrollNext] = useState(false);

//     const updateScrollState = useCallback(() => {
//         if (!emblaApi) return;
//         setCanScrollPrev(emblaApi.canScrollPrev());
//         setCanScrollNext(emblaApi.canScrollNext());
//     }, [emblaApi]);

//     useEffect(() => {
//         if (!emblaApi) return;
//         updateScrollState();
//         emblaApi.on("select", updateScrollState);
//         emblaApi.on("reInit", updateScrollState);
//     }, [emblaApi, updateScrollState]);

//     const scrollPrev = useCallback(
//         () => emblaApi && emblaApi.scrollPrev(),
//         [emblaApi]
//     );
//     const scrollNext = useCallback(
//         () => emblaApi && emblaApi.scrollNext(),
//         [emblaApi]
//     );

//     return (
//         <div className="relative w-full overflow-hidden embla">
//             <div className="embla__viewport" ref={emblaRef}>
//                 <div className="embla__container flex">
//                     {React.Children.map(children, (child) => (
//                         <div className="embla__slide min-w-full">{child}</div>
//                     ))}
//                 </div>
//             </div>

//             {/* Left Arrow */}
//             {canScrollPrev && (
//                 <button
//                     onClick={scrollPrev}
//                     className="absolute left-4 isCentered top-1/2 -translate-y-1/2 bg-black/50 text-white  rounded-full hover:bg-black/70"
//                 >
//                     <ArrowLeft2 />
//                 </button>
//             )}

//             {/* Right Arrow */}
//             {canScrollNext && (
//                 <button
//                     onClick={scrollNext}
//                     className="absolute right-4  isCentered top-1/2 -translate-y-1/2 bg-black/50 text-white size-5.5 rounded-full hover:bg-black/70"
//                 >
//                     <ArrowRight2 size={14} />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default CustomSlider;

"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

interface CustomSliderProps {
    children: ReactNode;
    autoScroll?: boolean;
    delay?: number;
    slidesToShow?: number; // New: how many cards visible at once
    gap?: number; // Gap between cards in px
}

const CustomSlider: React.FC<CustomSliderProps> = ({
    children,
    autoScroll = true,
    delay = 5000,
    slidesToShow = 5,
    gap = 100,
}) => {
    const autoplay = autoScroll
        ? Autoplay({ delay, stopOnInteraction: false })
        : undefined;
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
            dragFree: false,
        },
        autoplay ? [autoplay] : []
    );

    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanPrev(emblaApi.canScrollPrev());
        setCanNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateButtons();
        emblaApi.on("select", updateButtons);
        emblaApi.on("reInit", updateButtons);
    }, [emblaApi, updateButtons]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <div className="relative w-full">
            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div
                    className="flex"
                    style={{
                        gap: `${gap}px`,
                        marginLeft: `-${gap}px`,
                    }}
                >
                    {React.Children.map(children, (child) => (
                        <div
                            className="flex-none pl-6"
                            // style={{
                            //     width: `calc(${
                            //         100 / slidesToShow
                            //     }% - ${gap}px)`,
                            // }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows – only show when needed */}
            {canPrev && (
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-sm transition"
                >
                    <ArrowLeft2 size={24} />
                </button>
            )}

            {canNext && (
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-sm transition"
                >
                    <ArrowRight2 size={24} />
                </button>
            )}
        </div>
    );
};

export default CustomSlider;
