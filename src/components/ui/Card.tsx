export function Card() {
  return (
    <div className='flex justify-center items-center w-fit h-fit m-2 border-2 border-black bg-white shadow-brute'>
      {/* movie cover */}
      <div className='relative w-56 h-80 m-1'>
        <div className='absolute top-8 left-4 w-48 h-[269px] border-2 border-black'></div>
        <img
          src='src/assets/images/movie-poster-placeholder.jpg'
          alt='Poster Placeholder'
          className='absolute top-5 left-2 w-48'
        />
      </div>

      {/* movie information */}
      <div className='w-fit h-80 m-1 px-3 py-7'>
        <div className='flex-row justify-end items-end'>
          <h1 className='font-title text-3xl'>Movie Name</h1>
          <h2 className='font-title text-xl'>Director Name</h2>
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
    </div>
  );
}
