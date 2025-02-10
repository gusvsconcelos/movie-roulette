import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Card } from '../components/ui/Card'
import { InTheater } from '../components/ui/Title'
import { moviesData } from '../utils/data'

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

export function Home() {
  const [movie, setMovie] = useState<Movie>({
    index: 0,
    poster: '',
    title: 'Movie Name',
    date: '01-01-1970',
    director: 'Movie Diector',
    genres: 'Genres',
    runtime: '2h 0m',
    rating: 0,
  })

  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    const authToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH

    const fetchData = async (index: number) => {
      const movieData = await moviesData(index, authToken)
      if (movieData) {
        setMovie(movieData)
      }
    }

    fetchData(movie.index)
  }, [movie.index])

  useEffect(() => {
    const intervalTime: number = 8000
    const timeoutTime: number = 800

    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(async () => {
        setMovie(prevMovie => ({
          ...prevMovie,
          index: (prevMovie.index + 1) % 20,
        }))

        setIsVisible(true)
      }, timeoutTime)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

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
        transition={{ duration: 0.5 }}
      >
        <Card
          title="Movies in Theater"
          poster={
            movie.poster
              ? `https://image.tmdb.org/t/p/original/${movie.poster}`
              : 'src/assets/images/movie-poster-placeholder.jpg'
          }
          movie={movie.title}
          director={movie.director}
          genres={movie.genres}
          date={movie.date}
          runtime={movie.runtime}
          rating={movie.rating}
        />
      </motion.div>
    </>
  )
}
