import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import BusinessPage from './pages/businessPage';
import TechPage from './pages/tech';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/business">Business</a></li>
            <li><a href="/tech">Tech</a></li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/tech" element={<TechPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
