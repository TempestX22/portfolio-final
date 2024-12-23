import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const backgrounds: Record<string, string> = {
    '3D Art': 'url(../images/bg-1.jpg)',
    '2D Art': 'url(./images/bg-2.jpg)',
    'Voice Acting': 'url(./imgs/bg-1.jpg)',
    'Games': 'url(./images/bg-4.jpg)',
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: selectedOption ? backgrounds[selectedOption] : 'none',
      }}
    >
      <Header />
      <div className="Main">
        <Sidebar onOptionClick={handleOptionClick} />
        <Content selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default App;
