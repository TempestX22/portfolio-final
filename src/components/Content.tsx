import React, { useState } from 'react';


interface ContentProps {
  selectedOption: string | null;
}

const Content: React.FC<ContentProps> = ({ selectedOption }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const contentMapping: Record<string, { title: string; link: string; img: string }[]> = {
    '3D Art': [
      { title: '3D Model 1', link: '/3d-model-1', img: '/imgs/3d-1.jpg' },
    ],
    '2D Art': [
      { title: '2D Sketch 1', link: '/2d-sketch-1', img: '/imgs/2d-1.png' },
    ],
    'Voice Acting': [
      { title: 'Voice Clip 1', link: '/voice-clip-1', img: '/imgs/va-1.jpg' },
    ],
    'Games': [
      { title: 'Space Defenders', link: '../pages/game1.html', img: 'images/gm-tbn.png' },
    ],
  };

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
          {/* For non-2D Art and 3D Art items, the link should function normally */}
          {selectedOption === 'Games' ? (
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