export function Nav() {
  return (
    <nav className='absolute right-32 mb-1 font-ui text-xl'>
      <a className='mx-3 hover:underline' href='#'>
        Sort Random Movie
      </a>
      <a className='mx-3 hover:underline' href='#'>
        Sort Movie From List
      </a>
      <a
        className='mx-3 p-2 border-2 border-black bg-blue-300 hover:shadow-brute'
        href='https://github.com/gusvsconcelos/movie-sorter-react.git'
        target='_blank'>
        <img
          src='/src/assets/icons/github-mark.svg'
          className='inline w-5 mb-1 mr-1'
        />
        GitHub
      </a>
    </nav>
  );
}
