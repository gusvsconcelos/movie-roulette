import { Link } from 'react-router-dom'
import { Github, Dices } from 'lucide-react'

export function Nav() {
  return (
    <nav className="flex items-center absolute right-16 font-ui text-xl">
      <Link
        className="flex items-center gap-1 mx-4 hover:underline underline-offset-4 decoration-2"
        to="/sort-random"
      >
        <Dices />
        Sort Random Movie
      </Link>

      <a
        className="flex items-center gap-1 w-fit ml-4 p-2 border-[3px] border-black bg-[#DAA192] shadow-button active:shadow-none active:bg-[#AB5139] active:text-[#F8EEEC] transition-all"
        href="https://github.com/gusvsconcelos/movie-roulette.git"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="inline" />
        GitHub
      </a>
    </nav>
  )
}
