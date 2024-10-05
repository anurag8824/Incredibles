import React from 'react';

const Wallet = () => {
    return (
        <div className="min-h-screen flex mt-2 justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                {/* Wallet Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
                </div>

                {/* Your Balance Section */}
                <div className="mb-8 rounded-md px-4 py-2 bg-blue-900">
                    <h2 className="text-xl font-semibold  text-gray-100">Your Balance:</h2>
                    <p className="text-3xl font-bold text-gray-100 mt-2 mb-4">₹
                        1,250.00</p>
                </div>

{/* 
                <div className="">
                    <h1 className="text-xl font-medium text-gray-600">All Transactions</h1>
                </div> */}

                <hr className='w-full' />

                {/* <div className="flex mt-2 space-x-2">
                    <button className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-lg">
                        Recieved
                    </button>
                    <button className="bg-gray-100 hover:bg-blue-600 text-gray-800 font-semibold py-1 px-6 rounded-lg">
                        Cancelled
                    </button>
                </div> */}


            </div>
        </div>
    );
};

export default Wallet;
