# JS Ripple Effect

A lightweight, vanilla JavaScript library that adds Material Design ripple effect to your web elements. No dependencies required.

## Features

- Pure vanilla JavaScript (no jQuery or other dependencies)
- Lightweight and performant
- Material Design inspired
- Easy to integrate
- Customizable ripple colors
- Works on any clickable element

## Installation

### Option 1: Direct Include (Recommended for Quick Start)

1. Copy the files to your project:

   - `src/ripple.js`
   - `src/ripple.css`

2. Include them in your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="path/to/ripple.css" />
  </head>
  <body>
    <!-- Your content here -->

    <script src="path/to/ripple.js"></script>
  </body>
</html>
```

### Option 2: Build from Source

If you want to use the compiled version:

```bash
# Install dependencies
npm install

# Build the library
npm run build
```

Then use the compiled file from `lib/ripple.js`:

```html
<link rel="stylesheet" href="path/to/ripple.css" />
<script src="path/to/lib/ripple.js"></script>
```

## Usage

### Basic Usage

Add the `ripple` class to any element you want to have the ripple effect:

```html
<button class="ripple">Click me</button>
```

### Using data-ripple Attribute

Alternatively, use the `data-ripple` attribute:

```html
<button data-ripple>Click me</button>
```

### Dark Ripple

For elements with dark backgrounds, add the `ripple--dark` class to get a dark ripple effect:

```html
<button class="ripple ripple--dark">Dark Button</button>
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ripple Effect Demo</title>
    <link rel="stylesheet" href="src/ripple.css" />

    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 1rem;
        background: #f5f5f5;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
        transition: box-shadow 0.2s;
      }

      .btn:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .btn-primary {
        background: #2196f3;
        color: white;
      }

      .btn-secondary {
        background: #e0e0e0;
        color: #333;
      }
    </style>
  </head>
  <body>
    <!-- Light ripple on dark button -->
    <button class="btn btn-primary ripple">Primary Button</button>

    <!-- Dark ripple on light button -->
    <button class="btn btn-secondary ripple ripple--dark">
      Secondary Button
    </button>

    <!-- Using data-ripple attribute -->
    <button data-ripple class="btn btn-primary">Another Button</button>

    <script src="src/ripple.js"></script>
  </body>
</html>
```

## How It Works

1. The script listens for click events on the entire document
2. When an element with `ripple` class or `data-ripple` attribute is clicked, it:
   - Creates a circular `<span>` element (the ripple)
   - Positions it at the click location
   - Animates it outward using CSS animations
   - Removes the animation class after completion

## Customization

### Changing Ripple Color

Edit the CSS in [src/ripple.css](src/ripple.css):

```css
/* Light ripple (default) */
.ripple__ink {
  background: #fff; /* Change to any color */
  opacity: 0.2;
}

/* Dark ripple */
.ripple--dark .ripple__ink {
  background: #000; /* Change to any color */
}
```

### Adjusting Animation Duration

Modify the animation duration in [src/ripple.css](src/ripple.css):

```css
.ripple__ink--animated {
  animation: ripple 400ms linear; /* Change 400ms to desired duration */
}
```

### Changing Ripple Size

Adjust the scale factor in the keyframes:

```css
@keyframes ripple {
  100% {
    transform: scale(2.5); /* Change 2.5 to increase/decrease ripple size */
  }
}
```

## Browser Support

Works in all modern browsers that support:

- ES6 Arrow Functions
- Template Literals
- CSS Animations

Includes vendor prefixes for older browser compatibility.

## Requirements

### For Direct Use

- No dependencies
- Just include the CSS and JS files

### For Development/Building

- Node.js 14+ (for npm)
- npm or yarn

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Clean build artifacts
npm run clean
```

## File Structure

```
js-ripple-effect/
├── src/
│   ├── ripple.js      # Source JavaScript
│   └── ripple.css     # Ripple effect styles
├── lib/
│   └── ripple.js      # Compiled JavaScript (generated)
├── index.html         # Demo/example page
├── package.json       # Project configuration
└── README.md         # This file
```

## License

Open source - feel free to use in your projects.

## Demo

Open [demo/index.html](demo/index.html) in your browser to see a live demo of the ripple effect.

## Tips

1. Make sure parent elements have `position: relative` (the `.ripple` class handles this)
2. Use `overflow: hidden` on the element to contain the ripple within boundaries
3. The effect works best on elements with defined dimensions
4. For custom shapes, you may need to adjust the CSS
