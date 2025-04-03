import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
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
  const [movies, setMovies] = useState<Movie[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Fetch all movies and preload their posters
  const fetchAllMovies = useCallback(async () => {
    const authToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH
    const moviePromises = Array.from({ length: 20 }, (_, index) =>
      moviesData(index, authToken)
    )
    const movieResults = await Promise.all(moviePromises)
    const validMovies = movieResults.filter(Boolean) as Movie[]

    // Preload all posters
    for (const movie of validMovies) {
      const img = new Image()
      img.src = `https://image.tmdb.org/t/p/original/${movie.poster}`
    }

    return validMovies
  }, [])

  // Load all movies on component mount
  useEffect(() => {
    fetchAllMovies().then(setMovies)
  }, [fetchAllMovies])

  // Handle movie transitions with animation
  useEffect(() => {
    if (movies.length === 0) return

    const intervalTime = 5000
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % movies.length)
        setIsVisible(true)
      }, 1000) // Match animation duration
    }, intervalTime)

    return () => clearInterval(interval)
  }, [movies])

  if (movies.length === 0) return <div>Loading...</div>

  const currentMovie = movies[currentIndex]

  return (
    <>
      <InTheater />
      <motion.div
        key={currentMovie.index}
        initial={{ x: '-50%', opacity: 0 }}
        animate={{ x: isVisible ? '0%' : '100%', opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        <Card
          title="Movies in Theater"
          poster={
            currentMovie.poster
              ? `https://image.tmdb.org/t/p/original/${currentMovie.poster}`
              : 'src/assets/images/movie-poster-placeholder.jpg'
          }
          movie={currentMovie.title}
          director={currentMovie.director}
          genres={currentMovie.genres}
          date={currentMovie.date}
          runtime={currentMovie.runtime}
          rating={currentMovie.rating}
        />
      </motion.div>
    </>
  )
}
