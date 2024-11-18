import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyDealStatus = () => {

    const [showdeals, setShowdeals] = useState(false);
    const [data, setData] = useState([])
    const backUrl = process.env.REACT_APP_URL;


    const navigate = useNavigate();


    useEffect(() => {

        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg
                if (msg == "Email not verifed !") {
                    // alert("Please Verify your email")
                    navigate('/sign-in');

                } else if (msg == "Email verifed !") {

                    axios.get(`${backUrl}/user/myorder`, { withCredentials: true })
                        .then((res) => {
                            const msg = res.data.msg;
                            if (msg == "0 Deal CLose !") {
                                setShowdeals(true);
                                console.log("No deals is live !");
                            } else {
                                setShowdeals(false);
                                const data = res.data.products
                                console.log(data);
                                setData(data);
                                console.log(res);
                            }

                        }).catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    navigate('/sign-in');

                }
            })


    }, []);

     


    return (



        <>
            {showdeals ?
                <div className="items-center text-center mt-10 text-red-600 mb-40 pt-8 pb-20">No deals is Live</div>
                :
                <section id='Projects' className="w-96 mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-96 mt-8 mb-36">

                {data ? 
                    {data.map((data) => {
                    
                        return (<div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-300">
                            <a href={`/single-product/${data.Product_id}/${data.Appid}`}>
                                <div style={{ height: "20rem" }} className='w-72 '>

                                    <img src={`${backUrl}/${data.Image}`}
                                        alt="Product" class="w-72 object-cover rounded-t-xl" />
                                </div>

                                <div class="w-48 pt-4">
                                    <div className='grid gap-12 grid-cols-2 '>
                                        <span class="text-black  pl-2 font-medium  uppercase text-xs">Earn ₹{data.OfferAmmount}</span>
                                        <div className='w-3 h-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg> <span>{data.status}</span> </div>


                                    </div>
                                    <p class="text-gray-700  pt-4 pl-2 text-xs">on {data.CardType} Bank Credit Cards</p>
                                    <p class="text-md  font-normal pt-1  pl-2  ">{data.DealTitle}</p>

                                    <div className='flex items-center pt-1'>
                                        <div class="ml-2"><img width="12" height="12" src="https://img.icons8.com/color/48/rgb-circle-1--v1.png" alt="rgb-circle-1--v1" /></div>
                                        <p class="text-xs truncate block pl-2 uppercase ">Variant- {data.Variant}</p>
                                    </div>


                                    <div class="flex items-center pt-1 mb-2">
                                        <p class="text-md pl-2 font-bold text-black cursor-auto my-1"> ₹{data.Price}</p>

                                        <div class="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
                                    </div>
                                </div>
                            </a>
                        </div>




                        )
                    }) }  : "0 deals close "}






                </section>


            }








        </>

    )
}

export default MyDealStatus
