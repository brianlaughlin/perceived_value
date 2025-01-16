import React, { useState, useEffect } from 'react';
import { Cpu, Network, TreePine, Binary, Database, Wifi, BarChart, Brain, GitBranch } from 'lucide-react';

var defaultStepsData = [
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

var defaultTheme = {
    background: 'bg-gray-900',
    text: 'text-white',
    secondaryBackground: 'bg-gray-800',
    progressBackground: 'bg-gray-700',
    progressBar: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
};
var FancyLoader = function (_a) {
    var _b = _a.steps, steps = _b === void 0 ? defaultStepsData : _b, onComplete = _a.onComplete, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.progressInterval, progressInterval = _d === void 0 ? 100 : _d, _e = _a.stepInterval, stepInterval = _e === void 0 ? 3000 : _e, _f = _a.progressIncrement, progressIncrement = _f === void 0 ? 0.5 : _f, _g = _a.theme, theme = _g === void 0 ? defaultTheme : _g;
    var _h = useState(0), progress = _h[0], setProgress = _h[1];
    var _j = useState(0), currentStep = _j[0], setCurrentStep = _j[1];
    useEffect(function () {
        var timer = setInterval(function () {
            setProgress(function (prev) {
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
        return function () { return clearInterval(timer); };
    }, [progressInterval, progressIncrement, onComplete]);
    useEffect(function () {
        var stepTimer = setInterval(function () {
            setCurrentStep(function (prev) { return (prev + 1) % steps.length; });
        }, stepInterval);
        return function () { return clearInterval(stepTimer); };
    }, [stepInterval, steps.length]);
    var currentStepData = steps[currentStep];
    var IconComponent = currentStepData.Icon;
    return (React.createElement("div", { className: "min-h-screen ".concat(theme.background, " ").concat(theme.text, " p-8 flex flex-col items-center justify-center ").concat(className) },
        React.createElement("div", { className: "w-full max-w-2xl space-y-8" },
            React.createElement("div", { className: "text-center mb-8" },
                React.createElement("h1", { className: "text-3xl font-bold mb-4" }, "Advanced Analysis in Progress"),
                React.createElement("div", { className: "relative h-4 ".concat(theme.progressBackground, " rounded-full overflow-hidden") },
                    React.createElement("div", { className: "absolute h-full ".concat(theme.progressBar, " transition-all duration-300 ease-out"), style: { width: "".concat(progress, "%") } })),
                React.createElement("p", { className: "mt-2 text-xl font-semibold animate-pulse-slow" },
                    Math.floor(progress),
                    "% Complete")),
            React.createElement("div", { className: "".concat(theme.secondaryBackground, " rounded-lg p-6 shadow-lg") },
                React.createElement("div", { className: "flex items-center space-x-4" },
                    React.createElement("div", { className: "animate-spin ".concat(currentStepData.color) },
                        React.createElement(IconComponent, { size: 32 })),
                    React.createElement("p", { className: "text-lg" }, currentStepData.text))),
            React.createElement("div", { className: "grid grid-cols-2 gap-4 font-mono" },
                React.createElement("div", { className: "".concat(theme.secondaryBackground, " p-4 rounded overflow-hidden") },
                    React.createElement("div", { className: "animate-pulse space-y-1" }, Array.from({ length: 3 }, function (_, i) { return (React.createElement("div", { key: i, className: "text-xs overflow-hidden whitespace-nowrap opacity-70" }, Array.from({ length: 32 }, function () {
                        return Math.floor(Math.random() * 16).toString(16);
                    }).join(''))); }))),
                React.createElement("div", { className: "".concat(theme.secondaryBackground, " p-4 rounded overflow-hidden") },
                    React.createElement("div", { className: "animate-pulse space-y-1" }, Array.from({ length: 3 }, function (_, i) { return (React.createElement("div", { key: i, className: "text-xs overflow-hidden whitespace-nowrap opacity-70" }, Array.from({ length: 48 }, function () {
                        return Math.floor(Math.random() * 2);
                    }).join(''))); })))),
            React.createElement("div", { className: "grid grid-cols-3 gap-4" }, [
                { label: "Memory Usage", value: "".concat(85 + Math.floor(Math.random() * 10), ".").concat(Math.floor(Math.random() * 9), "GB") },
                { label: "CPU Load", value: "".concat(90 + Math.floor(Math.random() * 9), ".").concat(Math.floor(Math.random() * 9), "%") },
                { label: "Network I/O", value: "".concat(1 + Math.floor(Math.random() * 2), ".").concat(Math.floor(Math.random() * 9), "TB/s") }
            ].map(function (metric, i) { return (React.createElement("div", { key: i, className: "".concat(theme.secondaryBackground, " p-4 rounded text-center") },
                React.createElement("p", { className: "text-gray-400 text-sm" }, metric.label),
                React.createElement("p", { className: "text-lg font-bold animate-pulse" }, metric.value))); })))));
};

export { FancyLoader, defaultStepsData };
//# sourceMappingURL=index.esm.js.map
