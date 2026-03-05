# TD9 - Responsive Hero with Machine Animation

## Assignment

Create a responsive navbar + hero section and add a CSS-only animation to the washing machine image.

## Animation approach (`machine`)

- Applied on `.hero-image img` with `animation: machine 2s ease-out infinite;`
- The keyframes combine rotate + translate for movement, then a small `scaleY` bounce to simulate machine vibration.

## What I learned

- Keyframes can chain multiple transforms to create a more natural motion.
- `ease-out` helps the animation feel less robotic.
- Small values (like slight translate/scale) look better than big jumps for UI icons.

## How to run

1. Open the `TD9` folder.
2. Open `index.html` in a browser.
3. Resize viewport to test desktop/tablet/mobile responsiveness.

## Quick limitation note

The animation runs infinitely, so for production I would consider reducing motion for users who prefer less animation.
