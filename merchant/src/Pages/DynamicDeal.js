// DeliveryConfirm

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DynamicDeal = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const [mdata, setMdata] = useState({
    Color: '',
    Quantity: '',
    Extra: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backUrl}/merchant/deals`)
      .then((res) => {
        console.log(res, "old merchant");
        console.log(res.data.Deal);
        setData(res.data.Deal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array to prevent infinite API calls


  useEffect(() => {
    axios.get(`${backUrl}/merchant/update/deals`,  {withCredentials : true })
    .then((res) => {
      console.log(res, "updated res");
    })
  }, [])

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setMdata({
      ...mdata,
      [name]: value,
    });
  };


  // const createData = () => {
  // //   axios.push(`${backUrl}/merchant/deals/create/:id`, mdata)

  // }


  // Handle form submission
  const createData = (e, id) => {
    e.preventDefault();
    console.log('m Data:', mdata);
    console.log(id,"id from frontend")
    axios.post(`${backUrl}/merchant/deals/create/${id}`, mdata, {withCredentials : true },  {
      headers: {
        'Content-Type': 'multipart/form-data' // Optional, Axios sets this automatically for FormData
      }
    }).then((res) => {
      console.log(res, "m deals");
      alert("m deal added sucessfully !");
      // window.location.reload()
    }).catch((err) => {
      console.log(err);
    })

    // Add your form submission logic here
  };








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
      <h1 className='font-medium pb-6 text-3xl'>Merchant  Dynamic Deal Create</h1>


      <div className='border'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Deal Title</th>
                <th scope="col" className="px-6 py-3">Incredible Price</th>
                <th scope="col" className="px-6 py-3">Offer</th>
                <th scope="col" className="px-6 py-3">Store</th>
                <th scope="col" className="px-6 py-3">Variant</th>
                <th scope="col" className="px-6 py-3">Address</th>

                <th scope="col" className="px-6 py-3">Info</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Color</th>
                <th scope="col" className="px-6 py-3">Extra</th>
                <th scope="col" className="px-6 py-3">GST</th>
                <th scope="col" className="px-6 py-3">Submit</th>
                <th scope="col" className="px-6 py-3">Live</th>
                <th scope="col" className="px-6 py-3">Fullfilled</th>


              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (

                  <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                      {item.DealTitle}
                    </th>
                    <td className="px-6 py-4">{item.Iprice}</td>
                    <td className="px-6 py-4">{item.Offer}</td>
                    <td className="px-6 py-4">{item.Store}</td>
                    <td className="px-6 py-4">{item.Price} - {item.DealTitle}</td>
                    <td className="px-6 py-4"><select id="countries" required className="bg-gray-50  border font-medium border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-20 mt-0  ">
                      <option selected>Select</option>
                      <option value="screenshot">342 digital depths jaipur</option>

                    </select></td>
                    <td className="px-6 py-4">merchan name info</td>


                    <td className="px-6 py-4"> <input name='Quantity' value={mdata.Quantity.target} onChange={handleChange} type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-1" placeholder="0" required /></td>




                    <td className="px-6 py-4">
                      
                      <select
                      id="color"
                      required
                      className="bg-gray-50 border font-medium border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-20 mt-0"
                      name="Color"
                      value={mdata.Color.target} // Bind the value to the state
                      onChange={handleChange} // Change handler for the select element
                    >
                      <option value="">Any Color</option> {/* For a default option */}
                      {item.Variant && <option value={item.Variant.target}>{item.Variant}</option>} {/* Dynamically rendering Variant */}
                    </select>

                    </td>




                    <td className="px-6 py-4"><select
                      id="countries"
                      required
                      className="bg-gray-50 border font-medium border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-20 mt-0"
                      name="Extra"
                      value={mdata.Extra.target} // Bind the value to state
                      onChange={handleChange} // Change happens at select level
                    >
                      <option value="₹0">₹0</option>
                      <option value="₹50.0">₹50.0</option>
                      <option value="₹100.0">₹100.0</option>
                      <option value="₹150.0">₹150.0</option>
                      <option value="₹200.0">₹200.0</option>
                      <option value="₹250.0">₹250.0</option>
                      <option value="₹300.0">₹300.0</option>
                      <option value="₹350.0">₹350.0</option>
                      <option value="₹400.0">₹400.0</option>
                      <option value="₹450.0">₹450.0</option>
                      <option value="₹500.0">₹500.0</option>
                      <option value="₹550.0">₹550.0</option>
                      <option value="₹1,000.0">₹1,000.0</option>
                      <option value="₹1,500.0">₹1,500.0</option>
                      <option value="₹2,000.0">₹2,000.0</option>
                    </select>
                    </td>
                    <td className="px-6 py-4"><select id="countries" required className="bg-gray-50  border font-medium border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-20 mt-0  ">
                      <option selected>gst</option>
                      <option value="screenshot">digital depths</option>

                    </select></td>
                    <td className="px-6 py-4"><button onClick={(e) => { createData(e,item._id) }} className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-sm'>Create</button></td>

                    <td className="px-6 py-4">live </td>
                    <td className="px-6 py-4">Fullfilled </td>







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

export default DynamicDeal;
