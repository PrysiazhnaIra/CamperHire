import './App.css';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(
  () => import('../../pages/CamperDetailsPage/CamperDetailsPage')
);
const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures'));
const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <Suspense fallback={<Loader width="200" height="200" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
