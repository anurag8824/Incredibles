import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])


  return (
    <div>Welcome to Incredibles</div>
  )
}

export default DashBoard