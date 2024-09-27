
import React, { useState } from 'react';

const Sidebar = () => {
    // State to manage dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>

            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-gray-100 text-black h-screen p-5">
                    <h2 className="text-2xl font-bold mb-5">Yaper</h2>

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
                                <hr className='h-px my-1 bg-gray-400 border-0'/>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Merchant Bulk Order Show</a>
                                <hr className='h-px my-1 bg-gray-400 border-0'/>
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


                    <hr className='h-px my-2  bg-gray-400 border-0'/>


                    <div>
                        <div className='w-full text-left px-4 py-2 mb-4 bg-slate-200 hover:bg-slate-200 focus:outline-none'>
                            <a href='add-product'>Add Product</a>
                        </div>
                    </div>

                    

                    {/* <div>
                        <button className='w-full text-left px-4 py-2 bg-slate-200 hover:bg-slate-200 focus:outline-none'>
                           Add Merchant
                        </button>
                    </div> */}

                    <div>
                        <div className='w-full text-left px-4 py-2 mb-4 bg-slate-200 hover:bg-slate-200 focus:outline-none'>
                            <a href='add-merchant'>Add Merchant</a>
                        </div>
                    </div>




                </div>

                {/* Main Content */}
                {/* <div className="grid-1 p-10 ">
                    <h1 className="text-3xl font-bold ">Admin / DashBoard</h1>
                </div> */}

                {/* {Tables} */}

                <div className='m-6 px-6 py-20'>

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Per Unit Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Last Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        #Ordered
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        #Shipped

                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        #Delivered
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        #Payment Released
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        #Cancelled
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Admin Deal
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        $299
                                    </td>
                                    <td class="px-6 py-4">
                                        12-02-2025
                                    </td>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        0
                                    </td>
                                    <td class="px-6 py-4">
                                        0
                                    </td>
                                    <td class="px-6 py-4">
                                        0
                                    </td>
                                    <td class="px-6 py-4">
                                        $0
                                    </td>
                                    <td class="px-6 py-4">
                                        2
                                    </td>
                                    <td class="px-6 py-4">
                                        1993
                                    </td>
                                </tr>



                                {/* 2nd row  */}

                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        $299
                                    </td>
                                    <td class="px-6 py-4">
                                        12-02-2025
                                    </td>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        0
                                    </td>
                                    <td class="px-6 py-4">
                                        0
                                    </td>
                                    <td class="px-6 py-4">
                                        0
                                    </td>
                                    <td class="px-6 py-4">
                                        $0
                                    </td>
                                    <td class="px-6 py-4">
                                        2
                                    </td>
                                    <td class="px-6 py-4">
                                        1993
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>




            </div>



        </div>

    );
};

export default Sidebar;
