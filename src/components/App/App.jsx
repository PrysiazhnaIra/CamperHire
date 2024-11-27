import './App.css';
import { Route, Routes } from 'react-router';
import React, { Suspense } from 'react';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import CamperDetailsPage from '../../pages/CamperDetailsPage/CamperDetailsPage.jsx';
import Features from '../Features/Features.jsx';
import Reviews from '../Reviews/Reviews.jsx';

function App() {
  return (
    <Suspense fallback={<h2>LOADING YOUR COMPONENT!</h2>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="./catalog/:id" element={<CamperDetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
