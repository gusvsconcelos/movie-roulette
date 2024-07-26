interface Props {
  poster?: string;
  movie?: string;
  director?: string;
  gender?: string;
  date?: string;
  length?: string;
}

const defaultProps: Props = {
  poster: 'src/assets/images/movie-poster-placeholder.jpg',
  movie: 'Movie Name',
  director: 'Director',
  gender: 'Genres',
  date: '01-01-1970',
  length: '2h 0m',
};

export function Card(prop: Props) {
  const finalProps = { ...defaultProps, ...prop };
  const { poster, movie, director, gender, date, length } = finalProps;

  return (
    <article className='flex justify-center items-center w-fit h-fit m-2 p-1 border-2 border-black bg-yellow-100 shadow-brute'>
      {/* movie poster */}
      <div className='relative w-56 h-80 m-1'>
        <div className='absolute top-8 left-4 w-[195px] h-[275px] border-2 border-black'></div>

        <img
          src={poster}
          alt='Poster Placeholder'
          className='absolute top-5 left-2 w-48 h-[275px]'
        />
      </div>

      {/* movie information */}
      <div className='w-fit h-80 m-1 py-14 pr-3'>
        <div className='flex-row justify-end items-end mb-4'>
          <h1 className='font-bolder text-4xl'>{movie}</h1>
          <h2 className='font-bolder text-2xl'>{director}</h2>
          <h3 className='font-ui text-xl'>{gender}</h3>
          <h3 className='font-ui text-xl'>{date}</h3>
          <h3 className='font-ui text-xl'>{length}</h3>
        </div>

        {/* color palettes */}
        <div className=''>
          <div className='inline-block w-6 h-6 mr-1 bg-yellow-200 border-2 border-black'></div>
          <div className='inline-block w-6 h-6 mr-1 bg-red-200 border-2 border-black'></div>
          <div className='inline-block w-6 h-6 mr-1 bg-green-200 border-2 border-black'></div>
          <div className='inline-block w-6 h-6 mr-1 bg-blue-200 border-2 border-black'></div>
          <div className='inline-block w-6 h-6 mr-1 bg-violet-200 border-2 border-black'></div>
        </div>
      </div>
    </article>
  );
}
