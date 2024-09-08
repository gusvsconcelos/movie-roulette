import { Title } from '../ui/Title';
import { Nav } from '../ui/Nav';
import { ToggleSwitch } from '../ui/ToggleSwitch';

export function Header() {
  return (
    <header className='flex justify-center items-center p-20 bg-[#F8EEEC] shadow-header'>
      <Title styles='absolute left-16 text-7xl text-black' />
      <Nav />
      <ToggleSwitch />
    </header>
  );
}
