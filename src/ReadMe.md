# Advanced Counter

A feature-rich counter application built with React and TypeScript that demonstrates state management, localStorage persistence, keyboard event handling, and component composition. Perfect for learning React fundamentals with practical features.

## Features

- **Increment & Decrement** - Add or subtract from the counter with customizable step values
- **Custom Step Size** - Specify the amount to increment/decrement with each action
- **Reset Functionality** - Clear the counter back to zero
- **Count History** - Track all changes made to the counter
- **Persistent State** - Counter value is automatically saved to localStorage
- **Keyboard Shortcuts** - Use Arrow Up to increment and Arrow Down to decrement
- **Type-Safe Code** - Full TypeScript support with proper type annotations
- **Responsive Design** - Clean, user-friendly interface

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 6
- **Build Tool**: Vite
- **Styling**: CSS
- **Storage**: Browser localStorage
- **Linting**: ESLint with React support
- **Compiler**: React Compiler via Babel

## Project Structure

```
src/
├── components/
│   └── AdvancedCounter.tsx  # Main counter component
├── App.tsx                   # Root component
├── main.tsx                  # Application entry point
├── App.css                   # Application styles
├── index.css                 # Global styles
└── ReadMe.md                # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```bash
   cd advanced-counter
   ```

3. Install dependencies
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Usage Guide

### Basic Operations

**Incrementing the Counter**

- Click the "Add" button, or
- Press the Up Arrow key on your keyboard

**Decrementing the Counter**

- Click the "Minus" button, or
- Press the Down Arrow key on your keyboard

**Resetting the Counter**

- Click the "Reset" button to set counter to 0 and clear history

### Custom Step Size

1. Enter a number in the input field labeled "choose a number..."
2. Use the Add/Minus buttons or keyboard shortcuts
3. The counter will now increment/decrement by your chosen step value

**Example:**

- Set step to 5
- Click "Add" → counter increases by 5
- Click "Add" again → counter increases by 10 total
- Click "Minus" → counter decreases by 5

### Keyboard Shortcuts

| Key          | Action                            |
| ------------ | --------------------------------- |
| Arrow Up ↑   | Increment counter by current step |
| Arrow Down ↓ | Decrement counter by current step |

### Count History

The history section displays all count values in chronological order as you perform operations. This helps you track:

- The sequence of changes
- How many operations you've performed
- The path the counter has taken

## Component Features

### State Management

The `AdvancedCounter` component manages three pieces of state:

1. **count** - The current counter value
   - Initialized from localStorage if available
   - Otherwise defaults to 0
   - Automatically saved to localStorage on every change

2. **step** - The increment/decrement amount
   - Controlled by the number input
   - Defaults to 1
   - Can be any positive or negative number

3. **history** - Array of all counter values
   - Records every count value after each operation
   - Resets when the counter is reset
   - Displayed as a list of previous values

### Key Implementation Details

**localStorage Persistence**

```typescript
useEffect(() => {
  localStorage.setItem("count", count.toString());
}, [count]);
```

The counter value persists across browser sessions automatically.

**Keyboard Event Handling**

```typescript
useEffect(() => {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowUp") handleAdd();
    else if (event.key === "ArrowDown") handleMinus();
  }

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [count, step]);
```

Keyboard events are managed with proper cleanup to prevent memory leaks.

**Lazy Initial State**

```typescript
const [count, setCount] = useState<number>(() => {
  const savedCount = localStorage.getItem("count");
  return savedCount ? parseInt(savedCount, 10) : 0;
});
```

State is initialized using a function to avoid expensive operations on every render.

## Best Practices Demonstrated

✅ **State Management** - Using useState with proper initialization  
✅ **Side Effects** - Using useEffect for localStorage and event listeners  
✅ **Event Handling** - Keyboard and click event management  
✅ **Type Safety** - TypeScript with strict type annotations  
✅ **Memory Management** - Proper cleanup of event listeners  
✅ **Browser APIs** - localStorage for persistent data  
✅ **User Experience** - Keyboard shortcuts for faster interaction  
✅ **Data Tracking** - History array to track changes

## Learning Outcomes

By studying this project, you'll learn:

- ✅ How to manage multiple pieces of state
- ✅ How to persist state using localStorage
- ✅ How to handle keyboard events in React
- ✅ How to implement cleanup in useEffect
- ✅ How to work with TypeScript in React components
- ✅ How to create a complete application with interactivity
- ✅ How to implement history/undo tracking
- ✅ How to initialize state from external sources

## Potential Enhancements

Here are some ideas for extending this project:

- **Undo/Redo** - Navigate back and forth through history
- **Multiple Counters** - Create and manage multiple independent counters
- **Export History** - Download history as CSV or JSON
- **Themes** - Dark/light mode toggle
- **Animations** - Smooth transitions when counter changes
- **Statistics** - Display min, max, average values
- **Time Tracking** - Record timestamps for each change
- **Limits** - Set minimum and maximum counter values

## Common Issues & Solutions

### Counter not persisting after refresh?

- Check if localStorage is enabled in your browser
- Verify browser's privacy settings allow storage

### Keyboard shortcuts not working?

- Ensure the browser window is in focus
- Some browsers may capture arrow keys for scrolling
- Try clicking on the page first to ensure focus

### Input field not updating step?

- Clear the field and enter a new valid number
- Negative numbers are supported
- Decimal values will be converted to whole numbers

## Contributing

When contributing to this project:

1. Follow the existing code style and structure
2. Maintain TypeScript strict typing
3. Add comments for complex logic
4. Test all features including keyboard shortcuts
5. Verify localStorage functionality works
6. Run `npm run lint` before committing

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Performance Notes

- The React Compiler is enabled for optimized component rendering
- localStorage operations are minimal and efficient
- Event listeners are properly cleaned up to prevent memory leaks
- History array growth is managed by the reset function

## License

This project is part of the 2026-RTT-27 training program.

---

**Last Updated**: 2026-09-11
