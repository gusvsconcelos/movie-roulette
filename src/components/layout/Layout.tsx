import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Header />
      <main className='flex flex-col justify-center items-center min-h-[calc(100vh-240px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
