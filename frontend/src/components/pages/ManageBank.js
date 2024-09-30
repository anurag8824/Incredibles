import React, { useState } from 'react'
import axios from 'axios';

const ManageBank = () => {
    // Form state
    const [accountData, setAccountData] = useState({
        bankName: '',
        IfceCode: '',
        acNumber: '',
        acHolder: '',
        panNumber: '',
        panHolder: '',
        branch:''

    });

    const backUrl = process.env.REACT_APP_URL;

    


    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            ...accountData,
            [name] : value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Account Data:', accountData);
        axios.post(`${backUrl}/kyc` , accountData , {withCredentials: true})
        .then( (res) => {
         if(   res.data == "sucesfully completed !" ){
            alert("succesfully completed")
         }
         else{
            alert("Error in KYC")
         }
            
        })
        .catch((err)=>{
            alert(err);
        })
        // Add your form submission logic here
    };

    return (
        <div className='w-full max-w-3xl mx-auto px-4 md:px-6 py-24'>
            <form onSubmit={handleSubmit} className="" >
                <div class="grid gap-6 mb-6 md:grid-cols-2">

                    <div>
                        <label for="bankName" class="block mb-2 text-sm font-medium text-gray-900">Bank Name</label>
                        <input onChange={handleChange} name="bankName" type="text" id="bankName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>

                    <div>
                        <label for="branch" class="block mb-2 text-sm font-medium text-gray-900 ">Branch Name</label>
                        <input onChange={handleChange} name="branch" type="text" id="branch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>


                    <div>
                        <label for="IfceCode" class="block mb-2 text-sm font-medium text-gray-900 ">IFSC Code</label>
                        <input onChange={handleChange} name='IfceCode' type="text" id="IfceCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>


                    <div>
                        <label for="acNumber" class="block mb-2 text-sm font-medium text-gray-900 ">Account Number</label>
                        <input onChange={handleChange} name='acNumber' type="text" id="acNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>

                    <div>
                        <label for="acHolder" class="block mb-2 text-sm font-medium text-gray-900">Account Holder name</label>
                        <input onChange={handleChange} name='acHolder' type="text" id="acHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
                    </div>




                    <div>
                        <label for="panNumber" class="block mb-2 text-sm font-medium text-gray-900 ">Pan Number</label>
                        <input onChange={handleChange} name='panNumber' type="text" id="panNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
                    </div>



                    <div>
                        <label for="panHolder" class="block mb-2 text-sm font-medium text-gray-900 ">PAN Holder Name</label>
                        <input onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>



                </div>



                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   " required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" class="text-blue-600 hover:underline ">terms and conditions</a>.</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

        </div>

    );
};




export default ManageBank