import { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    'receive.png',
    'update.png',
    'wallet.png',
    'sideimage.png',
    'wallet.png'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            className="w-full flex-shrink-0" 
            alt={`Slide ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
