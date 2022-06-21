import React from 'react';
import { MovieResultsProvider } from './providers/MovieResultsProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { SearchResultsModal } from './components/modals'
import HomePage from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <MovieResultsProvider>
        <Header />
        <HomePage/>
        <SearchResultsModal/>
      </MovieResultsProvider>
    </BrowserRouter>
  );
};

export default App;
