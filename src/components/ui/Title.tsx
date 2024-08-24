import { Link } from 'react-router-dom';

export function Title({ styles }: { styles: string }) {
  return (
    <h1 className={`font-title font-black italic ${styles}`}>
      <Link to='/'>MOVIE ROULETTE</Link>
    </h1>
  );
}
