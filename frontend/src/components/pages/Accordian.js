import React from 'react'

const Accordian = () => {
    return (
        <div className='flex flex-col gap-2 min-h-screen bg-gray-100 content-center'>


            <a href="#" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Edit Profile
            </a>

            <hr className="h-px my-1 bg-gray-300 border-0 "></hr>

            <a href="/manage-bank" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Manage Bank Account Details
                
            </a>

            <hr className="h-px my-1 bg-gray-300 border-0 "></hr>

            <a href="#" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
                MY Cards
            </a>
            <hr className="h-px my-1 bg-gray-300 border-0"></hr>

            <a href="/faq" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
                FAQ's
            </a>

            <hr className="h-px my-1 bg-gray-300 border-0 "></hr>

            <a href="/terms-of-service" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Terms Of Service
            </a>
            <hr className="h-px my-1 bg-gray-300 border-0"></hr>


            <a href="privacy-policy" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Privacy Policy
            </a>
            <hr className="h-px my-1 bg-gray-300 border-0 "></hr>

            <a href="#" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Contact Support
            </a>


            <hr className="h-px my-1 bg-gray-300 border-0 "></hr>

            <a href="#" className="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Log Out
            </a>

            <hr className="h-px my-1 bg-gray-300 border-0 "></hr>


        </div>
    )
}

export default Accordian