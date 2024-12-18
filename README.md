# StevieGPT - Your Coding AI Assistant

# StevieGPT - Your Coding AI Assistant

![StevieGPT Logo](client/assets/bot.svg)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Frontend Components](#frontend-components)
9. [Styling](#styling)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [License](#license)

## Introduction

StevieGPT is an innovative AI-powered coding assistant designed to revolutionize the way developers interact with artificial intelligence. By harnessing the capabilities of Google's Generative AI, StevieGPT provides instant, accurate, and context-aware responses to a wide range of coding queries. Whether you're a seasoned professional or a coding novice, StevieGPT is your go-to companion for solving complex programming challenges, exploring new concepts, and enhancing your coding skills.

## Features

- **AI-Powered Responses**: Utilizes Google's state-of-the-art Generative AI to provide intelligent and context-aware answers to coding questions.
- **Real-Time Interaction**: Enjoy seamless, real-time conversations with the AI, mimicking a chat with a human expert.
- **Code Snippet Support**: Easily share and receive code snippets as part of your queries and responses.
- **Multi-Language Support**: Get assistance with a wide range of programming languages and frameworks.
- **Intuitive User Interface**: A clean, modern, and responsive design ensures a pleasant user experience across all devices.
- **Dynamic Loading Animation**: Engaging loading animation keeps users informed while waiting for AI responses.
- **Text Animation**: Smooth text animation for displaying AI responses, enhancing readability and user engagement.
- **Error Handling**: Robust error handling to ensure a stable user experience, even when issues arise.
- **Scalable Architecture**: Built with scalability in mind, allowing for easy expansion and integration of new features.

## Technology Stack

- **Frontend:**
  - HTML5: For structuring the web application.
  - CSS3: For styling and responsive design.
  - JavaScript (ES6+): For interactive functionality and API communication.
  - Vite: As a build tool and development server for faster development and optimized production builds.

- **Backend:**
  - Node.js: As the runtime environment for the server.
  - Express.js: For creating a robust and scalable server architecture.

- **AI Integration:**
  - Google Generative AI: Powering the core AI functionality of StevieGPT.

- **Additional Tools and Libraries:**
  - CORS: For handling cross-origin requests securely.
  - dotenv: For managing environment variables.
  - animejs: For smooth and customizable animations.
  - gsap: For advanced animations and transitions.

## Project Structure
StevieGPT/
│
├── client/
│   ├── assets/
│   │   ├── bot.svg
│   │   ├── send.svg
│   │   └── user.svg
│   ├── public/
│   │   └── favicon.ico
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── server/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
README.md

- `client/`: Contains all frontend-related files.
  - `assets/`: Stores SVG icons used in the UI.
  - `public/`: Holds the favicon and other static assets.
  - `index.html`: The main HTML file for the application.
  - `script.js`: Contains the core frontend logic and API interactions.
  - `style.css`: Defines the styling for the entire application.

- `server/`: Houses the backend code and configuration.
  - `server.js`: The main server file with API endpoints and Google AI integration.

- Root files:
  - `.gitignore`: Specifies intentionally untracked files to ignore.
  - `package.json`: Defines project dependencies and scripts.
  - `README.md`: Provides comprehensive documentation for the project.

## Installation

Follow these steps to set up StevieGPT on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/StevieGPT.git
   cd StevieGPT

2.
Install dependencies for both client and server:
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
3.
Set up environment variables:
Create a .env file in the server directory and add your Google API key:
GOOGLE_API_KEY=your_api_key_here
4.
Ensure you have Node.js (version 14 or later) installed on your system.


Usage
To run StevieGPT locally:

1.
Start the server:
cd server
npm run server
2.
In a new terminal, start the client:
cd client
npm run dev
3.
Open your browser and navigate to http://localhost:3000 (or the port specified by Vite).
4.
Start chatting with StevieGPT by typing your coding questions in the input field and pressing Enter or clicking the send button.


API Endpoints
StevieGPT's server exposes the following API endpoints:

GET /
Description: Returns a welcome message to confirm the server is running.
Response: JSON object with a welcome message.
POST /
Description: Accepts a prompt and returns an AI-generated response.
Request Body: JSON object with a prompt field containing the user's query.
Response: JSON object with a bot field containing the AI's response.


Frontend Components
StevieGPT's frontend is composed of several key components:

1.
Chat Container: 
ID: #chat_container
Purpose: Holds the entire conversation history between the user and the AI.
2.
Chat Stripe:
Class: .wrapper
Purpose: Represents individual message bubbles for both user and AI responses.
3.
Form:
Element: <form>
Purpose: Allows users to input their queries and submit them to the AI.
4.
Send Button:
Element: <button> within the form
Purpose: Submits the user's query when clicked.
5.
Loading Animation:
Function: loader()
Purpose: Displays a dynamic loading animation while waiting for the AI's response.
6.
Text Animation:
Function: typeText()
Purpose: Animates the display of the AI's response, simulating typing.


Styling
StevieGPT features a sleek, modern design optimized for readability and user experience:

Color Scheme:
Main background: #343541 (dark gray)
AI response background: #40414F (slightly lighter gray)
Text color: White for high contrast
Typography:
Font: Sans-serif for clean, modern look
Size: Responsive, ensuring readability on various devices
Layout:
Flexible chat container that expands to fill the viewport
Fixed input form at the bottom for easy access
Animations:
Smooth loading animation using dots
Text appears with a typewriter effect for AI responses
Responsiveness:
Adapts seamlessly to different screen sizes, from mobile to desktop


Deployment
StevieGPT is deployed using the following setup:

Server: Hosted on Render
Client: Can be hosted on platforms like Netlify, Vercel, or GitHub Pages
API Endpoint: https://steviegpt.onrender.com/


To deploy your own instance:
1.
Set up a Render account and create a new Web Service.
2.
Connect your GitHub repository to Render.
3.
Configure the environment variables, including your GOOGLE_API_KEY.
4.
Deploy the server and note the provided URL.
5.
Update the client's API endpoint in script.js to match your deployed server URL.
6.
Deploy the client to your preferred static site hosting service.


Contributing
We welcome contributions to StevieGPT! Here's how you can help:

1.
Fork the repository on GitHub.
2.
Create a new branch for your feature or bug fix.
3.
Write your code and add tests if applicable.
4.
Ensure your code adheres to the existing style.
5.
Run the tests and make sure they all pass.
6.
Submit a pull request with a clear description of your changes.


Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

License
This project is licensed under the ISC License. See the LICENSE file for details.
