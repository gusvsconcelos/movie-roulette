interface Movie {
  index: number;
  poster: string;
  title: string;
  date: string;
  director: string;
  genres: string;
  runtime: string;
  rating: number;
}

export const moviesData = async (index: number): Promise<Movie | null> => {
  const API_KEY: string = import.meta.env.VITE_API_KEY;
  const AUTH_TOKEN: string = import.meta.env.VITE_ACCESS_TOKEN_AUTH;

  if (!API_KEY || !AUTH_TOKEN) {
    throw new Error("API Key or Authentication Token not found!");
  }

  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
      options
    );
    const data = await response.json();

    if (!data.results) return null;

    const poster: string = data.results[index].poster_path;

    const title: string =
      data.results[index].title.includes(":") &&
      data.results[index].title.length > 20
        ? data.results[index].title.split(":")[0]
        : data.results[index].title;

    const date: string = data.results[index].release_date.slice(0, 4);
    const movieID: number = data.results[index].id;

    const creditsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US&api_key=${API_KEY}`,
      options
    );
    const credits = await creditsResponse.json();

    const director = credits.crew.find(
      (crew: { department: string }) => crew.department === "Directing"
    );

    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?language=en-US&api_key=${API_KEY}`,
      options
    );
    const details = await detailsResponse.json();

    const genres = details.genres
      .slice(0, 3)
      .map((genre: { name: string }) => genre.name)
      .join(", ");
    const runtime = `${Math.floor(details.runtime / 60)}h ${
      details.runtime % 60
    }m`;
    const rating: number = Math.floor(details.vote_average);

    return {
      index,
      poster,
      title,
      date,
      director: director ? director.name : "Unknown",
      genres,
      runtime,
      rating,
    };
  } catch (error) {
    console.log(`Failed to fetch data. ${error}`);
    return null;
  }
};
