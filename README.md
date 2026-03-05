# TD7 - Responsive Navbar + Hero (Learning Notes)

## 1) Assignment description

Build a responsive hero section with a desktop navbar and a mobile menu.

My focus for this assignment was to make the mobile menu usable with CSS only:

- menu should open from the hamburger icon
- menu should not overlap the navbar
- interaction should feel smooth
- I should understand what CSS pseudo-classes can and cannot do

## 2) My approach to using `:focus` pseudo-class

I first used a pattern like this:

- `.mobile-nav-btn:focus ~ .mobile-nav-links { ... }`

What it does:

- when the menu button gets focus, the sibling menu becomes visible

Why I tried it:

- it is simple
- it uses only CSS
- it helped me learn how state-based styling works with pseudo-classes

## 3) Limitations I discovered (`:focus` menu disappears on blur)

This was the main limitation:

- as soon as focus moves away from the button (tap somewhere else, open keyboard, etc.), menu can disappear

On mobile this felt fragile because users often tap outside while deciding where to go.
So I documented this as a learning limitation of the `:focus` approach.

## 4) What I changed in this version

### a) Menu positioning fix

- changed menu from `top: 0px` to `top: 60px`
- set height to `calc(100vh - 60px)`

Result:

- menu starts below navbar instead of covering it

### b) Added transition for smoother menu appearance

For `.mobile-nav-links`, I added:

- `transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;`
- hidden state uses low opacity + slight translate
- visible state animates to full opacity and neutral position

Result:

- menu feels less abrupt when opening

### c) Implemented checkbox hack (`:checked`) as a more functional CSS-only alternative

I added a hidden checkbox and used:

- `.mobile-menu-toggle:checked ~ .mobile-nav-links { ... }`

Why this is better than only `:focus`:

- menu stays open until user toggles it off
- more predictable on touch devices

I kept the `:focus` selector in CSS as a learning reference and fallback demonstration.

## 5) How to run the project

1. Open the `TD7` folder.
2. Open `index.html` in a browser.
3. Resize to mobile width (below 768px) or use device toolbar in browser dev tools.
4. Tap/click the hamburger icon to open and close menu.

## 6) Mobile usability testing notes

I could not run an actual phone/emulator session from this coding environment, so this is the verification checklist I would run next:

- open on a real phone (or Chrome DevTools device emulator)
- check menu appears below navbar (`top: 60px`)
- verify links are tappable and menu does not close unexpectedly
- confirm opening/closing animation feels smooth
- verify checkbox toggle keeps menu open until toggled off

## 7) What I learned about pseudo-classes and limitations

- Pseudo-classes are great for state-driven UI without JavaScript.
- `:focus` is useful but can be temporary and fragile for menu persistence.
- `:checked` is a practical trick for CSS-only toggles when persistent open/close state is needed.
- Sibling selectors (`~`) are very powerful when HTML structure is planned for them.
- Responsive UI decisions (spacing, offsets, heights) matter as much as basic visibility toggles.

## 8) Personal reflection (not polished, just honest)

I started with a working idea (`:focus`) and only during testing realized it was not very user-friendly on mobile. The biggest improvement came from changing the state model (focus -> checked), not from adding more styling. This assignment helped me think about interaction behavior, not only visual layout.
