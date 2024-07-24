import { Title } from '../ui/Title';
import { Nav } from '../ui/Nav';
import { ToggleSwitch } from '../ui/ToggleSwitch';

export function Header() {
  return (
    <header className='flex justify-center items-center p-16 bg-white shadow-header'>
      <Title styles='absolute left-16 text-5xl text-black bg-white p-5 border-2 border-black drop-shadow-brute' />
      <Nav />
      <ToggleSwitch />
    </header>
  );
}
