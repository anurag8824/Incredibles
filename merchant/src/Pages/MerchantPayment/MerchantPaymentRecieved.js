


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const MerchantPaymentRecieved = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backUrl}/merchant/alldeals`, { withCredentials: true })
      .then((res) => {
        console.log(res, "ALL morder")
        setData(res.data.DealData.reverse());
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
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">Merchant Payment Recieved</h1>

      <div className=' mb-2 text-md  font-medium text-gray-900 px-1.5'>Payment Transaction (Transactions will update within 2 days)</div>

      <Link to="/financial-pay-utr" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit UTR for payment</Link>


      <Link to="#" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Download CSV</Link>


      <div className="relative border mt-4  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Source</th>
              <th scope="col" className="px-6 py-3">Incredibles Id</th>
              <th scope="col" className="px-6 py-3">Transaction ID</th>
              <th scope="col" className="px-6 py-3">Value Date</th>
              <th scope="col" className="px-6 py-3">Transaction Date</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Refrence Number</th>
              <th scope="col" className="px-6 py-3">Txn Type</th>
              <th scope="col" className="px-6 py-3">Txn Order Type</th>
              <th scope="col" className="px-6 py-3">Transaction Amount</th>
              <th scope="col" className="px-6 py-3">Total Sum</th>

            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.DealTitle}source
                  </th>

                  <td className="px-6 py-4">{item.Quantity}inc id</td>
                  <td className="px-6 py-4">{item.Iprice}txn id</td>
                  <td className="px-6 py-4">Val date</td>
                  <td className="px-6 py-4">txns date</td>
                  <td className="px-6 py-4">Desc</td>
                  <td className="px-6 py-4">ref no</td>
                  <td className="px-6 py-4">txn ype</td>
                  <td className="px-6 py-4">txn or t</td>
                  <td className="px-6 py-4">txn amount</td>
                  <td className="px-6 py-4">total sum</td>


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

export default MerchantPaymentRecieved;







