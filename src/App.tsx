import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { SortMovie } from './pages/sort-random';
import { SortList } from './pages/sort-list';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<SortMovie />} />
        <Route path='/' element={<SortList />} />
      </Routes>
    </Router>
  );
}
