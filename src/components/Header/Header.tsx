import React from 'react';
import { logo } from '../../assets'
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo beMobile' />
    </header>
  );
};

// teste

export default Header;
