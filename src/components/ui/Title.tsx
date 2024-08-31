import { Link } from 'react-router-dom';

export function Title({ styles }: { styles: string }) {
  return (
    <h1 className={`font-title font-black italic antialiased ${styles}`}>
      <Link to='/'>MOVIE ROULETTE</Link>
    </h1>
  );
}

export function InTheater() {
  return (
    <h1
      className={`absolute left-[2.5rem] top-100 p-4 text-white-alt font-title font-black text-8xl antialiased bg-black shadow-[-40px_0] shadow-[#FF4D00]`}>
      IN <br /> THEATERS
    </h1>
  );
}

export function RandomMovie() {
  return (
    <h1
      className={`absolute left-[2.5rem] top-100 p-4 text-white-alt font-title font-black text-8xl antialiased bg-black shadow-[-40px_0] shadow-[#FF4D00]`}>
      RANDOM <br /> SORTING
    </h1>
  );
}

export function ListSorting() {
  return (
    <h1
      className={`absolute left-[2.5rem] top-100 p-4 text-white-alt font-title font-black text-8xl antialiased bg-black shadow-[-40px_0] shadow-[#FF4D00]`}>
      LIST <br /> SORTING
    </h1>
  );
}
