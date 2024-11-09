import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudyAbroadPage from './pages/StudyAbroadPage';
import AboutPage from './pages/AboutPage';
import CareerSupportPage from './pages/CareerSupportPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import Login from './pages/Login'
import University from './pages/University'
import Countries from './pages/Countries'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudyAbroadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career-support" element={<CareerSupportPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/universities"  element={<University />} />
        <Route path="/countries"  element={<Countries />} />

      </Routes>
    </Router>
  );
}

export default App;