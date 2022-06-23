import React from 'react';
import ResultsList from './ResultsList';
import { Modal } from './style';

const SearchResultsModal = ({ searchResults }) => {
  return (
    searchResults.length > 0 && (
      <Modal>
        <ResultsList searchResults={searchResults} />
      </Modal>
    )
  );
};

export default SearchResultsModal;
