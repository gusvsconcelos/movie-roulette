import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Button from './components/ui/Button';
import Card from './components/ui/Card';

// TODO: fix footer covering content

export default function App() {
  return (
    <div>
      <Header />
      <Button text='Button Component' />
      <Card />
      <Footer />
    </div>
  );
}
