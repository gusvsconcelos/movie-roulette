import { Title } from '../ui/Title';

export function Footer() {
  return (
    <footer className='flex justify-center items-center p-10 bg-black'>
      <Title styles='absolute left-16 text-yellow-100 text-xl' />
      <p className='absolute right-16 text-xs font-ui text-yellow-100'>
        &copy; {new Date().getFullYear()}{' '}
        <a href='https://www.linkedin.com/in/gusvsconcelos' target='_blank'>
          Gustavo Vasconcelos
        </a>
      </p>
    </footer>
  );
}
