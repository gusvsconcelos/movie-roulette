import Title from './Title';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 w-screen p-9 bg-black'>
      <Title styles='inline m-2 text-1xl font-bold text-white' />
      <p className='float-right m-2 text-xs text-white'>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href='https://www.linkedin.com/in/gusvsconcelos'
          target='_blank'
          className='underline'
        >
          Gustavo Vasconcelos
        </a>
      </p>
    </footer>
  );
}
