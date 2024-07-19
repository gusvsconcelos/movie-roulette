import Title from '../ui/Title';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 w-screen p-7 bg-black'>
      <div className='relative'>
        <Title styles='absolute top-2/4 text-white' />
        <p className='float-right m-2 text-xs font-ui text-white'>
          &copy; {new Date().getFullYear()}{' '}
          <a
            href='https://www.linkedin.com/in/gusvsconcelos'
            target='_blank'
            className='underline'>
            Gustavo Vasconcelos
          </a>
        </p>
      </div>
    </footer>
  );
}
