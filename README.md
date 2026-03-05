# TD10 - CSS Orbit Animation Notes

## 1) What the animation does

The washing machine image now follows a visible circular orbit instead of only spinning in place. I used a shifted `transform-origin` so rotation happens around a point below the image.

## 2) Keyframe breakdown

- `0%`: `rotate(0deg) scaleY(1)` → starting point, normal shape.
- `70%`: `rotate(360deg) scaleY(1)` → one full circular orbit around the custom pivot.
- `80%`: `rotate(360deg) scaleY(1.1)` → slight vertical squeeze/stretch to simulate vibration.
- `100%`: `rotate(360deg) scaleY(1)` → reset shape before next loop.

## 3) How to run locally

1. Open the `TD10` folder.
2. Open `index.html` in a browser.
3. You should see the machine image moving in a circular path with a small bounce effect.

## 4) Challenges and how I solved them

- **Challenge:** initial animation looked like spinning in place.
- **Fix:** added `transform-origin: 50% 145%` so rotation uses an external pivot and creates orbital motion.
- **Challenge:** motion looked too rigid.
- **Fix:** kept a short `scaleY` phase at `80%` for a machine-like vibration.
