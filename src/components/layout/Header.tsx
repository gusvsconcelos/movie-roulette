import Title from '../ui/Title';
import ToggleSwitch from '../ui/ToggleSwitch';
import Nav from '../ui/Nav';

export default function Header() {
  return (
    <header className='flex justify-center items-center p-14 bg-white shadow-header'>
      <Title styles='absolute left-20 text-4xl text-black bg-white p-4 rounded-md border-4 border-black drop-shadow-brute' />
      <Nav />
      <ToggleSwitch />
    </header>
  );
}
