import { Link } from 'react-router-dom'
import { Github, Dices, ListCheck } from 'lucide-react'

export function Nav() {
  return (
    <nav className="flex items-center absolute right-32 m-1 font-ui text-xl">
      <Link
        className="flex items-center gap-1 mx-4 hover:underline underline-offset-4 decoration-2"
        to="/sort-random"
      >
        <Dices />
        Sort Random Movie
      </Link>
      <Link
        className="flex items-center gap-1 mx-4 hover:underline underline-offset-4 decoration-2"
        to="/sort-list"
      >
        <ListCheck />
        Sort Movie From List
      </Link>
      <a
        className="flex items-center gap-1 w-fit mx-4 p-2 border-2 border-black bg-[#DAA192] hover:shadow-button transition-all"
        href="https://github.com/gusvsconcelos/movie-roulette.git"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img
          src="/src/assets/icons/github-mark.svg"
          className="inline w-5 mb-[0.35rem] mr-[0.35rem]"
        /> */}
        <Github className="inline" />
        GitHub
      </a>
    </nav>
  )
}
