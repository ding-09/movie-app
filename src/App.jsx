import React from 'react';
import { MovieResultsProvider } from './providers/MovieResultsProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { SearchResultsModal } from './components/modals';
import HomePage from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <MovieResultsProvider>
        <Header />
        <HomePage />
        <SearchResultsModal />
        <Footer />
      </MovieResultsProvider>
    </BrowserRouter>
  );
};

export default App;
