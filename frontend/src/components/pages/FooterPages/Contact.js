import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="bg-white ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 DARK:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 DARK:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 DARK:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 DARK:bg-gray-700 DARK:border-gray-600 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500 DARK:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 DARK:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 DARK:bg-gray-700 DARK:border-gray-600 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500 DARK:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 DARK:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 DARK:bg-gray-700 DARK:border-gray-600 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-white bg-gray-700 text-sm font-medium text-center   rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 DARK:hover:bg-primary-700 DARK:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Contact