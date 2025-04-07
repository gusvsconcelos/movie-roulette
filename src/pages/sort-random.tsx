import { RandomMovie } from '../components/ui/Title'
import { moviesData } from '../utils/data'
import { Button } from '../components/ui/Button'

export function SortMovie() {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  const authToken: string = import.meta.env.VITE_ACCESS_AUTH_TOKEN
  const index: number = getRandomInt(20)
  const movie = moviesData(index, authToken)

  console.log(movie)

  return (
    <>
      <RandomMovie />
      <Button text="SORT MOVIE" />
    </>
  )
}
