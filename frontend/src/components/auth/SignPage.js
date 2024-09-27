
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignPage = () => {
  const [state, setState] = useState(true);
  const [Email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const backUrl = process.env.REACT_APP_URL;
  console.log(backUrl);
  const navigate = useNavigate();

  const checking = Email.length > 0;

  const showForm = (event) => {
    event.preventDefault();
    if (checking) {
      axios.post(`${backUrl}/user/EmailRegister`, { Email }, { withCredentials: true })
        .then((res) => {
          const mes = res.data.message;
          console.log(res);
          if (mes === "user already exist!") {
            alert(res.data.message);
          } else if (mes === "Error is sending Email !") {
            alert(res.data.message);
          } else {
            if (res.data.user == null || res.data.user.verifed === false) {
              setState(false);
            } else {
              navigate('/deals');
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Please Enter Your Email Address');
    }
  };

  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 3) {
        otpRefs[index + 1].current.focus(); // Move to the next input
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default backspace behavior
      const newOtp = [...otp];

      if (newOtp[index] === "") {
        if (index > 0) {
          newOtp[index - 1] = ""; // Clear the previous input
          otpRefs[index - 1].current.focus(); // Focus on the previous input
        }
      } else {
        newOtp[index] = ""; // Clear the current input
      }

      setOtp(newOtp);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpCode = otp.join('');
    console.log(otpCode)
    axios.post(`${backUrl}/user/Otpverfiy`, { Otp: otpCode }, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg;
        if (msg === "Email Doesn't match" || msg === "Otp Doesn't Match") {
          console.log(res)
          alert(res.data);
        } else {
          navigate('/user-form');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className={`justify-center ${state ? "block" : "hidden"}`}>
        
          <form className="max-w-sm mx-auto p-4 rounded-lg border">
            <div className="mx-auto mb-4 space-y-3">
              <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
              <p className="text-gray-500">Verify Email to access your account</p>
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email</label>
              <input type="email" id="email" onChange={e => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@xyz1234.com" required />
            </div>
            <button type="submit" onClick={showForm}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Send OTP
            </button>
          </form>
        </div>







        <div className={`justify-center ${state ? "hidden" : "block"}`}>
          <div className="max-w-md p-4  border mx-auto  text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
            <header className="mb-8">
              <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email id.</p>
            </header>

            <form id="otp-form" onSubmit={handleSubmit}>
              <div className="flex items-center  justify-center gap-3">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
                  />
                ))}
              </div>
              <div className="max-w-[260px] mx-auto mt-4">
                <button type="submit"
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                  Verify Account
                </button>
              </div>
            </form>

            <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignPage;
