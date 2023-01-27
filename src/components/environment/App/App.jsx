import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../../pages/AboutPage/About';
import HomePage from '../../pages/HomePage/HomePage';
import CCEPage from '../../pages/Projects/CCEPage/CCEPage';
import TwinPage from '../../pages/Projects/TwinStarz/TwinStarz';
import JUIPage from '../../pages/Projects/JuicePage/JIU';

import NavBar from '../../organisms/NavBar/NavBar';
import Footer from '../../organisms/Footer/Footer';

import './App.css';

function App() {
  console.log('App');
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="https://melaniemaldonado1.netlify.app/about"
          element={<About />}
        />
        <Route exact path="/projects/cce" element={<CCEPage />} />
        <Route exact path="/projects/twin-starz" element={<TwinPage />} />
        <Route exact path="/projects/juice-it-up" element={<JUIPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
