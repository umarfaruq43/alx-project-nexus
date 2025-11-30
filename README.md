# Movie Recommendation App – ALX ProDev Frontend Project

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://your-deployed-link.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Live Demo

[Click here to view the live app](https://your-deployed-link.vercel.app)  
_(Replace with your actual Vercel/Netlify URL after deployment)_

## Overview

A modern, responsive movie recommendation web application built with **Next.js 15 (App Router)** and **TypeScript**. The app integrates with **The Movie Database (TMDB) API** to display trending and recommended movies, features dynamic routing for individual movie pages, and allows users to save their favorite movies using `localStorage`.

This project showcases real-world frontend engineering skills including API integration, dynamic routing, state management, reusable components, performance optimization, and pixel-perfect responsive design.

## Key Features

-   Trending & personalized movie recommendations dashboard
-   Dynamic movie detail pages using Next.js dynamic routes (`/movies/[id]`)
-   Save/remove favorite movies with persistence via `localStorage`
-   Fully responsive layout (mobile, tablet, desktop)
-   Loading skeletons and proper error handling for API requests
-   Smooth hover effects and subtle animations on movie cards
-   Optimized images using Next.js `<Image>` component
-   Clean, conventional git commit history

## Tech Stack

| Technology                       | Purpose                                |
| -------------------------------- | -------------------------------------- |
| Next.js 15 (App Router)          | File-based routing & server components |
| TypeScript                       | Type safety and scalable development   |
| TMDB API                         | Source of movie data and images        |
| Styled Components / Tailwind CSS | Component styling & responsive design  |
| localStorage                     | Client-side persistence of favorites   |
| Zod (optional)                   | Schema validation for API responses    |

## Setup & Installation

```bash
git clone https://github.com/your-username/alx-movie-recommendation.git
cd alx-movie-recommendation

npm install

npm run dev
```
