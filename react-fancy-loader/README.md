# React Fancy Loader

A highly customizable and animated loading screen component for React applications.

## Installation

```bash
npm install react-fancy-loader
# or
yarn add react-fancy-loader
```

## Usage

Basic usage with default settings:
```jsx
import { FancyLoader } from 'react-fancy-loader';

function App() {
  const handleComplete = () => {
    console.log('Loading complete!');
  };

  return (
    <FancyLoader onComplete={handleComplete} />
  );
}
```

### Customization

The loader is highly customizable. Here are some examples:

#### Custom Theme
```jsx
const customTheme = {
  background: 'bg-slate-900',
  text: 'text-white',
  secondaryBackground: 'bg-slate-800',
  progressBackground: 'bg-slate-700',
  progressBar: 'bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500'
};

<FancyLoader theme={customTheme} />
```

#### Custom Steps
```jsx
import { Binary, Code, Database } from 'lucide-react';

const customSteps = [
  {
    text: "Compiling source code...",
    Icon: Code,
    color: "text-emerald-500"
  },
  {
    text: "Processing data...",
    Icon: Binary,
    color: "text-sky-500"
  },
  {
    text: "Updating database...",
    Icon: Database,
    color: "text-indigo-500"
  }
];

<FancyLoader steps={customSteps} />
```

#### Custom Timing
```jsx
<FancyLoader 
  progressInterval={50}     // Update progress every 50ms
  stepInterval={2000}      // Switch steps every 2 seconds
  progressIncrement={1}    // Increment progress by 1% each update
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| steps | Array | defaultStepsData | Array of loading steps |
| onComplete | Function | undefined | Callback when loading reaches 100% |
| className | string | '' | Additional CSS classes |
| progressInterval | number | 100 | Progress update interval (ms) |
| stepInterval | number | 3000 | Step switching interval (ms) |
| progressIncrement | number | 0.5 | Progress increment per update |
| theme | Object | defaultTheme | Theme configuration |

### Theme Object Structure
```typescript
interface Theme {
  background: string;         // Main background color
  text: string;              // Text color
  secondaryBackground: string; // Cards background color
  progressBackground: string;  // Progress bar background
  progressBar: string;        // Progress bar gradient
}
```

### Step Object Structure
```typescript
interface Step {
  text: string;              // Step description
  Icon: LucideIcon;          // Lucide React icon component
  color: string;             // Icon color (Tailwind class)
}
```

## Requirements

This package requires the following peer dependencies:
- react >=16.8.0
- react-dom >=16.8.0
- lucide-react >=0.284.0
- tailwindcss >=3.0.0

## Tailwind CSS Configuration

Add the following to your tailwind.config.js to ensure all required classes are included:

```js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/react-fancy-loader/**/*.{js,jsx,ts,tsx}"
  ],
  // ... rest of your config
}
