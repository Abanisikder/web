import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/homePage';
import BusinessPage from './pages/businessPage';
import TechPage from './pages/tech';
import Admin from './pages/admin'; 
import Login from './pages/login'; // ✅ Corrected capitalization

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/tech">Tech</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Link to login page */}
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} /> {/* Added Login route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
