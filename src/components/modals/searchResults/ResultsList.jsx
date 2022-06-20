import React from 'react';
import ListItem from './ListItem';
import { useMovieResults } from '../../../providers/MovieResultsProvider';
import { Modal } from './style';

const ResultsList = () => {
  const resultsContext = useMovieResults();
  const searchResults = resultsContext.movieResults.Search;
  return (
    <Modal>
      {searchResults &&
        searchResults.map(movie => <ListItem movie={movie}/>)
      }
    </Modal>
  );
};

export default ResultsList;
