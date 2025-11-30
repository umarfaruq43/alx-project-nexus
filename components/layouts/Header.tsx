import { useState } from "react";
import Link from "next/link";
import { Add, Menu } from "iconsax-reactjs";
import Image from "next/image";
import Button from "../common/Button";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { title: "Home", href: "/" },
        { title: "Discover", href: "/discover" },
        { title: "Movie Release", href: "/release" },
        { title: "Forum", href: "/forum" },
        { title: "About", href: "/about" },
    ];

    return (
        <nav className="w-full  text-white inset-0 bg-linear-to-b from-black via-black/70 to-transparent  fixed top-0 left-0 z-50 border-b-red-400 border-b max-h-fit">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    width={100}
                    height={14}
                />
                <button className="lg:hidden" onClick={() => setOpen(!open)}>
                    {open ? <Add size={28} /> : <Menu size={28} />}
                </button>

                <div className="hidden text-sm lg:flex text-gray-100 gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="hover:text-blue-400 transition"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className=" gap-3 ml-6  hidden text-sm lg:flex ">
                    <Button
                        label="Sign up"
                        className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
                    />
                    <Button className=" py-2 rounded-lg bg-green-500  hover:bg-green-500/80 transition px-6">
                        Login
                    </Button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-black p-6 z-40 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col gap-6 mt-10 text-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="hover:text-blue-400 transition"
                            onClick={() => setOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <button className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
                        Sign up
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
