import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import EDA from './pages/EDA.jsx';
import Clustering from './pages/Clustering.jsx';
import ModeloClasificacion from './pages/ModeloClasificacion.jsx';
import ExplainableAI from './pages/ExplainableAI.jsx';
import MapasInteractivos from './pages/MapasInteractivos.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eda" element={<EDA />} />
          <Route path="/modelo-clasificacion" element={<ModeloClasificacion />} />
          <Route path="/explainable-ai" element={<ExplainableAI />} />
          <Route path="/clustering" element={<Clustering />} />
          <Route path="/mapas" element={<MapasInteractivos />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300">
              © 2026 Bogotá Mobility Risk Data Analysis - Análisis de Accidentes de Tránsito en Bogotá D.C.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Proyecto de análisis predictivo con Machine Learning y Explainable AI
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
