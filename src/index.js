import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardDetail from './components/CardDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Main route for App component */}
      <Route path="/" element={<App />} />

      {/* Route for CardDetail with a query parameter for image source */}
      <Route path="/card-detail" element={<CardDetail />} />
    </Routes>
  </BrowserRouter>
);
