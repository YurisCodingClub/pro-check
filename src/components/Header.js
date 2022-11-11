import React from 'react';
import { ReactComponent as LOGO } from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <div>
        <LOGO />
        <h1>ProCheck</h1>
      </div>
    </header>
  );
};

export default Header;
