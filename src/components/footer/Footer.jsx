import React from 'react';
import { FooterContainer, SocialIconsGroup, Copyright } from './style';
import { Link } from 'react-router-dom';

// social media icons & assets
import logo from '../../assets/logo.svg';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillFacebook,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
      <figure>
        <Link to='/'>
          <img src={logo} alt={logo} />
        </Link>
      </figure>
      <SocialIconsGroup>
        <li>
          <a href='#'>
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.github.com/ding-09/movie-app'>
            <AiOutlineGithub />
          </a>
        </li>
        <li>
          <a href='#'>
            <AiFillFacebook />
          </a>
        </li>
      </SocialIconsGroup>
      <Copyright>Copyright 2022. All rights reserved</Copyright>
    </FooterContainer>
  );
};

export default Footer;
