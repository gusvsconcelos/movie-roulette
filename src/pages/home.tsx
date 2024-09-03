import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { InTheater } from '../components/ui/Title';

export function Home() {
  // Initializing react states
  const [movie, setMovie] = useState<{
    index: number;
    poster: string;
    name: string;
    date: string;
    director: string;
    genres: string;
    runtime: string;
  }>({
    index: 0,
    poster: '',
    name: 'Movie Name',
    date: '01-01-1970',
    director: 'Movie Diector',
    genres: 'Genres',
    runtime: '2h 0m',
  });

  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Authentication variables
    const authToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH;

    // console.log(`auth token: ${authToken}`);

    // Global varibles
    const intervalTime: number = 5000;
    const timeoutTime: number = 500;

    // API data fetch
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const fetchData = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options
      );
      const data = await response.json();

      // console.log(`API Results: ${data.results}`);

      const movieTitle: string =
        data.results[movie.index].title.includes(':') &&
        data.results[movie.index].title.length > 20
          ? data.results[movie.index].title.split(':')[0]
          : data.results[movie.index].title;

      setMovie((prevMovie) => ({
        ...prevMovie,
        poster: data.results[movie.index].poster_path,
        name: movieTitle,
        date: data.results[movie.index].release_date,
      }));

      const movieID = data.results[movie.index].id;

      const creditsResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
        options
      );
      const credits = await creditsResponse.json();

      const director = credits.crew.find(
        (crew: { department: string }) => crew.department === 'Directing'
      );

      // Director
      setMovie((prevMovie) => ({
        ...prevMovie,
        director: director ? director.name : 'Unknown',
      }));

      const detailsResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        options
      );
      const details = await detailsResponse.json();

      // Formatting genres
      const genres = details.genres
        .map((genre: { name: string }) => genre.name)
        .join(', ');
      // Formatting runtime
      const runtime = `${Math.floor(details.runtime / 60)}h ${
        details.runtime % 60
      }m`;

      setMovie((prevMovie) => ({
        ...prevMovie,
        genres: genres,
        runtime: runtime,
      }));
    };
    fetchData();

    const interval = setInterval(() => {
      setIsVisible(false); // Hide the card component

      setTimeout(async () => {
        // Variable to change movie selection
        setMovie((prevMovie) => ({
          ...prevMovie,
          index: (prevMovie.index + 1) % 20, // Reset index to 0 when greater than or equal to 20
        }));

        setIsVisible(true); // Show the card component
      }, timeoutTime);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [movie.index]);

  return (
    <>
      <InTheater />
      <motion.div
        key={movie.index}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{
          x: isVisible ? '0%' : '100%',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}>
        <Card
          title='Movies in Theater'
          poster={
            movie.poster
              ? `https://image.tmdb.org/t/p/original/${movie.poster}`
              : 'src/assets/images/movie-poster-placeholder.jpg'
          }
          movie={movie.name}
          director={movie.director}
          genres={movie.genres}
          date={movie.date}
          runtime={movie.runtime}
        />
      </motion.div>
    </>
  );
}
