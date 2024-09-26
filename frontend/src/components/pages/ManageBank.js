import React, { useState } from 'react'

const ManageBank = () => {
    // Form state
    const [accountData, setAccountData] = useState({
        bankName: '',
        IfceCode: '',
        acNumber: '',
        acHolder: '',
        panNumber: '',
        panHolder: '',
        
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setAccountData({
            ...accountData,
            [name]: files ? files[0] : value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Account Data:', accountData);
        // Add your form submission logic here
    };

    return (
        <div className='w-full max-w-3xl mx-auto px-4 md:px-6 py-24'>
            <form onSubmit={handleSubmit} className="" >
                <div class="grid gap-6 mb-6 md:grid-cols-2">

                    <div>
                        <label for="bankName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Name</label>
                        <input onChange={handleChange} name="bankName" type="text" id="bankName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>


                    <div>
                        <label for="IfceCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IFCE Code</label>
                        <input onChange={handleChange} name='IfceCode' type="text" id="IfceCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>


                    <div>
                        <label for="acNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                        <input onChange={handleChange} name='acNumber' type="text" id="acNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>

                    <div>
                        <label for="acHolder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Holder name</label>
                        <input onChange={handleChange} name='acHolder' type="text" id="acHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>



                   
                    <div>
                        <label for="panNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pan Number</label>
                        <input onChange={handleChange} name='panNumber' type="text" id="panNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>



                    <div>
                        <label for="panHolder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PAN Holder Name</label>
                        <input onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>



                </div>



                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>

    );
};




export default ManageBank