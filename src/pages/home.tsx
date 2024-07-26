import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';

export function Home() {
  const [moviePoster, setMoviePoster] = useState();
  const [movieName, setMovieName] = useState('Movie Name');
  const [movieDate, setMovieDate] = useState('01-01-1970');
  const [movieDirector, setMovieDirector] = useState('Movie Director');

  useEffect(() => {
    // const apiKey = import.meta.env.VITE_API_KEY;
    const authToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH;
    let movieID: number;

    // console.log('api: ' + apiKey);
    // console.log('auth token: ' + authToken);

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
        options,
      );
      const data = await response.json();

      setMoviePoster(data.results[4].poster_path);
      setMovieName(data.results[4].title);
      setMovieDate(data.results[4].release_date);

      movieID = data.results[4].id;

      const fetchCredits = async () => {
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
          options,
        );
        const creditsData = await creditsResponse.json();

        const director = creditsData.crew.filter(
          (director: { known_for_department: string }) =>
            director.known_for_department === 'Directing',
        );

        setMovieDirector(director[0].name);
      };

      fetchCredits();
    };

    fetchData();
  }, []);

  return (
    <Card
      poster={`https://image.tmdb.org/t/p/original/${moviePoster}`}
      movie={movieName}
      director={movieDirector}
      date={movieDate}
    />
  );
}
