import Title from '../ui/Title';
import Nav from '../ui/Nav';

export default function Header() {
  return (
    <div className='p-7 mb-4 bg-white'>
      <Title styles='inline m-2 text-4xl font-bold text-black' />
      <Nav />
    </div>
  );
}
