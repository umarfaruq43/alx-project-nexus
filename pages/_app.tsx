import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("/sw.js");
            });
        }
    }, []);

    return (
        <main className={inter.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    );
}
