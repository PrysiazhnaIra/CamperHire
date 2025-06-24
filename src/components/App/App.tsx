import './App.css';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.js'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage.js')
);
const CatalogPage = lazy(
  () => import('../../pages/CatalogPage/CatalogPage.js')
);
const CamperDetailsPage = lazy(
  () => import('../../pages/CamperDetailsPage/CamperDetailsPage.js')
);
const CamperFeatures = lazy(
  () => import('../CamperFeatures/CamperFeatures.js')
);
const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews.js'));

function App() {
  return (
    <Suspense fallback={<Loader width="200" height="200" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
