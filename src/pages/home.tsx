import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';

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
    director: 'Movie Director',
    genres: 'Genres',
    runtime: '2h 0m',
  });

  // Updating react states
  useEffect(() => {
    // Authentication variables
    const apiKey = import.meta.env.VITE_API_KEY;
    const authToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH;
    const intervalTime: number = 5000;
    let movieID: number;

    console.log(`api: ${apiKey}`);
    console.log(`auth token: ${authToken}`);

    // Variable to change movie selection
    const interval: NodeJS.Timeout = setInterval(() => {
      setMovie((prevMovie) => ({
        ...prevMovie,
        index: (prevMovie.index + 1) % 20, // Reset index to 0 when greater than or equal to 20
      }));
    }, intervalTime);

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

      console.log(`API Results: ${data.results}`);

      // SETTING MOVIE DATA
      // poster
      setMovie((prevMovie) => ({
        ...prevMovie,
        poster: data.results[movie.index].poster_path,
      }));
      // name
      setMovie((prevMovie) => ({
        ...prevMovie,
        name: data.results[movie.index].title,
      }));
      // date
      setMovie((prevMovie) => ({
        ...prevMovie,
        date: data.results[movie.index].release_date,
      }));

      movieID = data.results[movie.index].id;

      const fetchCredits = async () => {
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
          options
        );
        const creditsData = await creditsResponse.json();

        const director = creditsData.crew.filter(
          (director: { department: string }) =>
            director.department === 'Directing'
        );

        // director
        setMovie((prevMovie) => ({
          ...prevMovie,
          director: director[0].name,
        }));
      };
      fetchCredits();

      const fetchDetails = async () => {
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
          options
        );
        const detailsData = await detailsResponse.json();

        const genresFormat = () => {
          let genres: string = `${detailsData.genres[0].name}, `;

          for (let i = 1; i < detailsData.genres.length; i++) {
            genres += `${detailsData.genres[i].name}, `;
          }

          if (genres.endsWith(', ')) {
            genres = genres.slice(0, -2);
          }

          return genres;
        };

        const runtimeFormat = () => {
          const runtime: number = detailsData.runtime;
          const hours: number = Math.floor(runtime / 60);
          const minutes: number = runtime % 60;

          return `${hours}h ${minutes}m`;
        };

        // runtime
        setMovie((prevMovie) => ({
          ...prevMovie,
          runtime: runtimeFormat(),
        }));
        // genres
        setMovie((prevMovie) => ({
          ...prevMovie,
          genres: genresFormat(),
        }));
      };
      fetchDetails();
    };
    fetchData();

    return () => clearInterval(interval);
  }, [movie.index]);

  return (
    <>
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
    </>
  );
}
