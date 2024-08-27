import { Title } from '../ui/Title';

export function Footer() {
  return (
    <footer className='flex justify-center items-center p-8 bg-black'>
      <Title styles='absolute left-16 text-white text-xl' />
      <p className='absolute right-16 text-xs font-ui text-white'>
        &copy; {new Date().getFullYear()}{' '}
        <a href='https://www.linkedin.com/in/gusvsconcelos' target='_blank'>
          Gustavo Vasconcelos
        </a>
      </p>
    </footer>
  );
}
