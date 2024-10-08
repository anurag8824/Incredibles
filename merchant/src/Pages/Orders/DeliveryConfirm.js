// DeliveryConfirm

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeliveryConfirm = () => {
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
    <div>
      <h1 className='font-medium pb-6 text-3xl'>Delivery Confirmation</h1>


      <div className='border'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">Email Id</th>
                <th scope="col" className="px-6 py-3">Incredibles Id</th>
                <th scope="col" className="px-6 py-3">Updated At</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Buyer Price</th>

                <th scope="col" className="px-6 py-3">Invoice</th>
                <th scope="col" className="px-6 py-3">Order ID</th>
                <th scope="col" className="px-6 py-3">Tracking ID</th>
                <th scope="col" className="px-6 py-3">Delivery Support</th>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Select</th>
                <th scope="col" className="px-6 py-3">Remarks</th>
                <th scope="col" className="px-6 py-3">Alert</th>
                <th scope="col" className="px-6 py-3">Recieved</th>
                <th scope="col" className="px-6 py-3">Not Recieved</th>
                <th scope="col" className="px-6 py-3">Dispute</th>



              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {item.UserId}
                    </th>
                    <td className="px-6 py-4">{item.Appid}</td>
                    <td className="px-6 py-4">date</td>
                    <td className="px-6 py-4">username</td>


                    <td className="px-6 py-4">{item.Price}</td>
                    <td className="px-6 py-4">invoice</td>

                    <td className="px-6 py-4">{item.OrderId}</td>
                    <td className="px-6 py-4">{item.TrackingId}</td>
                    <td className="px-6 py-4">{item.SupportId}</td>
                    <td className="px-6 py-4">{item.DealTitle}</td>
                    <td className="px-6 py-4">  <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" /></td>
                    <td className="px-6 py-4"><textarea id="message" rows="2" class="block p-2.5 w-20 h-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder=""></textarea>
                    </td>
                    <td className="px-6 py-4"><select id="countries" required className="bg-gray-50  border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 mt-0  ">
                      <option selected>Select</option>
                      <option value="screenshot">Need a screenshot</option>
                      <option value="trackingid">Tracking id wrong</option>
                      <option value="variant">Wrong Variant</option>
                      <option value="invoice">Invoice not uploaded</option>
                      <option value="gst">GST not uploaded</option>
                      <option value="paydelay">Payment Delay</option>
                    </select><button className='bg-gray-700 hover:bg-gray-500  px-1 text-white rounded-md'>Submit</button></td>
                    <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-md'>Recieved</button></td>
                    <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500 p-1 text-white rounded-md'>Not Recieved</button></td>
                    <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-md'>Dispute</button></td>

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
    </div>

  );
};

export default DeliveryConfirm;
