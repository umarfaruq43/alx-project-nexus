import Header from "./Header";
import Footer from "./Footer";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const Layout: React.FC<React.PropsWithChildren<{}>> = ({
    children,
    ...props
}) => {
    return (
        <div {...props}>
            <Header />
            <main className="min-h-screen ">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
