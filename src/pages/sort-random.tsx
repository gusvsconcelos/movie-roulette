import { RandomMovie } from '../components/ui/Title'
import { moviesData } from '../utils/data'
import { Button } from '../components/ui/Button'
import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Spinner } from '../components/ui/Spinner'

interface Movie {
  index: number
  poster: string
  title: string
  date: string
  director: string
  genres: string
  runtime: string
  rating: number
}

export function SortMovie() {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [movieCard, setMovieCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setMovieCard(false)
    setIsLoading(true)

    const getRandomInt = (max: number) => {
      return Math.floor(Math.random() * max)
    }

    const fetchMovie = async () => {
      const index: number = getRandomInt(20)
      const movieData = await moviesData(index)
      setMovie(movieData)

      setTimeout(() => {
        setIsLoading(false)
        setMovieCard(true)
      }, 3000)
    }

    fetchMovie()
  }

  return (
    <>
      <RandomMovie />
      {isLoading && <Spinner />}
      {movieCard && (
        <div>
          <Card
            poster={
              movie?.poster
                ? `https://image.tmdb.org/t/p/original/${movie.poster}`
                : 'src/assets/images/movie-poster-placeholder.jpg'
            }
            movie={movie?.title ?? 'Unknown Title'}
            director={movie?.director ?? 'Unknown  Director'}
            genres={movie?.genres ?? 'Unknown Genres'}
            date={movie?.date ?? 'Unknown Date'}
            runtime={movie?.runtime ?? 'Unknown Runtime'}
            rating={movie?.rating ?? 0}
          />
        </div>
      )}
      <Button text="SORT MOVIE" onClick={handleClick} />
    </>
  )
}
