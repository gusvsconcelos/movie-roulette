import { Rating } from './Rating'

interface props {
  poster?: string
  movie?: string
  director?: string
  genres?: string
  date?: string
  runtime?: string
  rating: number
}

export function Card(prop: props) {
  return (
    <article className="flex justify-center items-center w-fit h-fit min-w-96 m-2 p-3 border-4 border-black bg-[#F8EEEC] shadow-brute">
      {/* Movie poster */}
      <div className="relative w-56 h-80 m-1">
        <div className="absolute top-8 left-5 w-48 h-72 border-2 border-black" />

        <img
          src={prop.poster}
          alt="Poster Placeholder"
          className="absolute top-5 left-2 w-48 h-72 border-2 border-black"
          id="poster"
        />
      </div>

      {/* Movie information */}
      <div className="w-fit h-80 m-4 py-14">
        <div className="flex-row justify-end items-end">
          <h1 className="font-bolder text-5xl antialiased">{prop.movie}</h1>
          <h2 className="font-bolder text-2xl mb-2 antialiased">
            {prop.director}
          </h2>
          <h3 className="font-ui text-xl antialiased">{prop.genres}</h3>
          <h3 className="font-ui text-xl antialiased">{prop.date}</h3>
          <h3 className="font-ui text-xl antialiased">{prop.runtime}</h3>
          <Rating rate={prop.rating / 2} />
        </div>
      </div>
    </article>
  )
}
