import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-2.svg';
import { BiSearch } from 'react-icons/bi';
import {Nav, RightNavGroup} from './style'

const Navbar = ({toggleHeader}) => {
  return (
    <Nav>
      <figure>
        <Link to='/'>
          <img src={logo} alt='Website Logo' />
        </Link>
      </figure>
      <RightNavGroup>
        <BiSearch color='#faf9f9' size={'16px'} onClick={toggleHeader}/>
        <Link to='/favorites'>My Favorites</Link>
      </RightNavGroup>
    </Nav>
  );
};

export default Navbar;
