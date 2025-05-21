import React, { useEffect, useState} from 'react';
import './Slideshow.css';

const images = [
  '/images/fanmon.png',
  '/images/environment.png',
  '/images/IntroAnim.gif',
  // Add more image paths here
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="SlideshowWrapper">
      <div className="SlideTrack">
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`Slide ${
                isActive ? 'active' : isPrev || isNext ? 'adjacent' : 'hidden'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slideshow;