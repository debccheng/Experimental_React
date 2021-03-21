import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Slider from './components/Slider';

function App() {
  const [points, setPoints] = useState<number>(10);
  const [multiplier, setMultiplier] = useState<number>(2);
  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(parseInt(e.target.value));
  }
  const handleMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplier(parseInt(e.target.value));
  }
  return (
    <div className="App">
      <Canvas
        width={600}
        height={600}
        numOfPoints={points}
        multiplier={multiplier}
      />
      <div className="sliders">
        <Slider
          label="Number of Points"
          name="numOfPoints"
          min={2}
          max={300}
          value={points}
          handleChange={handlePointsChange}
        />
        <Slider
          label="Multiplier"
          name="multiplier"
          min={2}
          max={300}
          value={multiplier}
          handleChange={handleMultiplierChange}
        />
      </div>
    </div>
  );
}

export default App;
