The AA - Interactive Concept Demo
Project Type: HTML5 Rich Media / Interactive Web Page Theme: "Project Rescue" Tech Stack: Vanilla HTML, CSS, JavaScript

📄 Project Overview
This project is a custom-built interactive web experience designed to demonstrate core competencies in HTML5 Web Banner Development.

The concept translates The AA's brand identity (Roadside Assistance) into a digital narrative: detecting a "stalled" project and deploying a rescue unit to resolve it. It functions similarly to a high-impact rich media ad unit, utilizing timeline-based animations and user-driven state changes.

🛠️ Technical Implementation
To ensure optimal performance and adherence to standard display advertising constraints, this project was built without external frameworks.

HTML5: Semantic structure organized into distinct "Layers" (States) to simulate the flow of an expanding banner.

CSS3: Hardware-accelerated animations (transform, opacity) are used for all movement to ensure a smooth 60fps frame rate.

Vanilla JavaScript: Lightweight DOM manipulation handles the state logic, audio synchronization, and user interactions. No jQuery or React dependencies were used.

⚡ Key Features
Sequenced Animation: Uses CSS Keyframes and JavaScript timing to create a cinematic narrative (Alert -> Arrival -> Portfolio), demonstrating the ability to handle complex animation timelines.

Audio Integration: Features a custom audio engine with a global mute toggle. It adheres to modern browser autoplay policies by requiring user interaction before initializing the Audio Context.

Responsive Design: Built with viewport units (vw, vh) to ensure the creative scales proportionally across different screen sizes and devices.

Optimized Assets: Utilizes SVG for iconography (crisp scaling, low file size) and WebP for image assets to maintain a lightweight footprint.

📂 Project Structure
Plaintext

/
├── index.html       # Main structure and layer definitions
├── style.css        # Animation keyframes and styling
├── script.js        # Logic for state transitions and audio
└── assets/          # Media files (WebP, MP4, MP3)
🚀 How to Run
Clone the repository or download the source files.

Open index.html in any modern browser (Chrome, Firefox, Safari).

Click anywhere on the screen to initialize the experience (simulates the user engagement required for rich media audio).
