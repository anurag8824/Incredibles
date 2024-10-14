import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

const NewSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenM, setIsOpenM] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showside, setShowside] = useState(true);




    const [dropdownState, setDropdownState] = useState({
        merchant: false,
        product: false,
        customer: false,
        order: false,
        report: false,
        settings: false,
    });

    // Toggle function for dropdowns
    const toggleDropdown = (dropdownName) => {
        setDropdownState((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };

    const navigate = useNavigate();

    const toggleDropdown2 = () => {
        setIsOpen(!isOpen);
    };






    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            setShowside(false);
            
            navigate('/')
           
        }

    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };




    return (
        <aside className="text-black  flex flex-col  fixed top-0 left-0 z-40 w-64 h-screen">
            {/* Header  */}
            <header className="bg-gray-200 w-screen z-10 top-0 left-0">
                <div className="max-w-7xl mx-auto py-4  px-4">
                    <h1 className="text-xl font-bold">Incredible Deals (Merchant)</h1>
                </div>
            </header>

            {showside ?

                <div className='flex items-center md:hidden'>


                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 lg:hidden "
                        aria-controls="mobile-menu-2"
                        aria-expanded={menuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Hamburger Icon */}
                        <svg
                            className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        {/* Close Icon */}
                        <svg
                            className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                </div>
                : ""}

            {showside ?

                <div id="mobile-menu-2" className={`${menuOpen ? "block" : "hidden"} md:block h-full  px-3 space-y-2 font-medium py-4 overflow-y-auto bg-gray-50 DARK:bg-gray-800`}>




                    {/* Dropdown */}
                    <Link to='dashboard' className="w-full text-left px-4 py-2 rounded-md bg-slate-200 focus:outline-none" >
                        DashBoard
                    </Link>


                    <div>
                        <button
                            onClick={() => toggleDropdown('merchant')}
                            className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                        >
                            Merchant
                        </button>
                        {dropdownState.merchant && (
                            <div className="mt-2 pl-4">
                                <Link to="merchant-bulk" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Bulk Order</Link>
                                <hr className="h-px my-1 bg-gray-400 border-0" />
                                <Link to="merchant-order" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Order</Link>
                                <hr className="h-px my-1 bg-gray-400 border-0" />
                                <Link to="merchant-pricing" className="block px-4 py-2 hover:bg-gray-200 text-sm"> Merchant Pricing</Link>
                            </div>
                        )}
                    </div>




                    <div>
                        <button
                            onClick={() => toggleDropdown('product')}
                            className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                        >
                            Merchant Payment
                        </button>
                        {dropdownState.product && (
                            <div className="mt-2 pl-4">
                                <Link to={"bulk-merchant-payment"} className="block px-4 py-2 hover:bg-gray-200 text-sm">Bulk Merchant Payment</Link>
                                <hr className='h-px my-1 bg-gray-400 border-0' />
                                <Link to="financial-pay-utr" className="block px-4 py-2 hover:bg-gray-200 text-sm">Financial Payment UTR</Link>
                                <hr className='h-px my-1 bg-gray-400 border-0' />
                                <Link to="merchant-payment-recieved" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Payment Recieved</Link>
                            </div>
                        )}
                    </div>

                    {/* Customer Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('customer')}
                            className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                        >
                            Orders
                        </button>
                        {dropdownState.customer && (
                            <div className="mt-2 pl-4">
                                <Link to="deliverey-confirmation" className="block px-4 py-2 hover:bg-gray-200 text-sm">Delivery Confirmation</Link>
                                <hr className="h-px my-1 bg-gray-400 border-0" />
                                <Link to="ecom-order-details" className="block px-4 py-2 hover:bg-gray-200 text-sm">E commerce Order Details</Link>
                                <hr className="h-px my-1 bg-gray-400 border-0" />
                                <Link to="merchant-order-variant" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Order Variant</Link>
                            </div>
                        )}
                    </div>

                    {/* Orders Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('order')}
                            className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                        >
                            Dynamic Deal
                        </button>
                        {dropdownState.order && (
                            <div className="mt-2 pl-4">
                                <Link to="merchant-dynamic-deals" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Deal Create</Link>
                                <hr className="h-px my-1 bg-gray-400 border-0" />

                            </div>
                        )}
                    </div>

                    {/* Reports Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('report')}
                            className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                        >
                            Invoices
                        </button>
                        {dropdownState.report && (
                            <div className="mt-2 pl-4">
                                <Link to="merchant-invoices" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Invoices</Link>
                                <hr className="h-px my-1 bg-gray-400 border-0" />

                            </div>
                        )}
                    </div>

                    {/* Settings Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('settings')}
                            className="w-full text-left px-4 py-2 rounded-md focus:outline-none"
                        >
                            Deal - Attributs
                        </button>
                        {dropdownState.settings && (
                            <div className="mt-2 pl-4">
                                <Link to="address" className="block px-4 py-2 hover:bg-gray-200 text-sm">Address</Link>

                            </div>
                        )}
                    </div>














                    <div className=' py-2'>
                        <Link to='deals-data' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                            Deals Data
                        </Link>
                    </div>


                    <div className='py-2'>
                        <Link to='product-data' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                            Product Data
                        </Link>
                    </div>


                    <hr className='h-px my-2  bg-gray-400 border-0' />


                    {/* <div>
                    <div className='w-full text-left px-4 py-2 mb-4 bg-slate-200 hover:bg-slate-200 focus:outline-none'>
                        <a href='add-product'>Add Product</a>
                    </div>
                </div> */}





                    <div>
                        <div className='w-full text-left px-4 py-2 mb-4 bg-gray-500 hover:bg-red-600 focus:outline-none'>
                            <a href='#'>Log Out</a>
                        </div>
                    </div>



                </div>

                : ""}



        </aside>
    )
}

export default NewSideBar