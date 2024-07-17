import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Button from './components/ui/Button';

export default function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Button text='Sort' />
      <Nav />
    </div>
  );
}
