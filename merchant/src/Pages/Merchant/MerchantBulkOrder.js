// MerchantBulkOrder



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchantBulkOrder = () => {
  const backUrl = process.env.REACT_APP_URL
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log("backUrl: " + backUrl);
  useEffect(() => {
    axios.get(`${backUrl}/merchant/alldeals`, {withCredentials: true})
      .then((res) => {
        console.log(res,"ALL morder")
        setData(res.data.DealData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array to prevent infinite API calls

  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])


  return (
    <div className=''>
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">Merchant Bulk Order</h1>

   
      <div className="relative border  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Per Unit Price</th>
              <th scope="col" className="px-6 py-3">Last Date</th>
              <th scope="col" className="px-6 py-3">Ordered</th>
              <th scope="col" className="px-6 py-3">Shipped</th>
              <th scope="col" className="px-6 py-3">Delivered</th>
              <th scope="col" className="px-6 py-3">Payment Released</th>
              <th scope="col" className="px-6 py-3">Cancelled</th>
              <th scope="col" className="px-6 py-3">Admin Deal</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.DealTitle}
                  </th>

                  <td className="px-6 py-4">{item.Quantity}</td>
                  <td className="px-6 py-4">{item.Iprice}</td>
                  <td className="px-6 py-4">{new Date(item.updatedAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">Ordered</td>
                  <td className="px-6 py-4">Shipped</td>
                  <td className="px-6 py-4">Delivered</td>
                  <td className="px-6 py-4">pr 0</td>
                  <td className="px-6 py-4">c</td>
                  <td className="px-6 py-4">admin deal</td>
                  
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

export default MerchantBulkOrder;
