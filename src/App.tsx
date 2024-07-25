import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/home';
import { SortMovie } from './pages/sort-random';
import { SortList } from './pages/sort-list';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/sort-random' element={<SortMovie />} />
          <Route path='/sort-list' element={<SortList />} />
        </Route>
      </Routes>
    </Router>
  );
}
