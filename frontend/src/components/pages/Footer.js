import React, { useEffect } from 'react';
import { FaHome, FaTags, FaUser } from 'react-icons/fa';
import { FaBarsProgress } from 'react-icons/fa6';

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Footer = () => {

  // const navigate = useNavigate();


  // useEffect(() => {
  //   axios.get('https://back-ecom-six.vercel.app/user/me', { withCredentials: true })
  //     .then((res) => {
  //       const msg = res.data.msg
  //       if (msg == "Email not verifed !") {
  //         // alert("Please Verify your email")
  //         navigate('/sign-in');

  //       } else if (msg == "Email verifed !") {
  //         navigate('/deals');
  //       }
  //     })
  // })


  return (

    <div className=''>


      {/* Desktop View  */}
      <footer className="bg-gray-800 md:block hidden">
        <div className="mx-auto grid max-w-screen-xl gap-x-12 gap-y-8 px-4 py-8 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="text-2xl font-bold text-white">Incre<span className="text-blue-600">dibles</span>.</span>
            </div>
            <div className="text-white">Shop. Earn. Repeat – Unlock Rewards and Cashback with Every Purchase!</div>
          </div>
          <div className="">
            <div className="mb-2 mt-4 font-medium text-blue-600 xl:mb-4">Address</div>

            <div className="text-white pb-2">
              Near Sagar Enclave,<br />
              Mangyawas-302020 <br />
              (Jaipur Office)
              <hr />

            </div>

            <div className="text-white pb-2">
              729 Transport Nagar, <br />
              Transport Nagar-211011 <br />
              (Allahabad Office)

            </div>
            <hr />

            <div className="text-white">
              10/42-Nehru Nagar, <br />
              Sethi House-110065 <br />
              (Delhi Office)
            </div>

          </div>
          <div className="">
            <div className="mb-2 mt-4 font-medium text-blue-600 xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" className="text-gray-500">

              <ul className="space-y-3">
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/about-us">About Us</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/contact">Contact</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/faq">FAQ's</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/terms-of-service">Terms of Service</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className="mb-2 mt-4 font-medium text-white xl:mb-4">Subscribe to our Newsletter</div>
            <div className="flex flex-col">
              <div className="mb-4">
                <input type="email" className="mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 text-gray-800 focus:outline-none focus:outline focus:ring-1 focus:ring-blue-600 sm:w-80" placeholder="Enter your email" />
                <button className="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="bg-gray-800">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-white sm:flex-row sm:justify-between sm:text-left">
            <div className="">© 2024 Incredibles | All Rights Reserved</div>
            <div className="">
              <a className="" href="#">Privacy Policy</a>
              <span>|</span>
              <a className="" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>




      {/* Mobile View  */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden justify-around items-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-4">
        <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaHome size={36} />
          <span className="sr-only">Home</span>
        </a>
        <a href="/deals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaTags size={36} />
          <span className="sr-only">My Order</span>
        </a>

        <a href="/deal-status" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaBarsProgress  size={36} />
          <span className="sr-only">My Status</span>
        </a>

        <a href="/profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaUser size={36} />
          <span className="sr-only">Wallet</span>
        </a>
      </div>


    </div>


  );
};

export default Footer;

