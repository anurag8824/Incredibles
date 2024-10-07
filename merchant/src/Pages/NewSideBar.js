import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

const NewSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenM, setIsOpenM] = useState(false);

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
            navigate('/')
        }
    }, [])




    return (
        <aside className="text-black  flex flex-col  fixed top-0 left-0 z-40 w-64 h-screen">
            {/* Header  */}
            <header className="bg-gray-200 w-screen z-10 top-0 left-0">
                <div className="max-w-7xl mx-auto py-4  px-4">
                    <h1 className="text-xl font-bold">Incredible Deals (Merchant)</h1>
                </div>
            </header>

            <div className="h-full px-3 space-y-2 font-medium py-4 overflow-y-auto bg-gray-50 DARK:bg-gray-800">


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
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Order View</a>
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
                            <Link to={"merchant-bulk"} className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Bulk Order</Link>
                            <hr className='h-px my-1 bg-gray-400 border-0' />
                            <Link to="merchant-order" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant  Order</Link>
                            <hr className='h-px my-1 bg-gray-400 border-0' />
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Order View</a>
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
                            <Link to="customer-list" className="block px-4 py-2 hover:bg-gray-200 text-sm">Delivery Confirmation</Link>
                            <hr className="h-px my-1 bg-gray-400 border-0" />
                            <Link to="customer-add" className="block px-4 py-2 hover:bg-gray-200 text-sm">E commerce Order Details</Link>
                            <hr className="h-px my-1 bg-gray-400 border-0" />
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Order Variant</a>
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
                            <Link to="order-list" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Deal Create</Link>
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
                            <Link to="sales-report" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Invoices</Link>
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
                            <Link to="profile-settings" className="block px-4 py-2 hover:bg-gray-200 text-sm">Profile Settings</Link>
                            <hr className="h-px my-1 bg-gray-400 border-0" />
                            <Link to="account-settings" className="block px-4 py-2 hover:bg-gray-200 text-sm">Account Settings</Link>
                            <hr className="h-px my-1 bg-gray-400 border-0" />
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Notification Settings</a>
                        </div>
                    )}
                </div>














                <div className=' py-2'>
                    <Link to='/deals-data' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                        Deals Data
                    </Link>
                </div>


                <div className='py-2'>
                    <Link href='/product-data' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
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
                        <a href='/'>Log Out</a>
                    </div>
                </div>



            </div>

        </aside>
    )
}

export default NewSideBar