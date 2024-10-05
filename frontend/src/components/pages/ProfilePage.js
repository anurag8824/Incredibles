import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';





const ProfilePage = () => {


    // const [showdeals, setShowdeals] = useState(false);
    const [data, setData] = useState({})

    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_URL;






    useEffect(() => {
        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg
                const User = res.data.user;
                setData(User)
                if (msg == "Email not verifed !") {
                    // alert("Please Verify your email")
                    navigate('/sign-in');

                } else if (msg == "Email verifed !") {
                }
                else {
                    navigate('/sign-in');
                }
            })
    }, []);



    const handleLogout = () => {
        const Email = Cookies.get('Email');  // get name of cookies
        console.log(Email,"email recieved from cookies");

        // Remove the email from cookies
        Cookies.remove('Email'); 

        // Optional: Notify the backend to invalidate the session or logout the user
        // axios.post('/api/logout', {}, { withCredentials: true })
        //   .then(() => {
        // Redirect to the login page after logout
        navigate('/sign-in');
        //   })
        //   .catch(err => {
        // console.error('Error during logout:', err);
        //   });

    };

   



    return (
        <div>
            <div class="bg-white pt-2 pb-4">

                <div class="max-w-sm mx-auto bg-white  rounded-lg overflow-hidden shadow-lg">
                    <div class="border-b px-4 pb-6">
                        <div class="text-center my-4">
                            <img class="h-32 w-32 rounded-full border-4 border-white  mx-auto my-4"
                                src="chicken.png" alt="" />
                            <div class="py-2">
                                <h3 class="font-bold text-2xl text-gray-800  mb-1">{data.first_Name + " " + data.last_Name}</h3>

                                <div class="inline-flex text-gray-700 font-semibold items-center">
                                    <img class="h-5 w-5 text-gray-400 mr-4" src='phone.png' width="24" height="24" />

                                    {data.Phoneno}
                                </div>

                                <div class="inline-flex text-gray-700 font-semibold items-center">
                                    <img class="h-5 w-5 text-gray-400  mr-4" src='gmail.png' width="24" height="24" />

                                    {data.Email}
                                </div>

                            </div>
                        </div>
                        <div class="flex gap-2 px-2">
                            <button
                                class="flex-1 rounded bg-blue-600  text-white font-bold hover:bg-blue-800  px-2 py-2">
                                Profile and Settings
                            </button>

                        </div>
                    </div>


                    <hr />

                    <div class="mt-3 grid  ">

                        <a href='/manage-bank' type="button" class="flex items-center justify-between w-full py-3 px-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='provider.png' />
                                Manage Bank Account Details</span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </a>


                        <a href='wallet' class="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200   hover:bg-gray-100  gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='atm-card.png' />
                                MY Wallet</span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </a>



                        <a href='faq' class="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='question-mark.png' />
                                FAQ's</span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </a>





                        <a href='terms-of-service' class="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='hospitality.png' />
                                Terms Of Service</span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </a>





                        <a href='privacy-policy' class="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='compliant.png' />
                                Privacy Policy
                            </span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </a>






                        <a href='contact' class="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='customer-service.png' />
                                Contact Support</span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </a>



                        <button onClick={()=>{handleLogout()}} type="button" class="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                            <span class="flex items-center gap-2">
                                <img className='w-5 h-5 me-2' src='logout.png' />
                                Log Out</span>

                            <svg data-accordion-icon class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>











                    </div>

                </div>




            </div>
        </div>

    )
}

export default ProfilePage