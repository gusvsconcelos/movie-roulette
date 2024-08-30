import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className='absolute right-32 m-1 font-ui text-xl'>
      <Link
        className='inline-flex mx-4 hover:underline underline-offset-4 decoration-2'
        to='/sort-random'>
        Sort Random Movie
      </Link>
      <Link
        className='inline-flex mx-4 hover:underline underline-offset-4 decoration-2'
        to='/sort-list'>
        Sort Movie From List
      </Link>
      <a
        className='mx-4 p-2 border-2 border-black bg-blue-200 hover:shadow-button'
        href='https://github.com/gusvsconcelos/movie-roulette.git'
        target='_blank'>
        <img
          src='/src/assets/icons/github-mark.svg'
          className='inline w-5 mb-1 mr-2'
        />
        GitHub
      </a>
    </nav>
  );
}
