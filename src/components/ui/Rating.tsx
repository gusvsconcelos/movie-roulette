import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

export function Rating({ rate }: { rate: number }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rate ? (
        <FaStar key={i} className='mr-2' />
      ) : (
        <FaRegStar key={i} className='mr-2' />
      )
    );
  }

  return (
    <div className='inline-flex mt-4 text-orange-600 text-[1.7rem] drop-shadow-outline'>
      {stars}
    </div>
  );
}
