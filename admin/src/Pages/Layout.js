import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* <Header /> */}

            <Outlet />
            {/* <Footer /> */}
        </>
    )
};

export default Layout;
