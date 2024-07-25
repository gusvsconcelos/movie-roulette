import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';

export default function App() {
  return (
    <>
      <Header />

      <main className='flex flex-col justify-center items-center min-h-[calc(100vh-192px)]'>
        <Card />
        <Button text='Button' />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
