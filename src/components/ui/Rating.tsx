import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

export function Rating({ rate }: { rate: number }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rate ? (
        <FaStar key={i} className='mr-1' />
      ) : (
        <FaRegStar key={i} className='mr-1' />
      ),
    );
  }

  return (
    <div className='inline-flex mt-4 text-red-500 text-[1.6rem] drop-shadow-outline'>
      {stars}
    </div>
  );
}
