import { Suspense } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Loader from './components/Loader/Loader';
// import DetailsPage from './pages/DetailsPage/DetailsPage';

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            {/* <Route path='/details' element={<DetailsPage />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
