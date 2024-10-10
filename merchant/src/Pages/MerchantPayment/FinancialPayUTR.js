import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const FinancialPayUTR = () => {
    const navigate = useNavigate();


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

            <form class="max-w-sm mx-8">
                <div className=" block mb-2 text-2xl font-medium text-gray-900">Financial Pay UTR</div>

                <div class="mb-5">  
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Merchant</label>
                    <input type="text" name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">UTR*</label>
                    <input type="text" name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                    <input type="text" name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Financial UTR</button>

            </form>



        </div>

    )
}

export default FinancialPayUTR