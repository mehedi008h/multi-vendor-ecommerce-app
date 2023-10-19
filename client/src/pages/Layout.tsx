import { Outlet } from "react-router-dom";
import { Container } from "../components/common";
import { Navbar } from "../components/navbar";

const Layout = () => {
    return (
        <Container>
            {/* navbar  */}
            <Navbar />
            {/* outlet  */}
            <div className="w-full px-8 py-2">
                <Outlet />
            </div>
        </Container>
    );
};

export default Layout;
