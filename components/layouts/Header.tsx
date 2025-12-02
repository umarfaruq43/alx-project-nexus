import Image from "next/image";
import { Menu, SearchNormal1 } from "iconsax-reactjs";
import { useRouter } from "next/router";

interface HeaderProps {
    toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    const router = useRouter();
    return (
        <header className="bg-gray-950 border-b border-purple-900 px-6 py-4 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button onClick={toggleSidebar} className="lg:hidden">
                <Menu size={28} className="text-purple-300" />
            </button>

            {/* Tabs */}
            <div className="hidden md:flex items-center gap-10">
                {/* {["Movies", "Series", "Documentaries"].map((tab) => (
                    <button
                        key={tab}
                        className={`font-medium transition-colors ${
                            tab === "Movies"
                                ? "text-white"
                                : "text-purple-400 hover:text-white"
                        }`}
                    >
                        {tab}
                    </button>
                ))} */}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
                <button
                    onClick={() => router.push("/search")}
                    className="relative text-purple-300 hover:text-white transition"
                >
                    <SearchNormal1 size={24} />
                </button>

                {!true && (
                    <Image
                        src="/avatar.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                )}
                {true && (
                    <div className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => router.push("/login")}
                            className="text-purple-300 hover:text-white"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => router.push("/signup")}
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-bold"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
