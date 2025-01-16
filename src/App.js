import React from 'react';
import { FancyLoader } from './react-fancy-loader/src';

const App = () => {
  const handleComplete = () => {
    console.log("Loading complete!");
  };

  // Example of customization
  const customTheme = {
    background: 'bg-slate-900',
    text: 'text-white',
    secondaryBackground: 'bg-slate-800',
    progressBackground: 'bg-slate-700',
    progressBar: 'bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500'
  };

  return (
    <FancyLoader 
      onComplete={handleComplete}
      theme={customTheme}
      progressInterval={50}
      progressIncrement={0.3}
    />
  );
};

export default App;
