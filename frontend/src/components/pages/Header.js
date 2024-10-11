import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const [iuser, setIuser] = useState();
  const navigate = useNavigate();
  const backUrl = process.env.REACT_APP_URL;
  const local = useLocation().pathname;



  useEffect(() => {

    axios.get(`${backUrl}/user/me`, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg
        // console.log("res",res)
        // console.log(msg);
        if (msg == "Email not verifed !") {
          setIuser(false)
          // alert("Email not verifed")
          // navigate('/sign-in');

        } else if (msg == "Email verifed !") {

          setIuser(true);
        }
        else {
          setIuser(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });





  }, [local])





  return (
    <>

      <div className='bg-gray-800 sticky top-0 w-[100%] z-50'>

        <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
          <a href="/" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-white">

            Incre<span className='text-blue-600'>dibles</span>
          </a>



          <div className="absolute right-7  cursor-pointer text-blue-600">

            {iuser ? (
              <a href='/profile'>
                <img
                  src="/icons89.png"
                  alt="Profile Icon"
                  className="w-12 md:top-3 top-2 h-12"
                />
              </a>
            ) : (
              <a href='/sign-in' className="rounded-full border-2 md:top-5 border-white px-6 py-1  font-medium text-white transition-colors hover:bg-white hover:text-gray-700">
                Login
              </a>
            )}
          </div>



        </header>
      </div>


    </>

  );
};

export default Navbar;
