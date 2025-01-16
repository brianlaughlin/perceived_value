import React, { useState, useEffect } from 'react';
import { defaultStepsData } from '../config/defaultSteps';

const FancyLoader = ({ 
  steps = defaultStepsData,
  onComplete,
  className = '',
  progressInterval = 100,
  stepInterval = 3000,
  progressIncrement = 0.5,
  theme = {
    background: 'bg-gray-900',
    text: 'text-white',
    secondaryBackground: 'bg-gray-800',
    progressBackground: 'bg-gray-700',
    progressBar: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
  }
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          if (onComplete) {
            onComplete();
          }
          return 100;
        }
        return prev + progressIncrement;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [progressInterval, progressIncrement, onComplete]);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, stepInterval);

    return () => clearInterval(stepTimer);
  }, [stepInterval, steps.length]);

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.Icon;

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text} p-8 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-2xl space-y-8">
        {/* Main progress indicator */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Advanced Analysis in Progress</h1>
          <div className={`relative h-4 ${theme.progressBackground} rounded-full overflow-hidden`}>
            <div 
              className={`absolute h-full ${theme.progressBar} transition-all duration-300 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xl font-semibold animate-pulse-slow">{Math.floor(progress)}% Complete</p>
        </div>

        {/* Current operation display */}
        <div className={`${theme.secondaryBackground} rounded-lg p-6 shadow-lg`}>
          <div className="flex items-center space-x-4">
            <div className={`animate-spin ${currentStepData.color}`}>
              <IconComponent size={32} />
            </div>
            <p className="text-lg">{currentStepData.text}</p>
          </div>
        </div>

        {/* Fake data streams */}
        <div className="grid grid-cols-2 gap-4 font-mono">
          <div className={`${theme.secondaryBackground} p-4 rounded overflow-hidden`}>
            <div className="animate-pulse space-y-1">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="text-xs overflow-hidden whitespace-nowrap opacity-70">
                  {Array.from({ length: 32 }, () => 
                    Math.floor(Math.random() * 16).toString(16)
                  ).join('')}
                </div>
              ))}
            </div>
          </div>
          <div className={`${theme.secondaryBackground} p-4 rounded overflow-hidden`}>
            <div className="animate-pulse space-y-1">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="text-xs overflow-hidden whitespace-nowrap opacity-70">
                  {Array.from({ length: 48 }, () => 
                    Math.floor(Math.random() * 2)
                  ).join('')}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Random metrics */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Memory Usage", value: `${85 + Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 9)}GB` },
            { label: "CPU Load", value: `${90 + Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}%` },
            { label: "Network I/O", value: `${1 + Math.floor(Math.random() * 2)}.${Math.floor(Math.random() * 9)}TB/s` }
          ].map((metric, i) => (
            <div key={i} className={`${theme.secondaryBackground} p-4 rounded text-center`}>
              <p className="text-gray-400 text-sm">{metric.label}</p>
              <p className="text-lg font-bold animate-pulse">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FancyLoader;
