import React, { useEffect, useState } from 'react'
import Accordion from './Accordian';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ProfilePage = () => {


    // const [showdeals, setShowdeals] = useState(false);
    // const [data, setData] = useState([])

    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_URL;






    useEffect(() => {

        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg
                console.log(res, "user");
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


    return (
        <div>

            <section className="relative pt-20 pb-24 ">
                <div className="w-full max-w-5xl mx-auto px-6 md:px-8 bg-gray-100">
                    
                    <div className="grid grid-cols-2 pt-2 px-10  flex-col items-center justify-center relative z-10 mb-5">
                        <div className="flex">
                            <img
                                src="./profile.png"
                                alt="user-avatar-image"
                                className="border-4 border-solid border-white rounded-full w-20 h-20 object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
                            <div>
                                <h3 className="font-medium text-lg text-gray-900 mb-1">User name</h3>
                                <h3 className="font-manrope text-sm text-gray-900">+91-9876543210</h3>
                                <p className="font-normal text-base leading-7 text-gray-500">
                                    Email: xyz1234@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>


                    <hr className="h-px my-1 bg-gray-300 border-0"></hr>




                    {/* accordian from here  */}

                    <Accordion />





                </div>
            </section>


        </div>
    )
}

export default ProfilePage