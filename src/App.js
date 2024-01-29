import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './pages/styles/components/styles.scss';
import MentionsLegales from "./pages/MentionsLegales";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionsLegales" element={<MentionsLegales />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

