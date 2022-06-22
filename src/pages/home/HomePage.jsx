import React from 'react';
import MovieCategory from '../../components/movieCategory';

import movieCategoryData from '../../utils/movieCategoryData';

const HomePage = () => {
  return (
    <>
      {movieCategoryData.map((category, idx) => (
        <MovieCategory category={category} key={idx} />
      ))}
    </>
  );
};

export default HomePage;
