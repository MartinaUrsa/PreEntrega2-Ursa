import { Outlet } from "react-router-dom"; // indica que el resto del contenido será el de cada hijo
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import WPLogo from "./WP-logo/WP-logo";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <WPLogo />
            <Footer />
        </div>
    )
}

export default Layout;