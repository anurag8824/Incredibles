import React, { useEffect, useState } from 'react'
import Accordion from './Accordian';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ProfilePage = () => {


    // const [showdeals, setShowdeals] = useState(false);
    // const [data, setData] = useState([])

    const navigate = useNavigate();





    useEffect(() => {

        axios.get('https://back-ecom-six.vercel.app/user/me', { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg
                console.log(res,"user");
                if (msg == "Email not verifed !") {
                    // alert("Please Verify your email")
                    navigate('/sign-in');

                } else if (msg == "Email verifed !") {

                }
                
                else 
                {
                    navigate('/sign-in');

                }
            })


    }, []);


    return (
        <div>

            <section className="relative pt-20 pb-24 ">
                <div className="w-full max-w-5xl mx-auto px-6 md:px-8 bg-gray-100">
                    <div className="flex pt-2 px-10 items-center justify-center sm:justify-start relative z-10 mb-5">
                        <img src="./profile.png" alt="user-avatar-image"
                            className="border-4 border-solid border-white pt- rounded-full w-24 h-24 object-cover" />
                    </div>
                    <div className="flex items-center px-10 justify-center  flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                        <div className="block">
                            <h3 className="font-medium  text-xl text-gray-900  mb-1 max-sm:text-center">User name</h3>

                            <h3 className="font-manrope font-sm text-sm text-gray-900 max-sm:text-center">+91-9876543210</h3>

                            <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Email: xyz1234@gamil.com</p>
                        </div>

                    </div>
                    <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>




                    {/* accordian from here  */}

                   <Accordion/>





                </div>
            </section>


        </div>
    )
}

export default ProfilePage