<div className='w-96 h-96 m-2 border-black border-2 bg-white shadow-brute'>
  {/* movie cover and outline element */}
  <div className='relative bg-red-500'>
    <div className='absolute top-6 left-6 w-40 h-[227px] border-2 border-black'></div>
    <img
      src='src/assets/images/movie-poster-placeholder.jpg'
      alt='Poster Placeholder'
      className='absolute top-4 left-4 w-40'
    />
  </div>

  {/* movie info */}
  <div className='relative'>
    <div className='flex-row justify-end items-end absolute top-6 right-9'>
      <h1 className='font-title text-4xl'>Movie Name</h1>
      <h2 className='font-ui text-2xl'>Director Name</h2>
    </div>

    {/* color palettes */}
    <div className='absolute top-28 right-4'>
      <div className='inline-block w-6 h-6 m-1 bg-yellow-200 border-2 border-black'></div>
      <div className='inline-block w-6 h-6 m-1 bg-red-200 border-2 border-black'></div>
      <div className='inline-block w-6 h-6 m-1 bg-green-200 border-2 border-black'></div>
      <div className='inline-block w-6 h-6 m-1 bg-blue-200 border-2 border-black'></div>
      <div className='inline-block w-6 h-6 m-1 bg-violet-200 border-2 border-black'></div>
    </div>
  </div>
</div>;
