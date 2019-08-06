import React from 'react';
import { Header as HeaderStyled, NavLink } from './HeaderStyled';

const Header = ({ active = 0 }) => {
  return (
    <HeaderStyled>
      <nav>
        <NavLink href="/campaigns" active={active === 0}>{name}</NavLink>
        <NavLink href="/templates" active={active === 1}>Templates</NavLink>
        <NavLink href="/lists" active={active === 2}>Lists</NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;