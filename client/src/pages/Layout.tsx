import { Outlet } from "react-router-dom";
import { Container } from "../components/common";
import { Navbar } from "../components/navbar";

const Layout = () => {
    return (
        <Container>
            {/* navbar  */}
            <Navbar />
            {/* outlet  */}
            <div>
                <Outlet />
            </div>
        </Container>
    );
};

export default Layout;
