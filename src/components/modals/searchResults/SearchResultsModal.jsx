import React from 'react';
import ResultsList from './ResultsList';
import { useMovieResults } from '../../../providers/MovieResultsProvider';
import { Modal } from './style'

const SearchResultsModal = () => {
  const resultsContext = useMovieResults();
  const searchResults = resultsContext.movieResults.Search;
  return (
    searchResults && (
      <Modal>
        <ResultsList searchResults={searchResults} />
      </Modal>
    )
  );
};

export default SearchResultsModal;
