# React Fancy Loader

A customizable loading screen component for React applications featuring animated progress bars, fake data streams, and dynamic status messages.

## Features

- Animated progress bar with customizable speed and increments
- Dynamic status messages with icons
- Fake data streams for visual appeal
- Customizable theme using Tailwind CSS classes
- Responsive design
- TypeScript support

## Installation

1. Install the package and its peer dependencies:

```bash
npm install react-fancy-loader lucide-react tailwindcss
```

2. Configure Tailwind CSS in your project if not already set up:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Update your tailwind.config.js to include the necessary paths:

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-fancy-loader/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
```

4. Import Tailwind CSS in your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

Basic example:

```jsx
import { FancyLoader } from 'react-fancy-loader';

function App() {
  const handleComplete = () => {
    console.log("Loading complete!");
  };

  return <FancyLoader onComplete={handleComplete} />;
}
```

Customized example:

```jsx
import { FancyLoader } from 'react-fancy-loader';

function App() {
  const handleComplete = () => {
    console.log("Loading complete!");
  };

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
      stepInterval={3000}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| steps | Step[] | defaultSteps | Array of loading steps with text and icons |
| onComplete | () => void | undefined | Callback when loading reaches 100% |
| className | string | '' | Additional CSS classes |
| progressInterval | number | 100 | Interval between progress updates (ms) |
| stepInterval | number | 3000 | Interval between step changes (ms) |
| progressIncrement | number | 0.5 | Progress increment per update |
| theme | Theme | defaultTheme | Custom theme configuration |

## Theme Customization

The theme object accepts Tailwind CSS classes for various elements:

```typescript
interface Theme {
  background: string;        // Main background
  text: string;             // Text color
  secondaryBackground: string; // Secondary elements background
  progressBackground: string;  // Progress bar background
  progressBar: string;        // Progress bar fill
}
```

## Future Improvements

1. Animation Enhancements
   - Add more animation options for progress bar
   - Include transition effects between steps
   - Add optional particle effects in background

2. Customization
   - Support for custom step components
   - More theme options (sizes, fonts, spacing)
   - Custom animation timing functions
   - Option to disable specific features (data streams, metrics)

3. Performance
   - Optimize animations for better performance
   - Reduce bundle size
   - Add lazy loading option for icons

4. Accessibility
   - Add ARIA attributes
   - Improve screen reader support
   - Add high contrast theme option

5. Developer Experience
   - Add more comprehensive documentation
   - Include more usage examples
   - Add unit tests
   - Add storybook documentation
   - Add CI/CD pipeline

6. Features
   - Add error state handling
   - Support for progress estimation
   - Add different loader styles/variants
   - Support for custom metrics display
   - Add sound effects option

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
