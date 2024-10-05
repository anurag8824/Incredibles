import { Outlet, Link } from "react-router-dom";
import React from "react";
import NewSideBar from "./NewSideBar";

const Layout = () => {


    return (
        <>
            <div className="flex mt-20 h-screen">
                {/* sidebar */}

                <div>
                    <NewSideBar />
                </div>




                {/* Main content area */}
                <div className="flex-grow ml-64">
                    {/* Navbar */}
                    {/* <header className="bg-white  fixed w-full z-10 top-0 left-0">
                        <div className="max-w-7xl mx-auto py-4 px-4">
                            <h1 className="text-xl font-bold">IncrediblesDeals</h1>
                        </div>
                    </header> */}

                    {/* Content area for rendering components via Outlet */}
                    <div className="m-4 ">
                        <Outlet />
                    </div>
                </div>



            </div>
        </>
    )
};

export default Layout;
