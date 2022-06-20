import React, { useState } from 'react';
import Navbar from '../navbar';
import Searchbar from '../searchbar';
import { HeaderContainer } from './style';

const Header = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);

  const toggleHeader = () => {
    setShowSearchbar(!showSearchbar);
  };

  return (
    <HeaderContainer>
      {showSearchbar ? (
        <Searchbar toggleHeader={toggleHeader} />
      ) : (
        <Navbar toggleHeader={toggleHeader} />
      )}
    </HeaderContainer>
  );
};

export default Header;
