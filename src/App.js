import React, { useState, useEffect } from 'react';
import {
  Binary,
  Database,
  Cpu,
  Network,
  Wifi,
  BarChart,
  Brain,
  GitBranch,
  TreePine
} from 'lucide-react';

const stepsData = [
  {
    text: "Initializing quantum processors...",
    Icon: Cpu,
    color: "text-blue-500"
  },
  {
    text: "Connecting to neural networks...",
    Icon: Network,
    color: "text-purple-500"
  },
  {
    text: "Training decision trees...",
    Icon: TreePine,
    color: "text-green-500"
  },
  {
    text: "Processing binary matrices...",
    Icon: Binary,
    color: "text-red-500"
  },
  {
    text: "Analyzing big data clusters...",
    Icon: Database,
    color: "text-yellow-500"
  },
  {
    text: "Optimizing network pathways...",
    Icon: Wifi,
    color: "text-indigo-500"
  },
  {
    text: "Generating predictive models...",
    Icon: BarChart,
    color: "text-pink-500"
  },
  {
    text: "Synthesizing AI algorithms...",
    Icon: Brain,
    color: "text-cyan-500"
  },
  {
    text: "Finalizing computation graphs...",
    Icon: GitBranch,
    color: "text-orange-500"
  }
];

const FancyLoader = ({ steps, onComplete }) => {
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
        return prev + 0.5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(stepTimer);
  }, []);

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.Icon;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl space-y-8">
        {/* Main progress indicator */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Advanced Analysis in Progress</h1>
          <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xl font-semibold animate-pulse-slow">{Math.floor(progress)}% Complete</p>
        </div>

        {/* Current operation display */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className={`animate-spin ${currentStepData.color}`}>
              <IconComponent size={32} />
            </div>
            <p className="text-lg">{currentStepData.text}</p>
          </div>
        </div>

        {/* Fake data streams */}
        <div className="grid grid-cols-2 gap-4 font-mono">
          <div className="bg-gray-800 p-4 rounded overflow-hidden">
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
          <div className="bg-gray-800 p-4 rounded overflow-hidden">
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
            <div key={i} className="bg-gray-800 p-4 rounded text-center">
              <p className="text-gray-400 text-sm">{metric.label}</p>
              <p className="text-lg font-bold animate-pulse">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const handleComplete = () => {
    alert("Loading complete!");
  };

  return (
    <FancyLoader steps={stepsData} onComplete={handleComplete} />
  );
};

export default App;
