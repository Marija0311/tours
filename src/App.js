import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import NavBar from './NavBar';
import Home from './Home';
import Reviews from './Reviews';

function App() {
  return (
    
    <Router>
 <NavBar
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
