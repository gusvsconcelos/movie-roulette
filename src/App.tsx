import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Button from './components/ui/Button';
import Card from './components/ui/Card';

export default function App() {
  return (
    <div>
      <Header />
      <Button text='button component' />
      <Card />
      <Footer />
    </div>
  );
}
