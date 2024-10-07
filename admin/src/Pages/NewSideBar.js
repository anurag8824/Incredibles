import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showside, setShowside] = useState(true);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            setShowside(false);
        }
    }, [])




    return (
        <aside className="text-black  flex flex-col  fixed top-0 left-0 z-40 w-64 h-screen">
            {/* Header  */}
            <header className="bg-gray-200 w-screen z-10 top-0 left-0">
                <div className="max-w-7xl mx-auto py-4  px-4">
                    <h1 className="text-xl font-bold">Incredible Deals</h1>
                </div>
            </header>

            {showside ?

                <div className="h-full px-3 space-y-2 font-medium py-4 overflow-y-auto bg-gray-50 DARK:bg-gray-800">


                    {/* Dropdown */}
                    <a href='dashboard' className="w-full text-left px-4 py-2 rounded-md bg-slate-200 focus:outline-none" >
                        DashBoard
                    </a>

                    <div>
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
                        <a href='dynamic-deals' className='w-full text-left px-4 py-2 rounded-md focus:outline-none'>
                            Dynamic Deals
                        </a>
                    </div>



                    <div>
                        <a href='invoices' className='w-full  text-left px-4 py-4 rounded-md focus:outline-none'>
                            Invoices
                        </a>
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
                : ""}

        </aside>
    )
}

export default NewSideBar