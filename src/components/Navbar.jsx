import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white shadow-2xl border-b-4 border-blue-500">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-8">
          <Link to="/" className="w-full group">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-3">Bogotá Mobility Risk Data Analysis</h1>
              <p className="text-lg text-blue-200 font-light">Transformando datos de siniestralidad en conocimiento para la movilidad segura en Bogotá</p>
            </div>
          </Link>
        </div>
        
        <div className="flex space-x-2 pb-6 overflow-x-auto">
          <Link
            to="/"
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap font-medium shadow-lg ${
              isActive('/') 
                ? 'bg-white text-slate-800 font-bold shadow-xl scale-105' 
                : 'hover:bg-slate-700 hover:shadow-xl hover:scale-105 bg-slate-800/50'
            }`}
          >
            🏠 Inicio
          </Link>
          <Link
            to="/eda"
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap font-medium shadow-lg ${
              isActive('/eda') 
                ? 'bg-white text-slate-800 font-bold shadow-xl scale-105' 
                : 'hover:bg-slate-700 hover:shadow-xl hover:scale-105 bg-slate-800/50'
            }`}
          >
            📊 Análisis Exploratorio - EDA
          </Link>
          <Link
            to="/modelo-clasificacion"
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap font-medium shadow-lg ${
              isActive('/modelo-clasificacion') 
                ? 'bg-white text-slate-800 font-bold shadow-xl scale-105' 
                : 'hover:bg-slate-700 hover:shadow-xl hover:scale-105 bg-slate-800/50'
            }`}
          >
            🤖 Modelo de Clasificación
          </Link>
          <Link
            to="/explainable-ai"
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap font-medium shadow-lg ${
              isActive('/explainable-ai') 
                ? 'bg-white text-slate-800 font-bold shadow-xl scale-105' 
                : 'hover:bg-slate-700 hover:shadow-xl hover:scale-105 bg-slate-800/50'
            }`}
          >
            🔍 Explainable AI
          </Link>
          <Link
            to="/clustering"
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap font-medium shadow-lg ${
              isActive('/clustering') 
                ? 'bg-white text-slate-800 font-bold shadow-xl scale-105' 
                : 'hover:bg-slate-700 hover:shadow-xl hover:scale-105 bg-slate-800/50'
            }`}
          >
            📍 Clustering
          </Link>
          <Link
            to="/mapas"
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap font-medium shadow-lg ${
              isActive('/mapas') 
                ? 'bg-white text-slate-800 font-bold shadow-xl scale-105' 
                : 'hover:bg-slate-700 hover:shadow-xl hover:scale-105 bg-slate-800/50'
            }`}
          >
            🗺️ Mapas Interactivos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
