import React, { useState } from 'react';

export function WeightInputScreen({ title, subtitle, placeholder, buttonText, initialValue, onNext, onSkip ,onBack}) {
  const [weight, setWeight] = useState(initialValue || '');
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-white">
      <div className="absolute top-5 left-5 cursor-pointer p-1" onClick={onBack}>
        <img src="static/img/black-arrow.svg" alt="black-arrow"></img>
      </div>
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" fill="black"/>
        <path d="M8 16L12 12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="8" r="2" fill="white"/>
      </svg>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-base mb-5 max-w-xs">{subtitle}</p>
      <div className="relative w-full max-w-xs mb-5">
        <label htmlFor="weight-input" className="block text-left text-sm font-medium text-gray-700 mb-1">{placeholder}</label>
        <input
          id="weight-input"
          type="text"
          placeholder={placeholder}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 text-base border border-gray-300 rounded-lg"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400">KG</span>
      </div>
      <div className="flex justify-between w-full max-w-xs mb-5">
        <button onClick={onSkip} className="text-gray-500">Skip</button>
        <button onClick={onNext} className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-full">{buttonText}</button>
      </div>
    </div>
  );
}

export default WeightInputScreen;