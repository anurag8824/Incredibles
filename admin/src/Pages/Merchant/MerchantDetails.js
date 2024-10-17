// MerchantBulkOrder



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const MerchantOrder = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backUrl}/admin/allmerchant`, { withCredentials: true })
      .then((res) => {
        console.log(res, "ALL merch")
        setData(res.data.reverse());
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


  const viewMdata = (id) => {
    // axios.post(`${backUrl}/`, Email, {withCredentials: true})
    // .then((res) => {
    //   console.log(res, "email sentt")
    // })
    navigate(`/merchant-all-data/${id}`)

  }

  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Password'];

    const escapeCSVValue = (value) => {
      if (typeof value === 'string') {
        // Escape double quotes by doubling them, and wrap values containing commas in double quotes
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? ''; // Return value or empty string if it's null/undefined
    };

    // Generate CSV content

    const validData = data.filter(item => item !== null && item !== undefined);

    // Generate CSV content using the filtered validData
    const rows = validData.map(item => [
      escapeCSVValue(item.Name),
      escapeCSVValue(item.Email),
      escapeCSVValue(item.Password),
    ]);

    const csvContent = [
      headers.join(','), // Join headers with commas
      ...rows.map(e => e.join(',')) // Join each row with commas
    ].join('\n'); // Join rows with newlines

    // Create and trigger the CSV download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'table_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (


    <div className=''>

      <button onClick={() => downloadCSV()} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 DARK:bg-blue-600 DARK:hover:bg-blue-700 focus:outline-none DARK:focus:ring-blue-800'>Download CSV</button>
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">Merchant Details</h1>


      <div className="relative border  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Password</th>
              <th scope="col" className="px-6 py-3">View</th>



            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                  <td className="px-6 py-4">{item.Name}</td>


                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                    {item.Email}
                  </th>

                  <td className="px-6 py-4">{item.Password}</td>



                  <td className="px-6 py-4"><button onClick={() => { viewMdata(item._id) }} className='hover:underline'>View Details</button></td>


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
