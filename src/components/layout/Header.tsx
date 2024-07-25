import { Title } from '../ui/Title';
import { Nav } from '../ui/Nav';
import { ToggleSwitch } from '../ui/ToggleSwitch';

export function Header() {
  return (
    <header className='flex justify-center items-center p-16 bg-yellow-100 shadow-header'>
      <Title styles='absolute left-16 top-9 text-6xl text-yellow-100 drop-shadow-outline' />
      <Title styles='absolute left-14 text-6xl text-black' />
      <Nav />
      <ToggleSwitch />
    </header>
  );
}
