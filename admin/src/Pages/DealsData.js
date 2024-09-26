import React from 'react'

const DealsData = () => {
  return (

    <div className='m-6 px-6 py-20'>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">
                            Email Id
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Incredibles Id
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Order ID
                        </th> 
                        <th scope="col" class="px-6 py-3">
                            Tracking ID 
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Support ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cart Support Id
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Per Unit Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Last Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            #Status
                        </th>
                        
                       
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4">
                            $299
                        </td>
                        <td class="px-6 py-4">
                            12-02-2025
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            0
                        </td>
                        <td class="px-6 py-4">
                            0
                        </td>
                        <td class="px-6 py-4">
                            0
                        </td>
                        <td class="px-6 py-4">
                            $0
                        </td>
                        <td class="px-6 py-4">
                            2
                        </td>
                        
                    </tr>



                    {/* 2nd row  */}

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4">
                            $299
                        </td>
                        <td class="px-6 py-4">
                            12-02-2025
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            0
                        </td>
                        <td class="px-6 py-4">
                            0
                        </td>
                        <td class="px-6 py-4">
                            0
                        </td>
                        <td class="px-6 py-4">
                            $0
                        </td>
                        <td class="px-6 py-4">
                            2
                        </td>
                        
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
  )
}

export default DealsData