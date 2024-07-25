export function Card() {
  return (
    <div className='flex justify-center items-center w-fit h-fit m-2 p-1 border-2 border-black bg-yellow-100 shadow-brute'>
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
      <div className='w-fit h-80 m-1 py-14 pr-3'>
        <div className='flex-row justify-end items-end mb-4'>
          <h1 className='font-bolder text-4xl'>Movie Name</h1>
          <h2 className='font-bolder text-2xl'>Director Name</h2>
          <h3 className='font-ui text-xl'>Movie Gender</h3>
          <h3 className='font-ui text-xl'>Movie Year</h3>
          <h3 className='font-ui text-xl'>Director Name</h3>
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
