# Movie Roulette

Movie Roulette is a web application designed to help users decide what movie to watch by displaying movies current in theathers and randomly selecting a movie from a database. This project is built using **React** with **TypeScript**, styled with **Tailwind CSS**, and leverages **The Movie Database (TMDb) API** for fetching movie data.

<br>

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Integration](#api-integration)
- [Components Overview](#components-overview)
- [License](#license)

---

## Features

- **Random Movie Selection**: Fetches a random movie from the TMDb API.
- **In Theaters Carousel**: Displays a rotating carousel of movies currently in theaters.
- **Custom Styling**: Styled with Tailwind CSS for a modern and clean look.

### To-do Features

- **Dark Mode Toggle**: Allows users to switch between light and dark themes.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.

<br>

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool for modern web projects.
- **Framer Motion**: Animation library for React.
- **TMDb API**: Used to fetch movie data.
- **React Router**: For routing between pages.
- **Lucide Icons**: Icon library for UI elements.

<br>

## Project Structure

```
.
├── src/
│   ├── assets/          # Static assets like images
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   ├── ui/          # UI components (Button, Card, etc.)
│   ├── pages/           # Page components (Home, Sort Random)
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
├── public/              # Public assets
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

<br>

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gusvsconcelos/movie-roulette.git
   cd movie-roulette
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the required environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

<br>

## Environment Variables

The project requires the following environment variables to be set in a `.env` file:

```env
VITE_API_KEY=your_tmdb_api_key
VITE_ACCESS_TOKEN_AUTH=your_tmdb_auth_token
```

- `VITE_API_KEY`: Your API key from [TMDb](https://www.themoviedb.org/documentation/api).
- `VITE_ACCESS_TOKEN_AUTH`: Your authentication token from TMDb.

<br>

## Scripts

The following scripts are available in the `package.json`:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

<br>

## API Integration

The project integrates with the TMDb API to fetch movie data. The main utility function for API calls is located in [`src/utils/data.ts`](src/utils/data.ts).

### Example API Call

The `moviesData` function fetches details about a specific movie:

```ts
export const moviesData = async (index: number): Promise<Movie | null> => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const AUTH_TOKEN = import.meta.env.VITE_ACCESS_TOKEN_AUTH;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
    { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } }
  );
  const data = await response.json();
  return data.results[index];
};
```

<br>

## Components Overview

### Layout Components

- **`Header`**: Contains the navigation bar, title, and dark mode toggle.
- **`Footer`**: Displays the project title and author information.

### UI Components

- **`Button`**: Reusable button component.
- **`Card`**: Displays movie details like poster, title, director, etc.
- **`Rating`**: Renders a star-based rating system.
- **`Spinner`**: Loading spinner for asynchronous operations.
- **`ToggleSwitch`**: Dark mode toggle switch.

### Pages

- **`Home`**: Displays a carousel of movies currently in theaters.
- **`Sort Random`**: Allows users to fetch a random movie.

<br>

## License

This project is licensed under the [Apache License 2.0](LICENSE).

<br>

## Author

Developed by [Gustavo Vasconcelos](https://www.linkedin.com/in/gusvsconcelos). Feel free to connect or contribute to the project!