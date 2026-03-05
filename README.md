# TD10 - My Simple Animation Practice

## What I built

I made a small page with one image (washing machine) and one animation. The goal was to understand orbit motion, not build a full responsive website.

## What the animation does

The image moves in a circular path by rotating around a point below itself (`transform-origin`).
After one orbit, it does a tiny `scaleY` squeeze so it feels like a machine vibration.

## Keyframes in my words

- `0%`: start position
- `70%`: complete one full orbit (`rotate(360deg)`)
- `80%`: quick squeeze (`scaleY(1.08)`)
- `100%`: back to normal size

## How to run

1. Open `TD10/index.html` in browser.
2. Watch the machine icon move in a circle.

## What confused me + how I solved it

- At first it only looked like spinning in place.
- I learned that `transform-origin` controls the pivot point, so I moved it below the image.
- I kept the CSS simple and added comments saying **why** each keyframe exists.

## Accessibility choices (simple)

- I used a real `<h1>` for the page heading.
- I wrote a clear `alt` text for the image so screen readers can describe it.
