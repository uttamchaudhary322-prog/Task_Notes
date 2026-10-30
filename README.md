# Task Notes 📝

A simple and interactive task and notes management application built with **React and Tailwind CSS**. Create notes, organize your tasks, and remove them whenever you no longer need them.

<p align="center">
  <a href="https://task-notes-gilt.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-View%20App-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## Live Demo

**Try the Application:** [Task Notes](https://task-notes-gilt.vercel.app/)

**GitHub Repository:** [Task_Notes](https://github.com/uttamchaudhary322-prog/Task_Notes)

## About the Project

Task Notes is a lightweight web application designed to make task and note management simple.

The application allows users to create notes by entering a title and description. Each note is displayed in an individual sticky-note-style card, making the interface simple and easy to navigate.

Users can also delete notes individually when they are no longer needed.

The project focuses on React fundamentals, component rendering, state management, event handling, and responsive user interface development.

## Features

- **Create Notes:** Add notes with a custom title and description.
- **Display Notes:** View all created notes in a card-based layout.
- **Delete Notes:** Remove individual notes whenever required.
- **Sticky Note Design:** Notes are displayed in a sticky-note-inspired layout.
- **Responsive Layout:** Uses Tailwind CSS to adapt the interface to different screen sizes.
- **Dynamic Rendering:** Automatically updates the displayed notes when the application state changes.
- **Simple Interface:** Minimal design with an easy-to-use note creation form.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface |
| JavaScript (ES6+) | Application logic and event handling |
| Tailwind CSS 4 | Styling and responsive layouts |
| Vite 8 | Development server and production build tool |
| HTML5 | Application structure |
| CSS3 | Styling fundamentals |

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/uttamchaudhary322-prog/Task_Notes.git
```

**2. Navigate to the project directory**

```bash
cd Task_Notes
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Vite will display a local development URL in your terminal. Usually:

```text
http://localhost:5173
```

Open this URL in your browser to use the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the code |

## Project Structure

```text
Task_Notes/
├── public/
│   └── Static assets
├── src/
│   ├── App.jsx          # Main application and note management logic
│   ├── main.jsx         # React application entry point
│   └── index.css        # Tailwind CSS entry point
├── index.html           # Main HTML document
├── package.json         # Project dependencies and scripts
├── package-lock.json
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md
```

## How It Works

The application uses React's `useState` hook to manage notes.

Each note contains two properties:

- `title`: The title of the note.
- `message`: The description or content of the note.

When a user creates a note, the application updates its state and dynamically renders the new note.

When a user deletes a note, the corresponding item is removed from the state.

### Current Storage Behavior

Notes are currently stored in React component state. They are not saved to a database or browser storage.

This means that refreshing or closing the browser will reset the notes.

## Future Improvements

Potential enhancements for future versions include:

- Add Local Storage to retain notes after page refresh.
- Implement note editing functionality.
- Add search and filtering options.
- Introduce categories and priority labels.
- Add task completion status.
- Integrate a backend and database for persistent storage.
- Improve the user interface with additional animations and interactions.

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes with a descriptive message.
5. Open a pull request.

## License

No license has currently been specified for this repository. Please contact the repository owner regarding reuse or redistribution.

---

<p align="center">
  Built with React and a passion for learning web development.
</p>