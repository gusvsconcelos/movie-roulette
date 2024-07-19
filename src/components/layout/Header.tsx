import Title from '../ui/Title';
import Switch from '../ui/Switch';
import Nav from '../ui/Nav';

export default function Header() {
  return (
    <header className='flex mr items-center justify-center p-7 mb-4 bg-white '>
      <Title styles='mr-72 text-4xl text-black' />
      <Nav />
      <Switch />
    </header>
  );
}
