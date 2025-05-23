import React, { useState } from 'react';
import Slideshow from './Slideshow';

interface ContentProps {
  selectedOption: string | null;
}

 // Import at the top

// Inside the component render logic


const Content: React.FC<ContentProps> = ({ selectedOption }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const contentMapping: Record<string, { title: string; link: string; img: string; audio: string }[]> = {
    '3D Art': [
      { title: '3D Model 1', link: '/3d-model-1', img: '/imgs/3d-1.jpg', audio: '' },
    ],
    '2D Art': [
      { title: 'Self Sketch', link: '/2d-sketch-1', img: '/imgs/2d-1.png', audio: '' },
      { title: 'Anim 1', link: '/Anim 1', img: '/images/IntroAnim.gif', audio: '' },
      { title: 'Fanmon', link: '/Fanmon', img: '/images/fanmon.png', audio: '' },
      { title: 'Environment Art #1', link: '/environment art #1', img: '/images/environment.png', audio: '' },
    ],
    'Voice Acting': [
      { title: 'Voice Clip 1', link: '', img: '', audio: '/audio/' },
    ],
    'Games': [
      { title: 'Space Defenders', link: '/game1.html', img: '/images/gm-tbn.png', audio: '' },
    ],
  };

  // Handle "About Me" separately
  if (selectedOption === 'About Me') {
    return (
      <div className="AboutMe">
        <img src="/imgs/me-pic.jpg" alt="My Photo" className="AboutMe-Image" />
        <h1 className="AboutMe-Name">Junior Esteban</h1>
        <p className="AboutMe-Description">
        I'm a Dominican-born creative who moved to the U.S at a young age, bringing with me a deep love for art and storytelling. 
        From childhood, I was drawn to the imaginative world of game development and the creativity it inspires. Over the years, 
        that passion has grown into a drive to create immersive, visually compelling experiences. I enjoy exploring different 
        artistic avenues, constantly pushing myself to learn and evolve. Whether through drawing, design, or interactive projects, 
        I aim to bring a unique perspective and energy to everything I create.

        </p>

        <div className="SocialIcons">
    <a href="https://github.com/TempestX22" target="_blank" rel="noopener noreferrer">
      <img src="\images\GitHub-logo.png" alt="GitHub" />
    </a>
    {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src="/imgs/icons/twitter.png" alt="Twitter" />
    </a> */}
    <a href="https://www.linkedin.com/in/junior-esteban-4070x/" target="_blank" rel="noopener noreferrer">
      <img src="/images/linkedin.png" alt="LinkedIn" />
    </a>
    {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src="/imgs/icons/instagram.png" alt="Instagram" />
    </a> */}
    </div>
    </div>
    );
  }

  if (selectedOption === 'Resume') {
    return (
      <div className="ResumeSection">
        <img
          src="/images/JEResume.png" // Replace with your actual resume image path
          alt="My Resume"
          className="ResumeImage"
        />
      </div>
    );
  }

  if (!selectedOption) {
  return <Slideshow />;
  }

  const items = selectedOption ? contentMapping[selectedOption] : [];

  // Handle click to expand image for 2D Art and 3D Art
  const handleImageClick = (imgSrc: string) => {
    if (expandedImage === imgSrc) {
      setExpandedImage(null); // Close the expanded image if clicked again
    } else {
      setExpandedImage(imgSrc); // Expand the image
    }
  };

  // Handle click outside the image to close the modal
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setExpandedImage(null); // Close the modal if clicking outside the image
    }
  };

  return (
    <div className="ContentGrid">
      {items.map((item, index) => (
        <div key={index} className="ContentItem">
          {/* For Voice Acting, render audio player instead of image */}
          {selectedOption === 'Voice Acting' ? (
            <div>
              <h3>{item.title}</h3>
              <audio controls>
                <source src={item.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ) : selectedOption === 'Games' ? (
            <a href={item.link}>
              <img
                src={item.img}
                alt={item.title}
                className={expandedImage === item.img ? 'expanded-image' : ''}
              />
              <div className="Overlay">{item.title}</div>
            </a>
          ) : (
            <div onClick={() => handleImageClick(item.img)}>
              <img
                src={item.img}
                alt={item.title}
                className={expandedImage === item.img ? 'expanded-image' : ''}
              />
              <div className="Overlay">{item.title}</div>
            </div>
          )}

          {/* Only show expanded image if clicked */}
          {expandedImage === item.img && (selectedOption === '2D Art' || selectedOption === '3D Art') && (
            <div className="ExpandedText">{item.title}</div>
          )}
        </div>
      ))}

      {/* Modal to display the expanded image centered */}
      {expandedImage && (selectedOption === '2D Art' || selectedOption === '3D Art') && (
        <div className="Modal" onClick={handleModalClick}>
          <div className="ModalContent">
            <img src={expandedImage} alt="Expanded" className="ModalImage" />
            <div className="ModalText">
              {items.find(item => item.img === expandedImage)?.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
