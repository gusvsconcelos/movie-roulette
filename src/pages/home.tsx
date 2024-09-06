import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { InTheater } from '../components/ui/Title';

interface Movie {
  index: number;
  poster: string;
  name: string;
  date: string;
  director: string;
  genres: string;
  runtime: string;
  rating: number;
}

export function Home() {
  const [movie, setMovie] = useState<Movie>({
    index: 0,
    poster: '',
    name: 'Movie Name',
    date: '01-01-1970',
    director: 'Movie Diector',
    genres: 'Genres',
    runtime: '2h 0m',
    rating: 0,
  });

  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const authToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH;

    const fetchData = async (index: number) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        };

        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          options
        );
        const data = await response.json();

        if (!data.results) return;

        // console.log(`API Results: ${data.results}`);

        setMovie((prevMovie) => ({
          ...prevMovie,
          poster: data.results[index].poster_path,
        }));

        const movieTitle: string =
          data.results[index].title.includes(':') &&
          data.results[index].title.length > 20
            ? data.results[index].title.split(':')[0]
            : data.results[index].title;

        const date: string = data.results[index].release_date.slice(0, 4);
        const movieID: number = data.results[index].id;

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
          options
        );
        const credits = await creditsResponse.json();

        // prettier-ignore
        const director = credits.crew.find((crew: { department: string }) => crew.department === 'Directing');

        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
          options
        );
        const details = await detailsResponse.json();

        // prettier-ignore
        const genres = details.genres.map((genre: { name: string }) => genre.name).join(', ');
        // prettier-ignore
        const runtime = `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`;
        const rating: number = Math.floor(details.vote_average);

        setMovie((prevMovie) => ({
          ...prevMovie,
          name: movieTitle,
          date: date,
          director: director ? director.name : 'Unknown',
          genres: genres,
          runtime: runtime,
          rating: rating,
        }));
      } catch (error) {
        console.log(`Failed to fetch data. ${error}`);
      }
    };

    fetchData(movie.index);
  }, [movie.index]);

  useEffect(() => {
    const intervalTime: number = 5000;
    const timeoutTime: number = 1000;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(async () => {
        setMovie((prevMovie) => ({
          ...prevMovie,
          index: (prevMovie.index + 1) % 20,
        }));

        setIsVisible(true);
      }, timeoutTime);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <InTheater />
      <motion.div
        key={movie.index}
        initial={{ x: '-50%', opacity: 0 }}
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
          rating={movie.rating}
        />
      </motion.div>
    </>
  );
}
