// components/Sidebar.tsx
import {
    Home,
    Heart,
    Calendar,
    People,
    Message,
    SearchNormal1,
    Setting,
    Logout,
    CloseCircle,
    Login,
} from "iconsax-reactjs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { SidebarProps } from "@/interfaces";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Heart, label: "Trending", href: "/trending" },
    { icon: Heart, label: "Favourites", href: "/favorites" },
];

export default function Sidebar({ closeMobileMenu }: SidebarProps) {
    const { pathname } = useRouter();

    return (
        <aside className="h-full flex flex-col">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3 border-b border-purple-800">
                <span className="text-4xl">WATCH</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-8 space-y-3">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={`
                flex items-center gap-4 px-5 py-4 rounded-xl transition-all font-medium text-lg
                ${
                    isActive
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                        : "text-purple-300 hover:bg-purple-900/50 hover:text-white"
                }
              `}
                        >
                            <item.icon
                                size={26}
                                variant={isActive ? "Bold" : "Outline"}
                            />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Links */}
            {!true && (
                <div className="px-6 pb-6 space-y-3 border-t border-purple-800 pt-6">
                    <button className="flex items-center gap-4 px-5 py-4 text-purple-300 hover:bg-purple-900/50 rounded-xl w-full text-left">
                        <Logout size={26} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            )}

            {true && (
                <Link
                    href={"/login"}
                    className="px-6 pb-6 space-y-3 border-t border-purple-800 pt-6"
                >
                    <button className="flex items-center gap-4 px-5 py-4 text-purple-300 hover:bg-purple-900/50 rounded-xl w-full text-left cursor-pointer">
                        <Login size={26} />
                        <span className="font-medium">Sign In</span>
                    </button>
                </Link>
            )}
            {/* Mobile Close */}
            <button
                onClick={closeMobileMenu}
                className="absolute top-6 right-6 lg:hidden"
            >
                <CloseCircle size={32} className="text-purple-300" />
            </button>
        </aside>
    );
}
