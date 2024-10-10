// MerchantBulkOrder



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchantOrder = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])


  return (
    <div className='border'>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">No</th>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Deal Title</th>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Store</th>
              <th scope="col" className="px-6 py-3">Inactive</th>
              <th scope="col" className="px-6 py-3">Created</th>
              <th scope="col" className="px-6 py-3">Per Unit Price	</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Delivered</th>
              <th scope="col" className="px-6 py-3">Payment Released	</th>
              <th scope="col" className="px-6 py-3">Fulfilled</th>
              <th scope="col" className="px-6 py-3">Total</th>
              <th scope="col" className="px-6 py-3">Ordered</th>
              <th scope="col" className="px-6 py-3">Shipped</th>
              <th scope="col" className="px-6 py-3">In Progress</th>
              <th scope="col" className="px-6 py-3">Total</th>


            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">12365</td>


                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.DealTitle}
                  </th>

                  <td className="px-6 py-4">50</td>
                  <td className="px-6 py-4">{item.Price}</td>
                  <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-sm'>Inactive</button></td>

                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">25011</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">25011</td>
                  <td className="px-6 py-4">total</td>
                  
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

export default MerchantOrder;
