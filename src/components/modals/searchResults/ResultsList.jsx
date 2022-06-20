import React from 'react';
import ListItem from './ListItem';



const ResultsList = ({searchResults}) => {
  return (
    <>
      {searchResults &&
        searchResults.map(movie => <ListItem movie={movie}/>)
      }
    </>
  );
};

export default ResultsList;
