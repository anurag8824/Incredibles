// import React, { useState, useEffect , useRef  } from 'react';


// const NewCarousal = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const items = [
//     {
//       id: 1,
//       name: 'Anand Ramachandran',
//       date: 'SEP 18, 2024 at 10:36 AM',
//       text: 'Loved the app and support... Major benefits 1. Cashing credit card at negative rates 2. You have to pay your credit card bill after 30-45 days 3. You are basically helping someone buy cheap products by utilizing your credit card 4. Safe and secure.',
//       likes: 12,
//       image: 'profile.png',
//     },
//     {
//       id: 2,
//       name: 'Krishna Kumar',
//       date: 'SEP 20, 2024 at 11:45 AM',
//       text: "Incredibles is really good I'm using it since 4months and I've earned 20-30k, customer service is good not the best but good it needs improvement but only problem is sometimes payment is delayed but never messed with with payment.",
//       likes: 8,
//       image: 'profile.png',
//     },
//     {
//       id: 3,
//       name: 'Anup Singh',
//       date: 'Sep 25, 2024 at 12:50 PM',
//       text: "like the business idea, it definitely works like charm, win win situation for both customer and card holder, Appreciate your hard work team Incredibles. This app should have option to store credentials for e-commerce site",
//       likes: 15,
//       image: 'profile.png',
//     },
//   ];

//   // Carousel logic with forward-only animation
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const carouselRef = useRef(null);

//   // Automatic slide every 1 second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 2000);
//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   // Move to the next slide
//   const handleNext = () => {
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   // After the transition to the "cloned" first slide, reset to the real first slide without animation
//   useEffect(() => {
//     if (currentIndex === items.length) {
//       // Delay to wait for the end of the transition, then reset without animation
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(0);
//       }, 500); // Transition duration should match `duration-500`
//     }
//   }, [currentIndex, items.length]);

//   return (
//     <div className="carousel overflow-hidden mb-10 relative max-w-screen-sm mx-auto my-6">
//       <div
//         ref={carouselRef}
//         className={`carousel-inner flex transition-transform ${
//           isTransitioning ? 'duration-500 ease-in-out' : ''
//         }`}
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
//         }}
//       >
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className=" carousel-item mx-auto max-w-full flex min-w-full flex-shrink-0 rounded-xl border border-gray-900 p-4 text-left text-gray-900 shadow-lg sm:p-8"
//           >
//             <img
//               className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
//               src={item.image}
//               alt="Profile Picture"
//             />
//             <div className="w-full text-left">
//               <div className="mb-1 flex flex-col justify-between text-gray-900 sm:flex-row">
//                 <h3 className="font-medium">{item.name}</h3>
//                 <time className="text-xs" dateTime="2022-11-13T20:00Z">
//                   {item.date}
//                 </time>
//               </div>
//               <p className="text-sm text-gray-900">{item.text}</p>
//               <div className="mt-3 flex items-center justify-between text-white">
//                 <button className="cursor-pointer py-2 px-8 text-center text-sm leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg bg-gray-900">
//                   Reply
//                 </button>
//                 <a
//                   title="Likes"
//                   href="#"
//                   className="group text-gray-900 flex cursor-pointer items-center justify-around"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                   {item.likes}
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Clone of the first slide for smooth looping */}
//         <div
//           className="carousel-item mx-auto flex min-w-full flex-shrink-0 max-w-screen-sm rounded-xl border-2 border-gray-900 p-4 text-left text-gray-900 shadow-lg sm:p-8"
//         >
//           <img
//             className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
//             src={items[0].image}
//             alt="Profile Picture"
//           />
//           <div className="w-full text-left">
//             <div className="mb-2 flex flex-col justify-between text-gray-900 sm:flex-row">
//               <h3 className="font-medium">{items[0].name}</h3>
//               <time className="text-xs" dateTime="2022-11-13T20:00Z">
//                 {items[0].date}
//               </time>
//             </div>
//             <p className="text-sm text-gray-900">{items[0].text}</p>
//             <div className="mt-5 flex items-center justify-between text-white">
//               <button className="cursor-pointer py-2 px-8 text-center text-sm leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg bg-gray-900">
//                 Reply
//               </button>
//               <a
//                 title="Likes"
//                 href="#"
//                 className="group text-gray-900 flex cursor-pointer items-center justify-around"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//                 {items[0].likes}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default NewCarousal;


import React, { useEffect, useState } from 'react';

const CommentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const comments = [
    {
      image: "/profilereview.png",
      comment: "Incredibles is best app for the credit cash rewards. Easy to use and optimized",
      name: "Karan Jain",
      date: "Oct 01, 2024",
      rating: 4,
    },
    {
      image: "/profilereview.png",
      comment: "I got a great cash reward from the credit rewards feature in the Incredibles",
      name: "Shivani Garg",
      date: "Sep 14, 2024",
      rating: 5,
    },
    {
      image: "/profilereview.png",
      comment: "Got the amazing deal offer for buying me a new phone with the best cash back using Incredibles.",
      name: "Anup Kumar",
      date: "May 22, 2024",
      rating: 3,
    },
    {
      image: "/profilereview.png",
      comment: "Amazing! Incredibles is really just a incredible and beautiful. Got highest cash bak reward from it.",  
      name: "Nikhil Kumar",
      date: "June 03, 2024",
      rating: 4,
    },
  ];

  const totalSlides = comments.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // Moves to the next slide, resets if it's the last one
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Adjust the speed of the sliding here (3000ms = 3 seconds)
    
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => (
      <svg
        key={index}
        className={`h-6 w-6 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {comments.map((comment, index) => (
          <div key={index} className="min-w-full p-8 text-left border">
            <div className="flex items-start">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full"
                src={comment.image}
                alt={comment.name}
              />
              <div className="ml-6">
                <div className="flex items-center">
                  {renderStars(comment.rating)}
                </div>
                <p className="mt-5 text-base text-gray-900">{comment.comment}</p>
                <p className="mt-5 text-sm font-bold text-gray-900">{comment.name}</p>
                <p className="mt-1 text-sm text-gray-600">{comment.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentCarousel;
