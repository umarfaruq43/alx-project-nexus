import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/common/Hero";
import Autoplay from "@/node_modules/embla-carousel-autoplay/esm/components/Autoplay";
import useEmblaCarousel from "@/node_modules/embla-carousel-react/esm/components/useEmblaCarousel";
import React, { useCallback } from "react";
import CustomSlider from "@/components/common/CustomSlider";
import MovieCompany from "@/components/MovieCategories/MovieCompany";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    const slides = [
        {
            title: "Star Wars: The Force Awakens",
            desc: "As a new threat to the galaxy rises, Rey, Finn, Han Solo and Chewbacca search for the one hope of restoring peace.",
            image: "/images/star_war.webp",
        },
        {
            title: "The Manipulated",
            desc: "Mild-mannered Tae Jung is wrongfully imprisoned for a heinous crime. He soon discovers that a mysterious figure named Yo Han orchestrated his downfall. Fueled by vengeance, Tae Jung sets out to make Yo Han pay.",
            image: "/images/manipulated.jpg",
        },
        {
            title: "Third Slide Demo",
            desc: "Easily add more slides to this hero carousel.",
            image: "/images/soul.webp",
        },
    ];
    return (
        <div>
            <Hero slides={slides} />

            <MovieCompany />
        </div>
    );
}
