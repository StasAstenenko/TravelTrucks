import { lazy, Suspense } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:id' element={<DetailsPage />}>
              {/* <Route index element={<Features />} /> */}
              <Route path='features' element={<Features />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
