import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';

export function Home() {
  const [moviePoster, setMoviePoster] = useState();
  const [movieName, setMovieName] = useState('Movie Name');
  const [movieDate, setMovieDate] = useState('01-01-1970');
  let movieID: number;

  useEffect(() => {
    const apiKey = import.meta.env.API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };

    const fetchData = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options,
      );
      const data = await response.json();

      console.log(data);

      setMoviePoster(data.results[3].poster_path);
      setMovieName(data.results[3].title);
      setMovieDate(data.results[3].release_date);
      movieID = data.results[3].id;
    };

    const fetchCredits = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
        options,
      );
      const data = await response.json();

      console.log(data);
    };

    fetchCredits();
    fetchData();
  }, []);

  return (
    <Card
      poster={`https://image.tmdb.org/t/p/original/${moviePoster}`}
      movie={movieName}
      date={movieDate}
    />
  );
}
