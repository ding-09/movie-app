import React from 'react';
import ResultsList from './ResultsList';
import { Modal } from './style';

const SearchResultsModal = ({ searchResults }) => {
  // const resultsContext = useMovieResults();
  // const searchResults = resultsContext.movieResults.Search;
  return (
    searchResults.length > 0 && (
      <Modal>
        <ResultsList searchResults={searchResults} />
      </Modal>
    )
  );
};

export default SearchResultsModal;
