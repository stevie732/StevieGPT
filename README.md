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

StevieGPT is an advanced AI-powered coding assistant that leverages the power of Google's Generative AI to provide intelligent responses to your coding queries. With a sleek, user-friendly interface, StevieGPT aims to be your go-to companion for all things related to programming and software development.

## Features

- Real-time AI-powered responses to coding questions
- Intuitive chat-like interface
- Smooth animations for loading and text display
- Responsive design for various screen sizes
- Secure API integration with Google's Generative AI

## Technology Stack

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Vite (for fast development and building)
- **Backend:**
  - Node.js
  - Express.js
- **AI Integration:**
  - Google Generative AI
- **Other Tools:**
  - CORS (for handling cross-origin requests)
  - dotenv (for environment variable management)

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

## Installation

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


Usage
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


API Endpoints
GET /: Returns a welcome message
POST /: Accepts a prompt and returns an AI-generated response


Frontend Components
Chat Container
The main component that holds the entire chat interface.

Chat Stripe
Represents individual message bubbles for both user and AI responses.

Form
Allows users to input their queries and submit them to the AI.

Styling
The application uses a dark theme with contrasting elements for better readability. Key styling features include:

Dark background (#343541) for the main chat area
Lighter background (#40414F) for AI responses
Smooth animations for loading and text display
Responsive design adapting to various screen sizes


Deployment
The server is deployed on Render and can be accessed at https://steviegpt.onrender.com/.

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the ISC License.
