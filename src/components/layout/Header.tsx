import { Title } from '../ui/Title';
import { Nav } from '../ui/Nav';
import { ToggleSwitch } from '../ui/ToggleSwitch';

export function Header() {
  return (
    <header className='flex justify-center items-center p-20 bg-[#f2ece9] shadow-header'>
      <Title styles='absolute left-16 text-7xl text-black' />
      <Nav />
      <ToggleSwitch />
    </header>
  );
}
