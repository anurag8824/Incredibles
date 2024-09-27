import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductData = () => {
    const backUrl = process.env.REACT_APP_URL;
    const navigate = useNavigate();
    
    const [data, setData] = useState([]);

    const editProduct = (e, id) => {
        e.preventDefault();
        navigate(`/edit/deal/${id}`);
    };

    useEffect(() => {
        axios.get(`${backUrl}/admin/alldeals`)
            .then((res) => {
                if (res.data.msg === "0 Deal Closes !") {
                    alert("0 deals");
                } else {
                    console.log(res);
                    setData(res.data);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [backUrl]); // Added dependency array to avoid repeated API calls

    return (
        <div className="m-6 px-6 py-20">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Deal Title</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Offer</th>
                            <th scope="col" className="px-6 py-3">Store</th>
                            <th scope="col" className="px-6 py-3">Variant</th>
                            <th scope="col" className="px-6 py-3">Card Type</th>
                            <th scope="col" className="px-6 py-3">Offer Amount</th>
                            <th scope="col" className="px-6 py-3">Deal Number</th>
                            <th scope="col" className="px-6 py-3">Offer Cash</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.DealTitle}</td>
                                <td className="px-6 py-4">{item.Price}</td>
                                <td className="px-6 py-4">{item.Offer}</td>
                                <td className="px-6 py-4">{item.Store}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.Variant}</td>
                                <td className="px-6 py-4">{item.CardType}</td>
                                <td className="px-6 py-4">{item.OfferAmmount}</td>
                                <td className="px-6 py-4">{item.DealNumber}</td>
                                <td className="px-6 py-4">{item.Offer}</td>
                                <td className="px-6 py-4">{item.Status}</td>
                                <td className="px-6 py-4">
                                    <button onClick={(e) => editProduct(e, item._id)} className="px-6 py-4 hover:underline">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductData;
