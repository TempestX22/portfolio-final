import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleOptionClick = (option: string, icon: string) => {
    setSelectedOption(option);
    setSelectedIcon(icon);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: selectedIcon && selectedOption !== 'Voice Acting' ? `url(${selectedIcon})` : 'none',
        backgroundSize: '100px 100px', // Adjust size of repeated icons
        backgroundRepeat: 'repeat', // Tiled effect
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div className="Main">
        <Sidebar
          onOptionClick={(option, icon) => handleOptionClick(option, icon)}
        />
        <Content selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default App;
