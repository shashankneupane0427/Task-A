
#  TASK A / Card Carousel

<img src="./assets/image.PNG">

## Overview

This project implements a 3D card carousel with draggable functionality using HTML, CSS, and JavaScript. The carousel displays three cards that rotate between top, middle, and bottom positions, allowing users to interact with it through dragging. The cards have dynamic 3D effects, gradient backgrounds, and detailed animations.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Technology Choices and Rationale](#technology-choices-and-rationale)
- [Known Limitations/Trade-offs](#known-limitationstrade-offs)
- [Future Improvements](#future-improvements)

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shashankneupane0427/Task-A.git
   ```

2. **Open the project folder**:
   Navigate to the folder where the repository was cloned.

3. **Open `index.html` in your browser**:
   - Simply double-click the `index.html` file to view the card carousel in your browser.
   - Alternatively, if you prefer, you can open the file through any local web server setup (e.g., using VS Code's Live Server extension).

4. **Verify files**:
   Ensure that the following files are present in the project:
   - `index.html` (Main HTML structure)
   - `styles.css` (Styling for the carousel)
   - `script.js` (JavaScript for handling interactions)

That's it! The carousel should now be running in your browser.

## Technology Choices and Rationale

1. **HTML**:
   - Simple and semantic HTML structure for the carousel.
   - Easily extensible and easy to integrate into any other web project.

2. **CSS**:
   - **Flexbox**: Used for positioning content within the card and centering elements effectively.
   - **CSS Transitions**: Smooth animations for rotating cards and interactive hover effects.
   - **Backdrop Filter**: Achieved the blurred background effect for the cards to enhance the 3D feel.

3. **JavaScript**:
   - Handles user interaction via mouse events for dragging the cards.
   - Allows for card cycling and positioning updates through event listeners and functions.
   - Uses state variables to keep track of the currently displayed card, ensuring seamless transitions.

4. **CSS Variables** (Optional for future improvements):
   - Could be added to facilitate easy theme switching and customization of card styles.

## Known Limitations/Trade-offs

1. **Limited Card Count**:
   - The carousel only supports three cards. For a dynamic number of cards, additional logic and DOM manipulation would be needed.

2. **Mobile Responsiveness**:
   - The carousel works well on desktop and larger screens, but mobile devices might experience some issues due to the fixed width and height settings.
   - Touch support for mobile devices is not implemented and would need to be added for a fully responsive experience.

3. **3D Effects**:
   - The 3D card effects are reliant on the `transform-style` and `perspective` properties. While visually appealing, they may cause performance issues on older devices or low-performance browsers.

4. **No Fallbacks for Older Browsers**:
   - The project uses modern CSS features like `backdrop-filter` and `transform`, which may not be supported in older browsers. For full compatibility, polyfills or fallbacks would need to be added.

## Future Improvements

1. **Dynamic Card Addition**:
   - Implement functionality to dynamically add or remove cards, adjusting the carousel behavior accordingly.

2. **Touch Support**:
   - Add touch event listeners for mobile devices to support drag functionality on touchscreens.

3. **Infinite Looping**:
   - Modify the card cycling logic to allow the carousel to loop infinitely in both directions, instead of only cycling once.

4. **Customization Options**:
   - Allow users to customize card content, such as text and images, through an interface or external data input (e.g., JSON).

5. **Accessibility**:
   - Improve accessibility by adding keyboard navigation and ARIA attributes to allow screen reader users to interact with the carousel.

