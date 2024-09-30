import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const [iuser, setIuser] = useState(true);
  const local = useLocation().pathname;
  const navigate = useNavigate();
  const backUrl = process.env.REACT_APP_URL;



  useEffect(() => {
    axios.get(`${backUrl}/user/me`, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg
        // console.log("res",res)
        // console.log(msg);
        if (msg == "Email not verifed !") {
          // alert("Email not verifed")
          // navigate('/sign-in');

        } else if (msg == "Email verifed !") {
          setIuser(false)
        }
      }, [local])





  },)





  return (
    <>

      <div className='bg-gray-100 sticky top-0 w-[100%] z-50'>

        <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
          <a href="/" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-500">
            <span className="mr-2 text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
            </span>
            Incredibles
          </a>



          <div className={`absolute right-7 top-5 cursor-pointer text-blue-600 ${iuser ? "block" : "hidden"} `} >
            <a href='/sign-in' className="rounded-full border-2 border-gray-700 px-6 py-1 font-medium text-gray-700 transition-colors hover:bg-white hover:text-gray-700">Login</a>
          </div>
          



          <div className={`absolute right-7 top-3 cursor-pointer text-blue-600 ${iuser ? "hidden" : "block"} `} >
            {/* <a href='/profile' className="rounded-full border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-white hover:text-gray-700">Profile</a> */}

            <a href='/profile' className="">
              <img
                src="/profilegif.gif"
                alt="GIF Icon"
                className="w-12 h-12"
              /></a>
          </div>


        </header>
      </div>

    </>

  );
};

export default Navbar;
