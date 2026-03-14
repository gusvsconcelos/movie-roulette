import { Link } from "react-router-dom";
import { Github, Dices } from "lucide-react";

export function Nav() {
  return (
    <nav className="flex items-center absolute right-16 font-ui text-xl">
      <Link
        className="flex items-center gap-1 mx-4 hover:text-[#AA5139] transition-all duration-300"
        to="/sort-random"
      >
        <Dices />
        Sort Random Movie
      </Link>

      <a
        className="flex items-center gap-1 w-fit ml-4 p-2 border-[3px] border-black bg-[#DAA192] shadow-button hover:bg-[#AB5139] hover:text-[#F8EEEC] active:shadow-none transition-all duration-300"
        href="https://github.com/gusvsconcelos/movie-roulette.git"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="inline" />
        GitHub
      </a>
    </nav>
  );
}
