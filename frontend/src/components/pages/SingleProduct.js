import React, { useEffect, useState } from 'react'
import Name from '../CopyBoard/Name'
import Address from '../CopyBoard/Address'
import PinCode from '../CopyBoard/PinCode'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';





const SingleProduct = () => {

    const backUrl = process.env.REACT_APP_URL;


    // for set value 
    const [order, setOrder] = useState("");
    const [track, setTrack] = useState("");
    const [delivered, setDelivered] = useState("");
    const [flipdelivered, setFlipdelivered] = useState("");
    const [file, setFile] = useState(null);


    // for hide and show 
    const [checked, setChecked] = useState(true);
    const [tracked, setTracked] = useState(true);
    const [supported, setSupported] = useState(true);

    const [invoice, setInvoice] = useState(true);


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const Id = useParams().Id
    const id = useParams().id
    const did = useParams().did
    const AppId = Id;

    console.log(id, "ihgjhjk");
    console.log(Id, "ihgjhjk");
    const navigate = useNavigate();
    const [data, setData] = useState([])



    // Save form data to localStorage when trackdata changes
    // useEffect(() => {
    //     // localStorage.setItem('trackdata',trackdata);
    // }, [trackdata]);


    //   const checking = OrderID.length > 0; 
    const showIdForm = (event) => {
        event.preventDefault();

        // setOrder(order);
        setChecked(setChecked(false))
        // localStorage.setItem('orderId', order);

        axios.post(`${backUrl}/user/myproduct`, { OrderId: order, AppId }, { withCredentials: true })
            .then((res) => {
                console.log(res, "orderrer")
            })

        


    }


    const showTrackForm = (event) => {
        event.preventDefault();

        setTrack(track);
        setDelivered(delivered);
        setFlipdelivered(flipdelivered);

        setTracked(setTracked(true));
        // localStorage.setItem('Data', JSON.stringify({
        //     TrackingId: track,
        //     deliveredId: delivered,
        //     support: flipdelivered
        // }))

        setSupported(false);

        axios.post(`${backUrl}/user/myproduct`, { TrackingId: track, AppId }, { withCredentials: true })
            .then((res) => {
                console.log(res, "trackeddrrer")
            })




    }

    const showSupportForm = () => {
        setSupported(true);

        axios.post(`${backUrl}/user/myproduct`, { Otp: delivered, FourDigit:flipdelivered, AppId }, { withCredentials: true })
            .then((res) => {
                console.log(res, "supporttedd")
            })
    }
   


    const hideinvoice = (event) => {
        // event.preventDefault();

        setTracked(false);
        setInvoice(true);

        // const OrderId = localStorage.getItem(orderId)
        const AppId = Id;
        const OrderId = order;

        const TrackingId = track;
        const Otp = delivered;
        const FourDigit = flipdelivered;


        const formData = new FormData();
        formData.append('AppId', AppId);
        formData.append('TrackingId', TrackingId);
        formData.append('Otp', Otp);
        formData.append('FourDigit', FourDigit);
        formData.append('OrderId', OrderId);

        formData.append('image', file)

        // console.log(formData);
        // console.log(file, "file ")

        

            axios.post(`${backUrl}/user/myproduct`,{image: file , AppId}, {headers: { "Content-Type": "multipart/form-data",}})
            .then((res) => {
                console.log(res,"invoideeeed")
                
            }).catch((err) => {
                console.log(err);
            })
        





    }


    const [mydata, setMydata] = useState()

    useEffect(() => {

        axios.get(`${backUrl}/user/singledeal/${id}/${did}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                const msg = res.data.msg;
                if (msg == "0 Deals is live !") {
                    console.log("No deals is live !");

                } else {
                    // setShowdeals(false);
                    const data = res.data.Deal
                    // console.log(data);
                    setData(data);


                    console.log(res);
                }


            }).catch((err) => {
                console.log(err);
            })

        axios.get(`${backUrl}/user/myorder`, { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg;
                if (msg == "0 Deal CLose !") {
                    // setShowdeals(true);
                    // console.log("No deals is live !");
                } else {
                    // setShowdeals(false);
                    const mydata = res.data.products
                    console.log(mydata, "mydata");
                    setMydata(mydata);
                    const updateData = (mydata) => {
                        // Utility function to set state only if the value is not an empty string
                        const setStateIfNotEmpty = (value, setter) => {
                            if (value != "") {
                                setter(value);
                            }
                        };

                        // Using the utility function to update states
                        setStateIfNotEmpty(mydata.OrderId, setOrder);
                        setStateIfNotEmpty(mydata.TrackingId, setTrack);
                        setStateIfNotEmpty(mydata.Otp, setDelivered);
                        setStateIfNotEmpty(mydata.FourDigit, setFlipdelivered);
                        // setStateIfNotEmpty(mydata.Invoice, setInvoice);

                        console.log(order, track);
                    };

                    // Call updateData with mydata
                    updateData(mydata);
                    console.log(res);
                }

            }).catch((err) => {
                console.log(err);
            })




    }, []);






    return (
        <div className='pb-20'>
            <section className="py-3 sm:py-6">
                <div className="container mx-auto px-4">

                    {/* <nav className="flex">
                        <ol role="list" className="flex items-center">
                            <li className="text-left">
                                <div className="-m-1">
                                    <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
                                </div>
                            </li>

                            <li className="text-left">
                                <div className="flex items-center">
                                    <span className="mx-2 text-gray-400">/</span>
                                    <div className="-m-1">
                                        <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Deals </a>
                                    </div>
                                </div>
                            </li>

                            <li className="text-left">
                                <div className="flex items-center">
                                    <span className="mx-2 text-gray-400">/</span>
                                    <div className="-m-1">
                                        <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {data.DealTitle

                                        }  </a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </nav> */}

                    <div className="md:flex grid-cols-2 gap-24">

                        <div className=" pt-8 immagess..">

                            <div className="lg:flex lg:items-start">
                                {/* <div className="lg:order-2 lg:ml-5 sm:items-center"> */}
                                <div className="max-w-xl overflow-hidden rounded-lg md:items-center ">
                                    <img className="h-full w-48 max-w-full object-cover" src={`${backUrl}/${data.Image}`} alt="" />
                                </div>

                                {/* </div> */}

                            </div>

                            <div className='flex ml-1 text-sm font-medium pb-2 mt-8  text-gray-500 gap-2'>
                                <p>Order Cancelled?</p>
                                <button type="button" className="text-blue-800 hover:text-red-600 font-medium rounded-lg text-sm">Marked Cancelled</button>
                            </div>


                        </div>


                        <div className='acceptedd.... mb-0'>
                            <div className="md:flex grid-cols-2 gap-1 md:m-4
                             items-center">



                                <a className="pb-3 flex items-center font-medium  ">
                                    <span className="w-6 h-6 text-white bg-indigo-600 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">1</span>
                                    <div className="block">
                                        <h4 className="text-base  text-indigo-600">Accepted</h4>
                                    </div>
                                    <svg className="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a className="pb-3 flex items-center font-medium  ">
                                    <span className={`w-6 h-6 ${checked ? "bg-gray-50" : "bg-indigo-600 text-white"}   border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8`}>2</span>
                                    <div className="block">
                                        <h4 className={`text-base  ${checked ? "text-gray-900" : "text-indigo-600"} `} >Ordered</h4>
                                    </div>
                                    <svg className="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a className="pb-3 flex items-center font-medium  ">
                                    <span className={`w-6 h-6 bg-gray-50 ${tracked ? "bg-gray-50" : "bg-indigo-600 text-white"} border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8`}>3</span>
                                    <div className="block">
                                        <h4 className={`text-base  ${tracked ? "text-gray-900" : "text-indigo-600"}`}>Shipped</h4>
                                    </div>
                                    <svg className="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a className="pb-3 flex items-center font-medium  ">
                                    <span className="w-6 h-6 bg-gray-50 text-gray border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">4</span>
                                    <div className="block">
                                        <h4 className="text-base text-gray-900" >Delivered</h4>
                                    </div>
                                    <svg className="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a className="pb-3 flex items-center font-medium  ">
                                    <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  md:w-8 md:h-8">5</span>
                                    <div className="block">
                                        <h4 className="text-base  text-gray-900">Payment Released</h4>
                                    </div>
                                </a>

                            </div>

                            <div className="pt- 4 yapper.... mt-10">



                                <div className='ml-1 text-sm font-medium pb-2 text-gray-500'>
                                    Incredibles ID - {`incredibles` + Id}
                                </div>

                                <div className={`${checked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    Flipkart - {order}
                                </div>

                                <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    Tracking ID - {track}
                                </div>

                                <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    Delivery Support (OTP) - {delivered}
                                </div>

                                <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    FlipCart Delivery Support - {flipdelivered}
                                </div>


                                <div className={`${checked ? "block" : "hidden"} ml-1 hihdden align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                    <p> Order ID </p>

                                    <input onChange={e => { setOrder(e.target.value) }} value={order} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="xyz1234" required />

                                    <button type="button" onClick={showIdForm} className="text-white w-24 bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium w-f rounded-lg text-sm px-5 py-2 mb-2 ">Save ID</button>
                                </div>

                                {/* track from  */}


                                <div className={`${checked ? "hidden" : "block"}`}>

                                    <div className={`${tracked ? "block" : "hidden"} ml-1  text-sm font-medium pb-2  text-gray-500`}>

                                        <form className="grid gap-2 align-middle w-full mx-full">
                                            <label for="countries" className="block text-sm font-medium pb-1 text-gray-500 dark:text-white">Select Track</label>
                                            <select id="countries" required className="bg-gray-50 border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-0 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a Company</option>
                                                <option value="EKART">E-Kart</option>
                                                <option value="DV">Delhivery</option>
                                                <option value="FEDEX">Fedex</option>
                                                <option value="ATS">ATS</option>
                                                <option value="EXP">E-com Express</option>
                                                <option value="OTH">Others</option>
                                            </select>
                                        </form>

                                    </div>





                                    <div className={`${tracked ? "block" : "hidden"} ml-1 align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                        <p> Tracking ID </p>

                                        <input onChange={e => { setTrack(e.target.value) }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>


                                    <div className={`${tracked ? "block" : "hidden"} ml-1 text-sm font-medium pb-2 mt-0  text-gray-500`}>

                                        <button type="button" onClick={showTrackForm} className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2">Save Track</button>


                                    </div>


                                    {/* support form  */}


                                    <div className={`${supported ? "hidden" : "block"}`}>

                                        <div className={` ml-1 align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                            <p> OTP</p>

                                            <input onChange={e => { setDelivered(e.target.value) }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                        </div>

                                        <div className={` ml-1 align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                            <p> Fourdigit Delivery Support</p>

                                            <input onChange={e => { setFlipdelivered(e.target.value) }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="John" required />
                                        </div>


                                        <div className={` ml-1 text-sm font-medium pb-2 mt-0  text-gray-500`}>

                                            <button type="button" onClick={showSupportForm} className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2">Save Support</button>


                                        </div>

                                    </div>





                                </div>

                                <div className={`${invoice ? "block" : "hidden"}`}>
                                    <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                        Invoice
                                        <form >

                                            <div className="flex pt-1 pb-2 items-center justify-center w-36">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                                    <div className="flex flex-col items-center  p-2 m-1 ">
                                                        <svg className="w-8 h-8 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 ">
                                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                                        </p>
                                                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" name="image" onChange={handleFileChange} className="hidden" />
                                                </label>
                                            </div>



                                            <button type="button" onClick={hideinvoice} className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 ">
                                                Save Invoice
                                            </button>

                                        </form>

                                    </div>
                                </div>


                                <div>





                                    <h1 className="sm: text-2xl mt-3 font-bold text-gray-900 sm:text-3xl">{data.DealTitle

                                    }</h1>

                                    <div className="mt-2 flex items-center">
                                        <p className="ml-1 text-sm font-medium text-gray-500">₹ {data.Price}</p>
                                        <p className="ml-1 text-sm font-medium text-gray-500">({data.Variant})</p>
                                    </div>

                                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                                    </div>


                                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                                        <label className="">
                                            <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
                                            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. {data.Price}</p>
                                            <span className="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">You'll spend</span>
                                        </label>
                                        <label className="">
                                            <input type="radio" name="subscription" value="8 Months" className="peer sr-only" checked />
                                            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs.{(data.Price + data.Offer) + data.OfferAmmount}</p>
                                            <span className="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">Recieve from Incredibles</span>
                                        </label>

                                        <label className="">
                                            <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
                                            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. {(data.Price - data.Offer) + data.OfferAmmount}</p>
                                            <span className="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">Total You Recieve</span>
                                        </label>

                                        <label className="">
                                            <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
                                            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. {data.OfferAmmount}</p>
                                            <span className="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">Total Earnings</span>
                                        </label>
                                    </div>

                                    <ul className="mt-8 space-y-2 border px-2 rounded-md">
                                        <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                            </svg>
                                            100% Secure Prepaid Order
                                        </li>

                                        <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                                            </svg>
                                            Amount Released on delivery confirmation
                                        </li>
                                    </ul>


                                </div>

                                <ul className="mt-8 space-y-1">
                                    <Name />
                                    <hr />

                                    <Address />

                                    <hr />

                                    <PinCode />

                                    <hr />

                                </ul>





                            </div>


                        </div>







                    </div>

                </div>
            </section>
        </div>
    )
}

export default SingleProduct