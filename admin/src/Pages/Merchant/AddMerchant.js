import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMerchant = () => {
    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_URL;

    // Form state
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'Email' ? value.toLowerCase() : value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
        axios.post(`${backUrl}/admin/addmerchant` , formData , { withCredentials: true } )
        .then((res) => {

            console.log(res, "addes merchant")
            if(res.data == "Merchant Created Sucessfully !"){
               alert(res.data)
               navigate('/')
            }else{
                alert(res.data)
            }

        })
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
        <div className='m-10 px-10 '>

            <form
                className="max-w-lg mx-auto p-6  bg-white border grid-cols-1 gap-4 text-sm"
                onSubmit={handleSubmit}
            >
                <h2 className="col-span-1 md:col-span-2 text-2xl font-bold mb-4">Add Merchant</h2>

                {/* Name */}
                <div>
                    <label htmlFor="name" className="block font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="Name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={formData.Name}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="Email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={formData.Email}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div className="md:col-span-2">
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="Password"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={formData.Password}
                        onChange={handleChange}
                    />
                </div>


                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full py-3 px-4 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMerchant;
