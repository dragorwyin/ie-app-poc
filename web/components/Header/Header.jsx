import React from 'react';
import { Header as HeaderStyled, NavLink } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <NavLink href="/campaigns" active>Campaigns</NavLink>
        <NavLink href="/templates">Templates</NavLink>
        <NavLink href="/lists">Lists</NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;