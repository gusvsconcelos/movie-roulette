import { Title } from '../ui/Title';

export function Footer() {
  return (
    <footer className='flex justify-center items-center w-screen mt-16 p-14 bg-black'>
      <Title styles='absolute left-14 mt-2 text-white text-xl' />
      <p className='absolute right-14 text-xs font-ui text-white'>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href='https://www.linkedin.com/in/gusvsconcelos'
          target='_blank'
          className='underline'>
          Gustavo Vasconcelos
        </a>
      </p>
    </footer>
  );
}
