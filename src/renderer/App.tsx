import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Index from '../components/pages';
import BaseTemplate from '../components/templates';

export default function App() {
  return (
    <BaseTemplate>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </BaseTemplate>
  );
}
