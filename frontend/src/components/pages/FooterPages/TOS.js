import React from 'react'

const TOS = () => {
  return (
    
  <div class="bg-white mx-3 text-black DARK:bg-black DARK:text-white">
      <div class="container mx-auto px-4 py-8">
        
        <div class='w-full flex'>
          <h1 class="text-3xl font-bold mb-4 text-orange-800">Terms of Service for Your Business </h1>
        </div>
        <br />
        <p class="mb-4 text-base">
        Welcome to Incredibles. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms. Please read them carefully.
        </p>
          <br />
          {/* <!-- repeat this section for each section of terms --> */}
            <div class='pb-5'>
            <h2 class='font-bold text-orange-700 DARK:text-orange-300'>General</h2>
               
                <br /> 
                <ul>
                    <li class='list-disc'>
                        <p class="text-base">
                        By using the Incredibles website and services, you agree to comply with these Terms and all applicable laws and regulations. If you do not agree to these Terms, you are prohibited from using the platform.
                        </p>
                    </li>
                    <br />
                    <li class='list-disc'>
                        <p class="text-base">
                        To use our services, you must be at least 18 years old and have a valid credit card issued by a participating bank or financial institution. By using our platform, you represent that you meet these eligibility requirements.</p>
                    </li>
                    <br />
                    <li class='list-disc'>
                        <p class="text-base">
                        Incredibles provides users with access to cashback and profit offers on credit card purchases. The offers are subject to the terms and conditions specified by the respective partner banks and merchants. We do not guarantee the availability of any particular offer at any time.</p>
                    </li>
                    <br />
                    <li class='list-disc'>
                        <p class="text-base">
                        To access certain features of our platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                    </li>
                </ul>
          </div>
        </div>
    </div>
  )
}

export default TOS