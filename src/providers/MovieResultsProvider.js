import React, { useState, useContext, createContext } from 'react';

const MovieResultsContext = createContext();

export const MovieResultsProvider = ({ children }) => {
  const [movieResults, setMovieResults] = useState([]);

  const value = { movieResults, setMovieResults };
  return (
    <MovieResultsContext.Provider value={value}>
      {children}
    </MovieResultsContext.Provider>
  );
};

export const useMovieResults = () => {
  const context = useContext(MovieResultsContext);
  if (context === undefined) {
    throw new Error('undefined context');
  }
  return context;
};
