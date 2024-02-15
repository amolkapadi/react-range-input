import React, { useState } from 'react';
import './App.css'; // Create an App.css file for styling

function App() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const handleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);

    value = isNaN(value) ? 0 : Math.min(100, Math.max(0, value));

    setSliderValue(value);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="slider-container">
          <label htmlFor="rangeInput">Select a value:</label>
          <input
            type="range"
            id="rangeInput"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <input
            type="number"
            id="textInput"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
