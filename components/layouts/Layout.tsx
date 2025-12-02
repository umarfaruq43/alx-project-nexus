// import Header from "./Header";
// import Footer from "./Footer";
// // eslint-disable-next-line @typescript-eslint/no-empty-object-type
// const Layout: React.FC<React.PropsWithChildren<{}>> = ({
//     children,
//     ...props
// }) => {
//     return (
//         <div {...props}>
//             <Header />
//             <main className="min-h-screen ">{children}</main>
//             <Footer />
//         </div>
//     );
// };

// export default Layout;

// components/Layout.tsx
import { ReactNode, useState } from "react";

import Header from "./Header";
import { Menu } from "iconsax-reactjs";
import Sidebar from "./SideBar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="max-h-screen overflow-hidden min-h-screen bg-gray-950 text-white flex">
            {/* Sidebar – Desktop (always visible), Mobile (hidden by default) */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-purple-950 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Sidebar closeMobileMenu={() => setSidebarOpen(false)} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <main className="flex-1 pb-10 h-full overflow-auto">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
