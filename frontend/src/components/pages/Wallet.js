import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Wallet = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([])
    const [wallet,setWallet] = useState([])


    useEffect(() => {
        axios.get(`${backUrl}/user/walletdata`, { withCredentials: true })
            .then((res) => {
                console.log(res, 'wallet data')
                console.log(res.data.Payinfo,"dd")
                setData(res.data.Payinfo);
                setWallet(res.data.wallet);
            })
    } ,[])
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
                        {wallet}</p>
                </div>


                <div className="">
                    <h1 className="text-xl font-medium text-gray-600">All Transactions</h1>
                </div>

                <hr className='w-full' />

                <div className="flex mt-2 space-x-2 border-b pb-2">
                    <button className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-lg">
                        Recieved
                    </button>
                    <button className="bg-gray-100 hover:bg-blue-600 text-gray-800 font-semibold py-1 px-6 rounded-lg">
                        Cancelled
                    </button>
                </div>


                <div>




                    {data.length > 0 ? (
                        data.map((item, index) => (
                        item ? (
                            <div key={index} className="flex border-b py-1 justify-between">



                                <div className="font-semibold text-blue-800 text-md py-1  ">
                                    {item.APPID}
                                </div>

                                <div className="font-normal text-md py-1  ">
                                    {item.UTR}
                                </div>

                                <div className=" text-md font-semibold text-green-600 py-1 ">
                                    +₹ {item.Amount}
                                </div>




                            </div>) : null



                        ))
                    ) : (
                        <div>  </div>
                    )}


                </div>






            </div>
        </div>
    );
};

export default Wallet;
