import React from 'react';

interface SliderProps {
  label: string;
  name: string;
  min: number;
  max: number
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = ({label, name, min, max, value, handleChange}: SliderProps) => {
  return (
    <div className="slider-wrapper">
      <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <div className="slider-value">
          {value}
        </div>
    </div>
  );
}

export default Slider;
