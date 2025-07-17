
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import RoundDiv from './components/roundDiv/RoundDiv';
import Middlediv from './components/middlediv/Middlediv';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='navbar' element={<Navbar />} />
            <Route path='rounddiv' element={<RoundDiv />} />
            <Route path='middlediv' element={<Middlediv />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
