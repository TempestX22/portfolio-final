import React, { useState } from 'react';

interface SidebarProps {
  onOptionClick: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOptionClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  // Update options to use image paths
  const options = [
    { id: '3D Art', icon: '../imgs/3d-icon.png' },  // Path to your 3D Art icon
    { id: '2D Art', icon: '../imgs/2d-icon.png' },  // Path to your 2D Art icon
    { id: 'Voice Acting', icon: '../imgs/va-icon.png' },  // Path to your Voice Acting icon
    { id: 'Games', icon: '../imgs/gm-icon.png' },  // Path to your Games icon
  ];

  return (
    <div
      className={`Sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {options.map((option) => (
        <div
          key={option.id}
          className="Sidebar-item"
          onClick={() => onOptionClick(option.id)}
        >
          {/* Render image for icon */}
          <img src={option.icon} alt={option.id} className="Sidebar-icon" />
          <span className="Sidebar-text">{option.id}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;