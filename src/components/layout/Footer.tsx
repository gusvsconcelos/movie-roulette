import Title from '../ui/Title';

export default function Footer() {
  return (
    <footer className='flex justify-center items-center absolute bottom-0 w-screen p-11 bg-black'>
      <Title styles='absolute left-10 text-white' />
      <p className='absolute right-10 m-2 text-xs font-ui text-white'>
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
