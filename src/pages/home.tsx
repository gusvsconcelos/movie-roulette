import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';

export function Home() {
  const [moviePoster, setMoviePoster] = useState<string>();
  const [movieName, setMovieName] = useState<string>('Movie Name');
  const [movieDate, setMovieDate] = useState<string>('01-01-1970');
  const [movieDirector, setMovieDirector] = useState<string>('Movie Director');
  const [movieGenres, setMovieGenres] = useState<string>('Genres');
  const [movieRuntime, setMovieRuntime] = useState<string>('2h 0m');

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

      // console.log(data.results);

      setMoviePoster(data.results[1].poster_path);
      setMovieName(data.results[1].title);
      setMovieDate(data.results[1].release_date);

      movieID = data.results[1].id;

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

      const fetchDetails = async () => {
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
          options,
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

        setMovieRuntime(runtimeFormat);
        setMovieGenres(genresFormat);
      };

      fetchDetails();
    };

    fetchData();
  }, []);

  return (
    <Card
      poster={
        moviePoster
          ? `https://image.tmdb.org/t/p/original/${moviePoster}`
          : 'src/assets/images/movie-poster-placeholder.jpg'
      }
      movie={movieName}
      director={movieDirector}
      genres={movieGenres}
      date={movieDate}
      runtime={movieRuntime}
    />
  );
}
