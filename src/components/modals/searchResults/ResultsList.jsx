import React from 'react';
import ListItem from './ListItem';

const ResultsList = ({ searchResults }) => {
  return (
    <>
      {searchResults[0].Error ? (
        <h2 className='error'>{searchResults[0].Error}</h2>
      ) : (
        searchResults.map((movie, idx) => <ListItem movie={movie} key={idx} />)
      )}
    </>
  );
};

export default ResultsList;
