import React from 'react';
import ListItem from './ListItem';

const ResultsList = ({ searchResults }) => {
  return (
    <>
      {searchResults.map((movie, idx) => (
        <ListItem movie={movie} key={idx} />
      ))}
    </>
  );
};

export default ResultsList;
