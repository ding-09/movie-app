import React from 'react';
import { HomePageContainer } from './style';
import MovieCategory from '../../components/movieCategory';

import movieCategoryData from '../../utils/movieCategoryData';

const HomePage = () => {
  return (
    <HomePageContainer>
      {movieCategoryData.map((category, idx) => (
        <MovieCategory category={category} key={idx} />
      ))}
    </HomePageContainer>
  );
};

export default HomePage;
