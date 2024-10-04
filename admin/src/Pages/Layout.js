import { Outlet, Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            navigate('/')
        }
    }, [])

    return (
        <>

            <div className="flex mt-20 h-screen">
                {/* sidebar */}

                <aside className="w-64 text-black flex flex-col fixed h-full">
                    <div className="w-64  text-black">


                        {/* Dropdown */}
                        <div>

                            <button

                                className="w-full text-left px-4 py-2 rounded-md bg-slate-200 focus:outline-none"
                            >
                                DashBoard
                            </button>

                            <button
                                onClick={toggleDropdown}
                                className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                            >
                                Merchant
                            </button>

                            {isOpen && (
                                <div className="mt-2 pl-4">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Bulk Order</a>
                                    <hr className='h-px my-1 bg-gray-400 border-0' />
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Bulk Order Show</a>
                                    <hr className='h-px my-1 bg-gray-400 border-0' />
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Order View</a>
                                </div>
                            )}
                        </div>


                        <div>
                            <button className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Merchant - Payment
                            </button>
                        </div>

                        <div>
                            <button className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Orders
                            </button>
                        </div>

                        <div>
                            <button className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Dynamic Deals
                            </button>
                        </div>


                        <div>
                            <button className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Invoices
                            </button>
                        </div>




                        <div>
                            <button className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Deal - Attributes
                            </button>
                        </div>

                        <div className=' py-2'>
                            <a href='/deals-data' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Deals Data
                            </a>
                        </div>


                        <div className='py-2'>
                            <a href='/product-data' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                                Product Data
                            </a>
                        </div>


                        <hr className='h-px my-2  bg-gray-400 border-0' />


                        <div>
                            <div className='w-full text-left px-4 py-2 mb-4 bg-slate-200 hover:bg-slate-200 focus:outline-none'>
                                <a href='add-product'>Add Product</a>
                            </div>
                        </div>







                        <div>
                            <div className='w-full text-left px-4 py-2 mb-4 bg-slate-200 hover:bg-slate-200 focus:outline-none'>
                                <a href='add-merchant'>Add Merchant</a>
                            </div>
                        </div>

                        <div>
                            <div className='w-full text-left px-4 py-2 mb-4 bg-gray-500 hover:bg-red-600 focus:outline-none'>
                                <a href='/'>Log Out</a>
                            </div>
                        </div>




                    </div>
                </aside>




                {/* Main content area */}
                <div className="flex-grow ml-64">
                    {/* Navbar */}
                    <header className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
                        <div className="max-w-7xl mx-auto py-4 px-4">
                            <h1 className="text-xl font-bold">IncrediblesDeals</h1>
                        </div>
                    </header>

                    {/* Content area for rendering components via Outlet */}
                    <div className="pt-16 p-6 h-full">
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
};

export default Layout;
