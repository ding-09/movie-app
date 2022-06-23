import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './providers/MoviesProvider';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import FavoritesPage from './pages/favorites';

const App = () => {
  return (
    <BrowserRouter>
      <MoviesProvider>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='*' element='Page not found!' />
          </Routes>
        </main>
        <Footer />
      </MoviesProvider>
    </BrowserRouter>
  );
};

export default App;
