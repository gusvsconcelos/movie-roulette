import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';

export function Home() {
  return (
    <>
      <Header />

      <main className='flex flex-col justify-center items-center min-h-[calc(100vh-192px)]'>
        <Card />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
