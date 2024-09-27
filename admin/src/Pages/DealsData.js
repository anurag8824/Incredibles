



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DealsData = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${backUrl}/admin/allorder`)
            .then((res) => {
                console.log(res.data.products);
                setData(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); // Empty dependency array to prevent infinite API calls

    return (
        <div className='m-6 px-6 py-20'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Email Id</th>
                            <th scope="col" className="px-6 py-3">Incredibles Id</th>
                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Order ID</th>
                            <th scope="col" className="px-6 py-3">Tracking ID</th>
                            <th scope="col" className="px-6 py-3">Support ID</th>
                            <th scope="col" className="px-6 py-3">Cart Support ID</th>
                            <th scope="col" className="px-6 py-3">Quantity</th>
                            <th scope="col" className="px-6 py-3">Per Unit Price</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.UserId}
                                    </th>
                                    <td className="px-6 py-4">{item.Appid}</td>
                                    <td className="px-6 py-4">{item.DealTitle}</td>
                                    <td className="px-6 py-4">{item.OrderId}</td>
                                    <td className="px-6 py-4">{item.TrackingId}</td>
                                    <td className="px-6 py-4">{item.SupportId}</td>
                                    <td className="px-6 py-4">{item.CartSupportId}</td>
                                    <td className="px-6 py-4">1</td>
                                    <td className="px-6 py-4">{item.Price}</td>
                                    <td className="px-6 py-4">{item.Status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10" className="text-center py-4">
                                    No deals available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DealsData;
